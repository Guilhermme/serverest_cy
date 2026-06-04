/* eslint-disable handle-callback-err */

import './comandos'
import 'cypress-wait-until'
import 'cypress-intercept-formdata'
import 'cypress-localstorage-commands'

Cypress.on('uncaught:exception', () => false)
