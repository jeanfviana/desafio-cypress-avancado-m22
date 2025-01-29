const { defineConfig } = require("cypress");
const { tabNavigation, setDebuggingPort } = require("./cypress/support/utils/tabNavigation");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          const debuggingPort = launchOptions.args.find(
            (arg) => arg.slice(0, 23) === '--remote-debugging-port',
          );
          setDebuggingPort(debuggingPort.split('='));
        }
        return launchOptions;
      });

      on('task', {
        tabNavigation
      });

    },
    chromeWebSecurity: false,
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "mochawesome-report",
    reportFilename: "index.html",
    overwrite: false,
    html: true,
    json: false
  }

});