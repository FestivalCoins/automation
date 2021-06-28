// <reference types="cypress" />
describe('My First Test suite', () => {
    it('login in and create event!(testcase2)', () => {
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
    const name = `Automated_event${event}`
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
    cy.get('.first--child > .el-form-item__content > .wrap > .el-row > .el-col-14 > .el-date-editor > .el-input__inner').type('May 24,2022')
    cy.get('.first--child > .el-form-item__content > .wrap > .el-row > .el-col-10 > .el-date-editor > .el-input__inner').type('00:00')
    cy.wait(1000)
    cy.get(':nth-child(2) > .el-form-item__content > .wrap > .el-row > .el-col-14 > .el-date-editor > .el-input__inner').clear().type('May 29,2022')
    cy.get(':nth-child(2) > .el-form-item__content > .wrap > .el-row > .el-col-10 > .el-date-editor > .el-input__inner').clear().type('18:00')
    cy.get('.last--section > .event__form--section__content > .first--child > .el-form-item__content > .el-input > .el-input__inner').type("www.cnn.com")
    cy.get('[native-type="submit"]').click()
    cy.wait(2000)
    cy.contains('online events').should('be.visible')

    cy.get('.online--form__input').click()
    cy.contains("manually").click()
    cy.get('.el-textarea__inner').type("Zoomlinkplaceholdertexts")
    cy.get('.el-button').click()
    

})
  })