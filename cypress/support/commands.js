/// <reference types="cypress" />
import signin from '../support/locators/signin'

Cypress.Commands.add('login', () => {
  cy.fixture('userData').then((user)=>{
    cy.get(signin.INPUT_EMAIL).should('be.visible').type(user.email)
    cy.get(signin.INPUT_PASSWORD).should('be.visible').type(user.password)
    cy.get(signin.BTN_LOGIN).should('be.visible').click()
  })
})
