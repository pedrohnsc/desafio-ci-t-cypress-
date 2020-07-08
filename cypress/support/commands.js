/// <reference types="cypress" />
import signin from '../support/locators/signin'

Cypress.Commands.add('login',(email, pass) =>{
    cy.get(signin.INPUT_EMAIL).should('be.visible').type(email)
    cy.get(signin.INPUT_PASSWORD).should('be.visible').type(pass)
    cy.get(signin.BTN_LOGIN).should('be.visible').click()
})
