/// <reference types="cypress" />

import addressPage from '../support/locators/address'
import homepage from '../support/locators/homepage'
import cartPage from '../support/locators/cart'
import summaryPage from '../support/locators/summary'
import signinPage from '../support/locators/signin'
import shippingPage from '../support/locators/shipping'
import paymentPage from '../support/locators/payment'

describe('Tests relate to store',()=>{


    beforeEach(()=>{
        cy.visit('')
    })

    it('Should make a buy by bank wire',()=>{
        cy.get(homepage.INPUT_SEARCH).should('be.visible').type('Faded Short Sleeve T-shirts{enter}')
        cy.get(cartPage.BTN_ADD_TO_CART).click()
        cy.get(cartPage.BTN_PROCEED_CHECKOUT).click()
        cy.get(summaryPage.LABEL_IN_STOCK).should('be.visible')
        cy.get(summaryPage.BTN_PROCEED_CHECKOUT).click()
        cy.login("pedrohnsc2@gmail.com", "1550220pH@")
        cy.get(addressPage.BTN_PROCEED_CHECKOUT).click()
        cy.get(shippingPage.CHECKBOX_TERMS_USE).click()
        cy.get(shippingPage.BTN_PROCEED_CHECKOUT).click()
        cy.get(paymentPage.BTN_BANK_WIRE).click()
        cy.get(paymentPage.BTN_CONFIRM_ORDER).click()
        cy.get(paymentPage.HEADER_ORDER_CONFIRMATION).should('have.text', 'Order confirmation')
    })

    it('Should make a buy by check',()=>{
        cy.get(homepage.INPUT_SEARCH).should('be.visible').type('Faded Short Sleeve T-shirts{enter}')
        cy.get(cartPage.BTN_ADD_TO_CART).click()
        cy.get(cartPage.BTN_PROCEED_CHECKOUT).click()
        cy.get(summaryPage.LABEL_IN_STOCK).should('be.visible')
        cy.get(summaryPage.BTN_PROCEED_CHECKOUT).click()
        cy.login("pedrohnsc2@gmail.com", "1550220pH@")
        cy.get(addressPage.BTN_PROCEED_CHECKOUT).click()
        cy.get(shippingPage.CHECKBOX_TERMS_USE).click()
        cy.get(shippingPage.BTN_PROCEED_CHECKOUT).click()
        cy.get(paymentPage.BTN_CHECK).click()
        cy.get(paymentPage.BTN_CONFIRM_ORDER).click()
        cy.get(paymentPage.HEADER_ORDER_CONFIRMATION).should('have.text', 'Order confirmation')
    })
})