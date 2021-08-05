// <reference types="cypress" />
describe('My First Test suite', () => {
    it('Update personal information on settings', () => {
    cy.visit("https://tix-staging.netlify.app/")
    cy.get(':nth-child(5) > .u-button').click()
    cy.get('.login--form__email--input > .el-input__inner').type('00@yopmail.com')
    cy.get('.login--form__password--input > .el-input__inner').type('........')
    cy.get('.login--form__buttons > .u-button').click()
    cy.wait(2000)
    cy.get('.events--page__header--text').should('be.visible')
    cy.get('.nav-user-actions__name').click()
    cy.contains('account').click()
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const newname = `Random ${id}`
    cy.get(':nth-child(1) > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear().type(newname)
    cy.get(':nth-child(1) > .el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear().type('07036982284')
    cy.get(':nth-child(1) > .el-form > .u-button').click()
    cy.contains('Profile Updated').should('be.visible')


    cy.get(':nth-child(2) > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('........')
    cy.get(':nth-child(2) > .el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('........')
    cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type('........')
    cy.get('#pane-profile > :nth-child(2) > .el-form > .u-button').click()
    cy.contains('Password Updated').should('be.visible')

    

    //cy.get('#tab-settings > .tab__header').click()
    //cy.get(':nth-child(4) > .el-radio__input').check()
})
  })