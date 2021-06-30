// <reference types="cypress" />
describe('My First Test suite', () => {
    it('Attempt recurring event', () => {
    cy.visit("https://tix-staging.netlify.app/login/")
    //cy.get(':nth-child(5) > .u-button').click()
    cy.get('.login--form__email--input > .el-input__inner').type('nneka@tix.africa')
    cy.get('.login--form__password--input > .el-input__inner').type('........')
    cy.get('.login--form__buttons > .u-button').click()
    cy.wait(2000) // wait for landing page
    cy.get('.events--page__header--text').should('be.visible')
    cy.get('span').click()
    cy.get('.event-type__personal > .event-type__step').click()
    cy.get('.event-type__buttons > :nth-child(2)').click()
    const eventname = () => Cypress._.random(0, 1e2)
    const event = eventname()
    const name = `Automated_recurring_event${event}`
    const customname = `aut${event}`
    cy.get(':nth-child(1) > .event__form--section__content > .first--child > .el-form-item__content > .el-input > .el-input__inner').type(name)
    cy.get('.trix-content').type('just a description')
    cy.get(':nth-child(1) > .event__form--section__content > :nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type(customname)
    cy.get('.el-select__caret').click()
    cy.contains("career").should('be.visible')
    cy.contains('career').click()
    const filepath = 'images/banner.jpg'
    cy.get('input[type="file"]').attachFile(filepath)
    cy.get('.uploader__thumbnail')
    cy.wait(2000) //wait for file upload 
    cy.get('.event__form--section__timing > :nth-child(2) > span').click()
    //el-picker-panel el-date-picker el-popper
    cy.get(':nth-child(1) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner').click()
    cy.get('.el-picker-panel el-date-picker el-popper> .ui-state-default').click()
    //cy.get(':nth-child(1) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner').type('May 24,2022')
    cy.get('.input').select("every day")
    cy.get(':nth-child(2) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner').type('00:00')
    cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner').clear().type('18:00')
    cy.get(':nth-child(4) > :nth-child(1) > .el-form-item > .el-form-item__content > .flex > .el-radio > .el-radio__input > .el-radio__inner').click()
    cy.get('.input-number > .el-input__inner').type("4")
    
    cy.get('[native-type="submit"]').click()
    cy.wait(2000)
    cy.contains('online events').should('be.visible')

    cy.get('.online--form__input').select("manually add an event link")
    cy.get('.el-textarea__inner').type("Zoomlinkplaceholdertexts")
    cy.get('.el-button').click()
    

})
  })