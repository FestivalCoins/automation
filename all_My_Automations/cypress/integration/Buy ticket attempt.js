/// <reference types="cypress" />
describe('My First Test suite', () => {
    it('login!(testcase1)', () => {
    cy.visit("https://tix-staging.netlify.app/Ticket")
    cy.get('.u-button').click()
    cy.get(':nth-child(1) > .ticket > .ticket__header > .ticket__select > .el-form-item > .el-form-item__content > div > .ticket__select--input').select("4")
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type("00@yopmail.com")
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type("Automated firstname")
    cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type("automatedLastName")
    cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type("0000")
    cy.contains("order tickets").should("be.visible")
    cy.contains("order tickets").click()




})
  })