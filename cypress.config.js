const _ = require('lodash')
const { defineConfig } = require('cypress')

const configEnv = {
  desenvolvimento: {
    env: {},
    expose: {}
  },
  homologacao: {
    env: {},
    expose: {
      url_serve_rest: 'https://serverest.dev'
    }
  }
}

function setupNodeEvents (on, config) {
  const configEnvironment = config.env.configFile || 'homologacao'
  _.merge(config, configEnv[configEnvironment])

  return config
}

module.exports = defineConfig({
  video: false,
  viewportHeight: 768,
  viewportWidth: 1366,
  pageLoadTimeout: 200000,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: false,
  screenshotOnRunFailure: true,
  env: {},
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js'
  }
})
