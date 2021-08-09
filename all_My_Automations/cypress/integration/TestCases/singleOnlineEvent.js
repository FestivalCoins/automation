// <reference types="cypress" />
import event from '../PageObjects/event'
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

it('create single online event',function(){
    const Event = new event()

    Event.createnewEvent().click()
    Event.onlineEvent().click()
    Event.saveEventType().should('be.enabled')
    Event.saveEventType().click()
    Event.eventName().type(this.data.eventName)
    Event.eventdescription().type(this.data.eventDesc)
    Event.category().click()
    cy.contains(this.data.category).click()
    const filepath = 'images/banner.jpg'
    cy.get('input[type="file"]').attachFile(filepath)
    Event.uploadImage().click()
    cy.wait(3000)
    Event.eventStartDay().type(this.data.startDay)
    Event.eventStartTime().type(this.data.endTime)
    Event.eventEndDay().clear().type(this.data.endDay)
    Event.eventEndTime().clear().type(this.data.endTime)
    Event.website().type(this.data.website)
    Event.saveEvent().click()

    const Ticket = new ticket()
    Ticket.selectLinkType()
    Ticket.addLink()
    Ticket.saveLink().should('be.visible')
    Ticket.saveLink().click()

})

})