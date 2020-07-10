/// <reference types="cypress" />

import constants from '../../support/constants'

import addressPage from '../../support/locators/address'
import cartPage from '../../support/locators/cart'
import homepage from '../../support/locators/homepage'
import paymentPage from '../../support/locators/payment'
import shippingPage from '../../support/locators/shipping'
import summaryPage from '../../support/locators/summary'

describe('As a user, I want to register in e-commerce to buy clothes with success', () => {

    beforeEach(() => { cy.visit('') })

    it('Make a purchase with a registered user with bank wire', () => {
        constants.fillFieldWithTextAndPressEnter(homepage.INPUT_SEARCH, 'Faded Short Sleeve T-shirts')
        constants.clickWhenClickable(cartPage.BTN_ADD_TO_CART)
        constants.clickWhenClickable(cartPage.BTN_PROCEED_CHECKOUT)
        constants.waitElementToBeVisible(summaryPage.LABEL_IN_STOCK)
        constants.clickWhenClickable(summaryPage.BTN_PROCEED_CHECKOUT)
        cy.login()
        constants.clickWhenClickable(addressPage.BTN_PROCEED_CHECKOUT)
        constants.clickWhenClickable(shippingPage.CHECKBOX_TERMS_USE)
        constants.clickWhenClickable(shippingPage.BTN_PROCEED_CHECKOUT)
        constants.clickWhenClickable(paymentPage.BTN_BANK_WIRE)
        constants.clickWhenClickable(paymentPage.BTN_CONFIRM_ORDER)
        constants.assertThat(paymentPage.HEADER_ORDER_CONFIRMATION, 'have.text', 'Order confirmation')
    })

    it('Make a purchase with a registered user with check', () => {
        constants.fillFieldWithTextAndPressEnter(homepage.INPUT_SEARCH, 'Faded Short Sleeve T-shirts')
        constants.clickWhenClickable(cartPage.BTN_ADD_TO_CART)
        constants.clickWhenClickable(cartPage.BTN_PROCEED_CHECKOUT)
        constants.waitElementToBeVisible(summaryPage.LABEL_IN_STOCK)
        constants.clickWhenClickable(summaryPage.BTN_PROCEED_CHECKOUT)
        cy.login()
        constants.clickWhenClickable(addressPage.BTN_PROCEED_CHECKOUT)
        constants.clickWhenClickable(shippingPage.CHECKBOX_TERMS_USE)
        constants.clickWhenClickable(shippingPage.BTN_PROCEED_CHECKOUT)
        constants.clickWhenClickable(paymentPage.BTN_CHECK)
        constants.clickWhenClickable(paymentPage.BTN_CONFIRM_ORDER)
        constants.assertThat(paymentPage.HEADER_ORDER_CONFIRMATION, 'have.text', 'Order confirmation')
    })
})
