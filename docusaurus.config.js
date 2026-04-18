__webpack_public_path__ = "/docs/";

module.exports = {
  title: "Devsy docs | DevContainers everywhere",
  tagline: "DevContainers everywhere",
  url: "https://devsy.sh",
  baseUrl: __webpack_public_path__,
  favicon: "/media/devsy-favicon.svg",
  organizationName: "devsy-org",
  projectName: "devsy",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "devsy",
        src: "/media/devsy-logo-horizontal.svg",
        srcDark: "/media/devsy-logo-horizontal-dark.svg",
        href: "https://devsy.sh/",
        target: "_self",
      },
      items: [
        {
          href: "https://devsy.sh/",
          label: "Website",
          position: "left",
          target: "_self",
        },
        {
          to: "/docs/what-is-devsy",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/devsy-org/devsy",
          className: "github-link",
          "aria-label": "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://devsy.sh/">Devsy</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "pages",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/devsy-org/docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/scss/custom.scss"),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  scripts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
      async: true,
    },
    {
      src: "/docs/js/custom.js",
      async: true,
    },
  ],
};
