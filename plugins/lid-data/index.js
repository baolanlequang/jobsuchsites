// @ts-check
/**
 * Local Docusaurus plugin: turns the Leben-in-Deutschland question JSONs in
 * `lid_data/` into scrambled JS modules so the site never serves them as
 * plain, directly downloadable `.json` files.
 *
 * Per category it writes `<generatedFilesDir>/lid-data/<name>.js` exporting a
 * base64 string of: gzip(json) XOR key. A fresh random key is created on
 * every build and exported from `key.js`. The page imports a category with
 * `import('@lid-data/<name>')` (webpack code-splits each into its own hashed
 * chunk) and decodes it in the browser (see LiDContent/utils/ModelHelper.ts).
 *
 * This is obfuscation, not real security: the key ships with the page. It
 * stops casual copying and generic scrapers, not a determined person.
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');

const KEY_LENGTH = 32;

/** @param {import('@docusaurus/types').LoadContext} context */
module.exports = function lidDataPlugin(context) {
  const sourceDir = path.join(context.siteDir, 'lid_data');
  const outDir = path.join(context.generatedFilesDir, 'lid-data');

  return {
    name: 'lid-data',

    getPathsToWatch() {
      return [path.join(sourceDir, '*.json')];
    },

    async loadContent() {
      fs.rmSync(outDir, {recursive: true, force: true});
      fs.mkdirSync(outDir, {recursive: true});

      const key = crypto.randomBytes(KEY_LENGTH);
      fs.writeFileSync(
        path.join(outDir, 'key.js'),
        `export default ${JSON.stringify(key.toString('base64'))};\n`,
      );

      const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith('.json'));
      for (const file of files) {
        const json = fs.readFileSync(path.join(sourceDir, file), 'utf8');
        JSON.parse(json); // fail the build on malformed data
        const packed = zlib.gzipSync(Buffer.from(json, 'utf8'), {level: 9});
        for (let i = 0; i < packed.length; i++) {
          packed[i] ^= key[i % KEY_LENGTH];
        }
        const name = path.basename(file, '.json');
        fs.writeFileSync(
          path.join(outDir, `${name}.js`),
          `export default ${JSON.stringify(packed.toString('base64'))};\n`,
        );
      }
    },

    configureWebpack() {
      return {
        resolve: {
          alias: {'@lid-data': outDir},
        },
      };
    },
  };
};
