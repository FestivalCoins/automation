// <reference types="cypress" />
import login from '../PageObjects/login'
import ticket from '../PageObjects/ticket'
import discountCode from '../PageObjects/discountCode'
describe('Test', function () {
    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
            
              })
             
    })
    



it('Create single Live event',function(){
  cy.logon()
  //cy.createEvent()
 //console.log(cy.get('#RXZlbnQtNzAzNWY2OTctZTY2YS00OGM3LTllYmMtNTk4NDcwZTRkZDY3 > .event-preview__event > .event-preview__tag > p'))
 if (cy.get('#RXZlbnQtNzAzNWY2OTctZTY2YS00OGM3LTllYmMtNTk4NDcwZTRkZDY3 > .event-preview__event > .event-preview__tag > p').should('have.text', 'Published'))
 {cy.get('#RXZlbnQtNzAzNWY2OTctZTY2YS00OGM3LTllYmMtNTk4NDcwZTRkZDY3 > .event-preview__event > .event-preview__tag > p').click()}
})

})