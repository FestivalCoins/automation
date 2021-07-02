// <reference types="cypress" />
describe('My First Test suite', () => {
    it('login, create live event, create ticket and publish', () => {
    cy.visit("https://tix-staging.netlify.app/login/")
    //cy.get(':nth-child(5) > .u-button').click()
    cy.get('.login--form__email--input > .el-input__inner').type('nneka@tix.africa')
    cy.get('.login--form__password--input > .el-input__inner').type('........')
    cy.get('.login--form__buttons > .u-button').click()
    cy.wait(2000) // wait for landing page
    cy.get('.events--page__header--text').should('be.visible')
    cy.get('span').click()
    cy.get('.event-type__business > .event-type__step').click()
    cy.get('.event-type__buttons > :nth-child(2)').click()
    const eventname = () => Cypress._.random(0, 1e2)
    const event = eventname()
    const name = `Auto_Live_recurring_event${event}`
    const customname = `aut${event}`
    cy.get(':nth-child(1) > .event__form--section__content > .first--child > .el-form-item__content > .el-input > .el-input__inner').type(name)
    cy.get('.trix-content').type('just a description')
    cy.get('.el-col-16 > .el-input > .el-input__inner').type("Hidden location to be revealed a day before the event")
    cy.get(':nth-child(1) > .event__form--section__content > :nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type(customname)
    cy.get('.el-select__caret').click()
    cy.contains("career").should('be.visible')
    cy.contains('career').click()
    const filepath = 'images/banner.jpg'
    cy.get('input[type="file"]').attachFile(filepath)
    cy.get('.uploader__thumbnail')
    cy.wait(2000) //wait for file upload 
    cy.get('.event__form--section__timing > :nth-child(2) > span').click()
    cy.get(':nth-child(1) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner').type('July 02,2021')
    cy.get('.input').select("every day")
    cy.get(':nth-child(2) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner').type('01:00')
    cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner').clear().type('18:00')
    cy.get(':nth-child(4) > :nth-child(1) > .el-form-item > .el-form-item__content > .flex > .el-radio > .el-radio__input > .el-radio__inner').click()
    cy.get('.input-number > .el-input__inner').type("4")
    cy.get('.last--section > .event__form--section__content > .first--child > .el-form-item__content > .el-input > .el-input__inner').type("www.cnn.com")
    cy.get('[native-type="submit"]').click()
    cy.wait(2000)
    cy.get('.create--ticket__button').click()
    cy.get('.el-form-item__content > .el-input > .el-input__inner').type("Ticket one")
    cy.get('.el-textarea__inner').type('Description of the ticket')
    cy.get(':nth-child(6) > .el-form-item__content > .el-row > .el-col-14 > .el-input-number > .el-input > .el-input__inner').type("100")
    cy.get('[native-type="submit"]').click()
    cy.get('.el-switch__core').click()
   
    

})
  })