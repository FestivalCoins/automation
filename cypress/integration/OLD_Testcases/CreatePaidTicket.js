// <reference types="cypress" />
import login from '../PageObjects/login'
import ticket from '../PageObjects/ticket'
describe('Test', function () {
    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
            
              })
             
    })
    
    beforeEach('Login', function() {
      const Login = new login()
      cy.visit("https://tix-staging.netlify.app/login/")
      Login.loginEmail().type(this.data.email)
      Login.loginPassword().type(this.data.password)
      Login.save().click();
      Login.yourEventText().should('be.visible')
})

it('Paid ticket with transfer fees',function(){
 const Ticket = new ticket()  
 cy.contains('tickets sold').click() 
 Ticket.ticketTab().click()
 Ticket.newTicket().click()
 Ticket.selectPaidType().click()
 Ticket.ticketName().type(this.data.ticketName)
 Ticket.ticketDesc().type(this.data.ticketDesc)
 Ticket.ticketPrice().type(this.data.ticketPrice)
 Ticket.ticketquantity().type(this.data.ticketQuan)
 Ticket.transferFees().click()
 Ticket.saveTicket().click()



})

})