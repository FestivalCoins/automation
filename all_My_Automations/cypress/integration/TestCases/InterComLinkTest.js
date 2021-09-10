// <reference types="cypress" />
import login from '../PageObjects/login'
import settings from '../PageObjects/settings'
import ticket from '../PageObjects/ticket'
import event from '../PageObjects/event'
describe('Check for intercom link on everypage ', function () {
  const Login = new login()  
  before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
            
              })
             
    })
    
    before('Login', function() {
      
      cy.visit("https://tix-staging.netlify.app/login/")
      Login.loginEmail().type(this.data.email)
      Login.loginPassword().type(this.data.password)
      Login.save().click();
      cy.wait(4000)
      Login.yourEventText().should('be.visible')
      Login.intercomIcon()
    
})


it('Check Settings',function(){
  
  const Settings = new settings()
  Settings.userSetting().click()
  Settings.selectAccount()
  Login.intercomIcon()
  cy.get('.nav-logo').click()
})

it('Check Ticket page ',function(){
  
  const Ticket = new ticket()  
  cy.contains('tickets sold').click() 
  Ticket.ticketTab().click()
  Ticket.newTicket().click()
  Login.intercomIcon()
  cy.get('.nav-logo').click()
})


it('Check Event page ',function(){
  cy.get('.nav-logo').click()
  const Event = new event()
  Event.createnewEvent().click()
    Event.liveEvent().click()
    Login.intercomIcon()
})

})