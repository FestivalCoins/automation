/// <reference types="cypress" />
describe('Test suite', function() {
  before(function(){

    cy.fixture('example').then(function(data){
    this.data=data
      })
    })

    beforeEach(function(){
      cy.visit("https://tix-staging.netlify.app/")
      cy.get(':nth-child(5) > .u-button').click()
      cy.get('.login--form__email--input > .el-input__inner').type(this.data.email)
      cy.get('.login--form__password--input > .el-input__inner').type(this.data.password)
      cy.get('.login--form__buttons > .u-button').click()
      cy.get('.events--page__header--text').should('be.visible')
})
   it('buyticket', function() {
    cy.contains('tickets sold').click()
    cy.get('#tab-tickets > .tab__header').click()
    cy.get('.create--ticket__button').click()
    cy.get('.el-form-item__content > .el-input > .el-input__inner').type("Ticket number one")
    cy.get('.el-textarea__inner').type('Description of the ticket')
    cy.get(':nth-child(6) > .el-form-item__content > .el-row > .el-col-14 > .el-input-number > .el-input > .el-input__inner').type("100")
    cy.get('[native-type="submit"]').click()
    cy.get('.el-switch__core').click()
    //cy.get('.el-icon-back').click
    cy.wait(3000)
    cy.get('.el-switch__core').should('be.enabled')

    
})

  })