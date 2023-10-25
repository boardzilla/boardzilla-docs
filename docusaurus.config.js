// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path')

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Boardzilla docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://docs.boardzilla.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // ...
  projectName: 'boardzilla-docs',
  organizationName: 'boardzilla',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/boardzilla/boardzilla-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Boardzilla docs',
        logo: {
          alt: 'RAR!',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            to: 'api',
            label: 'API',
            position: 'left',
          },
        ],      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/boardzilla',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/bdjpdmuZpH',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Meow Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      require.resolve('docusaurus-lunr-search'),
      [
        'docusaurus-plugin-typedoc-api',
        {
          projectRoot: path.join(__dirname, '../boardzilla-core'),
          packages: [{
            path: ".",
            entry: '.',
          }],
          typedocOptions: {
            // Comments are supported, like tsconfig.json
            "plugin": ["typedoc-plugin-rename-defaults"],
          }
        },
      ],
    ],
};

module.exports = config;
