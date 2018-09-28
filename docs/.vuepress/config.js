module.exports = {
  title: 'MWB Documentation',
  description: 'Data migration workbench',
  base: '/mwb-docs/',
  serviceWorker: false,
  footer: true,
  themeConfig: {
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Measure Calculation', link: '/measure-calculation/' },
      { text: 'DashboardThumbnail', link: '/dashboard-thumbnail/' },
      { text: 'Redux Store', 
        items: [
          { text: 'Overview', link: '/redux/redux-store.md' },
          { text: 'Middleware', link: '/redux/redux-middleware.md' },
          { text: 'Selector Helpers', link: '/redux/redux-selector-helpers.md' },
          { text: 'Computed State', link: '/redux/redux-computed-state.md' },
          { text: 'Observable Arrays', link: '/redux/redux-observable-arrays.md' },
          { text: 'Reducer Testing', link: '/redux/redux-reducer-testing.md' }
         ] 
      },
      { text: 'Testing', 
        items: [
          { text: 'Cypress e2e Testing', link: '/testing/cypress-e2e-tests.md' },
          { text: 'Cypress Test Results', link: '/testing/cypress-test-results.md' },
          { text: 'Unit Tests', link: '/testing/unit-test-results.md' },
          { text: 'Code Coverage', link: '/testing/code-coverage.md' },
          { text: 'Webpack Bundle Analyzer', link: '/testing/webpack-bundle-analyzer-results.md' },
          { text: 'npm audit security report', link: '/testing/npm-audit.md' },
        ]
      },
      { text: 'Github', link: 'https://github.com/RichardMatsen/mwb-v2-redux' }
    ],
    sidebar: 'auto',
    sidebarDepth: 5,
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
  }
}