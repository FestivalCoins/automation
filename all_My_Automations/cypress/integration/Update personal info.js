// <reference types="cypress" />
describe('My First Test suite',function ()  {
    it('Update personal information on settings', () => {
    cy.visit("https://tix-staging.netlify.app/")
    cy.get(':nth-child(5) > .u-button').click()
    cy.get('.login--form__email--input > .el-input__inner').type('nnekatix@outlook.com')
    cy.get('.login--form__password--input > .el-input__inner').type('........')
    cy.get('.login--form__buttons > .u-button').click()
    cy.wait(5000)
    cy.get('.events--page__header--text').should('be.visible')
    cy.get('.nav-user-actions__name').click()
    cy.contains('account').click()
   // var random = cy.generaterandom(5)
   // console.log(cy.generaterandom(5))
    //cy.get(':nth-child(1) > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear().type(cy.generaterandom(5))
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