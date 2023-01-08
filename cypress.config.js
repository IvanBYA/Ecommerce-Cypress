const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    // https://docs.cypress.io/guides/core-concepts/test-isolation#What-you-ll-learn
    testIsolation: true,
  }
});
