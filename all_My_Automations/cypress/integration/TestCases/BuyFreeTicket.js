// <reference types="cypress" />
import buyTicket from '../PageObjects/buyTicket'
describe('Test', function () {
    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
            
              })
             
    })
    
    beforeEach('Open link', function() {
      
      cy.visit("https://tix-staging.netlify.app/Ticket")
    
})

it('Buy free ticket',function(){
 const BuyTicket = new buyTicket()  
 BuyTicket.register().click()
 BuyTicket.numberOfTickets().select("1")
 BuyTicket.buyerEmail().type(this.data.buyerEmail)
 BuyTicket.buyerFname().type(this.data.buyerFname)
 BuyTicket.buyerLname().type(this.data.buyerLname)
 BuyTicket.buyerPnumber().type(this.data.buyerPnumber)
 BuyTicket.createorder().should("be.visible")
 BuyTicket.createorder().click()
cy.contains("checkout").should("be.visible")
 



})

})