/// <reference types="cypress" />

import constants from '../../support/constants'

import addressPage from '../../support/locators/address'
import cartPage from '../../support/locators/cart'
import homepage from '../../support/locators/homepage'
import paymentPage from '../../support/locators/payment'
import shippingPage from '../../support/locators/shipping'
import summaryPage from '../../support/locators/summary'

describe('Tests relate to store', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Should make a buy by bank wire', () => {
    constants.fillFieldAndPressEnter(homepage.INPUT_SEARCH,'Faded Short Sleeve T-shirts')
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

  it('Should make a buy by check', () => {
    constants.fillFieldAndPressEnter(homepage.INPUT_SEARCH,'Faded Short Sleeve T-shirts')
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
