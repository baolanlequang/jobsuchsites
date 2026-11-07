// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Find job in Germany Site',
  tagline: 'jobsuch site',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jobsuch.baolan2005.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'baolan2005', // Usually your GitHub org/user name.
  projectName: 'jobsuchsites', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap',
  ],

  plugins: ['./plugins/lid-data'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'Find jobs in Germany',
        logo: {
          alt: 'Jobs Search Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/', label: 'Tìm việc ở Đức', position: 'left', activeBaseRegex: '^/$'},
          {to: '/lidvn', label: 'Leben in Deutschland', position: 'left'},
          {
            href: 'https://baolan2005.com',
            label: 'baolan2005.com',
            position: 'right',
          },
          {
            href: 'https://github.com/baolanlequang',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              {
                html: `
                  <a href="https://www.buymeacoffee.com/baolanlequang" target="_blank" rel="noopener noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 30px !important;width: 117px !important;" ></a>
                `,
              },
            ],
          },
          {
            title: 'Pages',
            items: [
              {label: 'Tìm việc ở Đức', to: '/'},
              {label: 'Leben in Deutschland', to: '/lidvn'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'baolan2005.com', href: 'https://baolan2005.com'},
              {label: 'Blog', href: 'https://baolan2005.com/blog'},
              {label: 'LinkedIn', href: 'https://www.linkedin.com/in/lan-le-a036368a'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} baolan2005. Built with Docusaurus.`,
      },
      metadata: [
        {name: 'keywords', content: 'job in Germany, tim viec o Duc, tim viec o duc'},
        {name: 'google-adsense-account', content: 'ca-pub-2297027240894987'},
      ],
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
