// <reference types="cypress" />
describe('Test', function () {
    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
            
              })
             
    })
    
  
it('Login successfully', function(){
  cy.logon()
  cy.get('.event-preview__create > p').should('be.visible')

})
})