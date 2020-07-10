/// <reference types="cypress" />
import constants from './constants'

import signin from './locators/signin'

Cypress.Commands.add('login', () => {
  cy.fixture('userData').then((user)=>{
    constants.fillFieldWithText(signin.INPUT_EMAIL,user.email)
    constants.fillFieldWithText(signin.INPUT_PASSWORD,user.password)
    constants.clickWhenClickable(signin.BTN_LOGIN)
  })
})
