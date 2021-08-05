/// <reference types="cypress" />
describe('My First Test suite', () => {
    it('login!(testcase1)', () => {
    cy.visit("https://tix-staging.netlify.app/")
    cy.get(':nth-child(5) > .u-button').click()
    
    cy.get('.login--form__email--input > .el-input__inner').type('nneka@tix.africa')
    cy.get('.login--form__password--input > .el-input__inner').type('........')
    cy.get('.login--form__buttons > .u-button').click()
    cy.get('.events--page__header--text').should('be.visible')
    cy.contains('tickets sold').click()
    cy.get('#tab-tickets > .tab__header').click()
    cy.get('.create--ticket__button').click()
    cy.get('.el-form-item__content > .el-input > .el-input__inner').type("Ticket one1a2")
    cy.get('.el-textarea__inner').type('Description of the ticket')
    cy.get(':nth-child(6) > .el-form-item__content > .el-row > .el-col-14 > .el-input-number > .el-input > .el-input__inner').type("100")
    cy.get('[native-type="submit"]').click()
    cy.get('.el-switch__core').click()
    //cy.get('#tab-tickets > .tab__header').click()
    cy.wait(3000)
    cy.get('.el-icon-back').then(function($a){
    cy.log("I got here too")
     const href =$a.prop('href')
     cy.log("I got here three ")
     cy.log(href)
cy.visit(href)
})

    
})
  })