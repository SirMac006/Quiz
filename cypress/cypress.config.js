const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: "http://localhost:3000",
  component: {
    componentFolder: "src/components",
    testFiles: "**/*.spec.js"
  },
  e2e: {
    supportFile: "cypress/support/index.js",
    fixturesFolder: "cypress/fixtures",
    integrationFolder: "cypress/integration",
    pluginsFile: "cypress/plugins/index.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
