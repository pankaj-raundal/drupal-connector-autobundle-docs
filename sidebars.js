// @ts-check

// Sidebar mirrors the folder structure. Each numeric prefix keeps ordering
// stable both on disk and in the rendered navigation. When adding a page,
// place it in the correct folder and append it to the matching items array.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    'intro',
    {
      type: 'category',
      label: '1. Overview',
      collapsed: false,
      items: [
        '01-overview/what-is-auto-bundle',
        '01-overview/end-to-end-flow',
      ],
    },
    {
      type: 'category',
      label: '2. Prerequisites',
      items: [
        '02-prerequisites/install-and-credentials',
        '02-prerequisites/tmgmt-provider-setup',
        '02-prerequisites/priority-field-content-model',
      ],
    },
    {
      type: 'category',
      label: '3. Continuous job',
      items: [
        '03-continuous-job/enable-continuous-mode',
        '03-continuous-job/what-triggers-a-continuous-job',
        '03-continuous-job/queue-and-cron',
      ],
    },
    {
      type: 'category',
      label: '4. Auto-Bundle tab (per field)',
      items: [
        '04-auto-bundle-tab/01-enable-toggle',
        '04-auto-bundle-tab/02-always-on-dimensions',
        '04-auto-bundle-tab/03-optional-dimensions',
        '04-auto-bundle-tab/04-priority-tier-grouping',
        '04-auto-bundle-tab/05-trigger-thresholds',
        '04-auto-bundle-tab/06-limits-and-caps',
        '04-auto-bundle-tab/07-workflow-gate',
        '04-auto-bundle-tab/08-status-panel-and-manual-flush',
      ],
    },
    {
      type: 'category',
      label: '5. Runtime behavior',
      items: [
        '05-runtime-behavior/group-key-composition',
        '05-runtime-behavior/status-widget',
        '05-runtime-behavior/when-bundles-are-released',
      ],
    },
    {
      type: 'category',
      label: '6. Troubleshooting',
      items: [
        '06-troubleshooting/items-not-bundling',
        '06-troubleshooting/bundle-split-unexpectedly',
        '06-troubleshooting/stuck-in-queue',
        '06-troubleshooting/empty-priority-field-warning',
      ],
    },
    {
      type: 'category',
      label: '7. Reference',
      items: [
        '07-reference/config-schema',
        '07-reference/services-map',
        '07-reference/permissions',
        '07-reference/routes-and-urls',
      ],
    },
  ],
};

module.exports = sidebars;
