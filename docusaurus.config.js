/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GLDF',
  tagline: 'Global Lighting Data Format',
  url: 'https://gldf.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'globallightingdata',
  projectName: 'website',
  themeConfig: {
    // announcementBar: {
    //   id: 'licht2021',
    //   content: 'Meet us online @<a target="_blank" rel="noopener noreferrer" href="/blog/2021/03/22/licht-2021">LICHT2021</a>',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091E42',
    //   isCloseable: true,
    // },
    prism: {
      defaultLanguage: 'xml',
      additionalLanguages: ['csharp'],
      /* Themes: https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes */
      theme: require('prism-react-renderer/themes/palenight'),
      darkTheme: require('prism-react-renderer/themes/palenight'),
    },
    navbar: {
      title: 'GLDF',
      logo: {
        alt: 'GLDF Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          to: 'blog/',
          label: 'Blog',
          position: 'left',
        },
        {
          to: 'getting-started/',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: '/xsd-reference/index_Root.html',
          label: 'XSD Reference',
          position: 'left',
          target: '_blank',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        //   dropdownItemsBefore: [],
        //   dropdownItemsAfter: [
        //     {
        //       // to: 'https://gldf.io/help-us-translate',
        //       // label: 'Help us translate',
        //     },
        //   ],
        // },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        //   dropdownActiveClassDisabled: true,
        //   dropdownItemsBefore: [],
        //   dropdownItemsAfter: [
        //     {
        //       to: '/versions',
        //       label: 'All versions',
        //     },
        //   ],
        // },
        {
          to: 'download',
          label: 'Download',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/globallightingdata/gldf/releases',
        //   label: 'Download',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/globallightingdata/gldf',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'DIAL GmbH',
          items: [
            {
              label: 'Website',
              href: 'https://www.dial.de',
            },
            {
              label: 'DIALux',
              href: 'https://www.dialux.com',
            },
            {
              label: 'LUMsearch',
              href: 'https://lumsearch.com',
            },
          ],
        },
        {
          title: 'RELUX Informatik AG',
          items: [
            {
              label: 'Website',
              href: 'https://relux.com',
            },
            {
              label: 'ReluxDesktop',
              href: 'https://relux.com/en/relux-desktop.html',
            },
            {
              label: 'ReluxNet',
              href: 'https://relux.com/en/search/luminaires/',
            },
          ],
        },
        {
          title: 'Imprint',
          items: [
            {
              label: 'Legal notice',
              to: 'imprint',
            },
            {
              label: 'Data Protection Policy',
              to: 'privacy-policy',
            },
          ],
        },
      ],
      copyright: `
      © ${new Date().getFullYear()} DIAL GmbH & RELUX Informatik AG. All rights reserved.<br />
      Created with <a href ='https://github.com/facebook/docusaurus' target='_blank'>Docusaurus</a>.
      `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/index.css'),
            require.resolve('./src/css/imprint.css'),
          ],
        },
      },
    ],
  ],
  // scripts: [
  //   {
  //     src: 'https://s.imgur.com/min/embed.js',
  //     async: true,
  //   },
  // ],
};
