const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cpcush',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "mmddyy_HHMMss",
    charts: true,
    code: true,
    reportTitle: "Alura: E2E Automation with Cypress"
  },
  e2e: {
    baseUrl: 'https://alura-fotos.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
