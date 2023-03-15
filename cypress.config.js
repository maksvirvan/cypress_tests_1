const { defineConfig } = require("cypress");
const { tagify } = require('cypress-tags');

module.exports = defineConfig({
  screenshotsFolder: 'cypress/results/screenshots',
  videosFolder: 'cypress/results/videos',
  video: true,
  trashAssetsBeforeRuns: true,
  reporter: 'mochawesome',
  reporterOptions: {
    useInlineDiffs: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/results',
    overwrite: true,
    charts: true,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config));
    },
  },
});
