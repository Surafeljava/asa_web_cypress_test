const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://amharicsentiment.netlify.app",
    viewportWidth: 1200,
    viewportHeight: 800,
  },
});
