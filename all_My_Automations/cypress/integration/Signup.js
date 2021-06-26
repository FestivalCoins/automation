// <reference types="cypress" />
describe('My First Test suite', () => {
    it('Onboarding!(attempt 1)', () => {
    cy.visit("https://tix-staging.netlify.app/")
    cy.get(':nth-child(5) > .u-button').click()
    cy.get('.login--form__buttons--sign-up').click()
    cy.get('.account-type__personal > .account-type__details').click()
    cy.get('[type="primary"]').click()
    const username = () => Cypress._.random(0, 1e3)
    const user = username()
    const fname = `Auto_Firstname${user}`
    const lname = `Auto_Lastname${user}`
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type(fname)
    cy.get('.el-form > :nth-child(1) > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type(lname)
    cy.get('.el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type(fname+ '@yopmail.com')
    cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type('........')
    cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type('........')
    cy.get('[native-type="submit"]').click()
    cy.contains('confirm your email').should('be.visible')
})
  })