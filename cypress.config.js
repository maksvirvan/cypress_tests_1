const { defineConfig } = require("cypress");
const { tagify } = require('cypress-tags');

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config));
    },
  },
});
