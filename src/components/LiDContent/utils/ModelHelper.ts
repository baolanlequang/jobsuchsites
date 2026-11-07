// Question data is generated at build time by plugins/lid-data: each category
// is a code-split JS chunk holding base64(gzip(json) XOR key). No plain .json
// file is served.
// @ts-ignore — virtual module resolved by the plugin's webpack alias
import keyBase64 from '@lid-data/key';

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function decode(payload: string): Promise<string> {
  const key = base64ToBytes(keyBase64);
  const bytes = base64ToBytes(payload);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] ^= key[i % key.length];
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Response(stream).text();
}

export class ModelHelper {
  async decodeJsonFromFile<T>(fileName: string, modelType: { new(): T } | Array<{ new(): T }>): Promise<T | T[] | null> {
    try {
      const module = await import(`@lid-data/${fileName}`);
      const data = await decode(module.default);
      if (Array.isArray(modelType)) {
        return JSON.parse(data) as T[];
      }
      return JSON.parse(data) as T;
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  }
}
