const { defineConfig } = require("cypress");
const dotenv = require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      baseUrl: process.env.BASE_URL,
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
      apiUrl: process.env.API_URL
    },

    watchForFileChanges: false,
    excludeSpecPattern: [
      "cypress/e2e/1-getting-started/*",
      "cypress/e2e/2-advanced-examples/*",
    ],

    // viewportWidth: 1200,
    // viewportHeight: 700,

    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
  defaultCommandTimeout: 15000,
});
