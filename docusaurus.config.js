// @ts-check
// Docusaurus 3 config — see https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lionbridge Content API — Auto-Bundle & Continuous Jobs',
  tagline: 'Support & user documentation',
  favicon: 'img/favicon.ico',

  // Update these before deploying.
  url: 'https://pankaj-raundal.github.io',
  baseUrl: '/drupal-connector-autobundle-docs/',

  organizationName: 'pankaj-raundal',
  projectName: 'drupal-connector-autobundle-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Keep numeric prefixes (01-, 02-, …) in URLs and doc ids so the
          // sidebar order matches the on-disk order 1:1.
          numberPrefixParser: false,
          editUrl:
            'https://github.com/pankaj-raundal/drupal-connector-autobundle-docs/edit/main/',
          showLastUpdateTime: true,
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
      image: 'img/social-card.png',
      navbar: {
        title: 'Auto-Bundle Docs',
        logo: {
          alt: 'Lionbridge',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'main',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://www.drupal.org/project/lionbridge_translation_provider',
            label: 'Drupal.org',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Overview', to: '/01-overview/what-is-auto-bundle' },
              { label: 'End-to-end flow', to: '/01-overview/end-to-end-flow' },
              { label: 'Troubleshooting', to: '/06-troubleshooting/items-not-bundling' },
            ],
          },
          {
            title: 'Reference',
            items: [
              { label: 'Config schema', to: '/07-reference/config-schema' },
              { label: 'Services map', to: '/07-reference/services-map' },
              { label: 'Routes & URLs', to: '/07-reference/routes-and-urls' },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'Drupal.org project page',
                href: 'https://www.drupal.org/project/lionbridge_translation_provider',
              },
            ],
          },
        ],
        copyright: `Lionbridge — Documentation built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
        additionalLanguages: ['php', 'yaml', 'bash'],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

module.exports = config;
