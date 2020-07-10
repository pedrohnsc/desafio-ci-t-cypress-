const constants = {
    fillFieldWithTextAndPressEnter(htmlElement, text) {
        cy.get(htmlElement).should('be.visible').type(text + '{enter}')
    },

    fillFieldWithText(htmlElement, text){
        cy.get(htmlElement).should('be.visible').type(text)
    },

    clickWhenClickable(htmlElement) {
        cy.get(htmlElement).should('be.visible').click()
    },

    waitElementToBeVisible(htmlElement) {
        cy.get(htmlElement).should('be.visible')
    },

    assertThat(htmlElement, assertion, textToValidate) {
        cy.get(htmlElement).should(assertion, textToValidate)
    }
}

export default constants