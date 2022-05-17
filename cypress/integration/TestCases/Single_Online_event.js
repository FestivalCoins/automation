// <reference types="cypress" />
import login from '../PageObjects/login'
import ticket from '../PageObjects/ticket'
import discountCode from '../PageObjects/discountCode'
import event from '../PageObjects/event'
import theme from '../PageObjects/theme'


describe('Test', function () {
    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
            
              })
             
    })
    
    beforeEach ('Login', function() {
   cy.logon()
})



it('Create Single Live event',function(){
 const Event = new event()
 const Theme = new theme()
 const Ticket = new ticket()
  Event.createnewEvent().click()
  Event.onlineEvent().click()
  Event.saveEventType().click()
  Event.eventName().type("sample22")
  Event.eventdescription().type("another randmo")
Event.category().click()
Event.eventStartDay().type("December 13, 2022")
Event.eventStartTime().type("00:00")
Event.eventEndDay().type("December 13, 2022")
Event.eventEndTime().clear().type("12:00")
Event.saveEvent().click()
cy.contains("Event Page Theme").should('be.visible')
//create theme
Theme.mistThemeSelect().click()
const filepath = 'images/banner.jpg'
cy.get('input[type="file"]').attachFile(filepath)
  Event.uploadImage().click()
cy.wait(3000)
Theme.themeSubmit().click()
cy.get('p').should('be.visible')
//create Ticket
Ticket.noTicket().click()
Ticket.ticketName().type("free")
Ticket.ticketDesc().type("it doesnt need to say anything")
Ticket.ticketquantity().type("20")
Ticket.saveTicket().click()
cy.wait(3000)
Ticket.addTicket().click()
Ticket.selectPaidType().click()
Ticket.ticketName().type("paaid")
Ticket.ticketDesc().type("it doesnt need to say anything")
Ticket.ticketquantity().type("20")
Ticket.ticketName().type("2000")
Ticket.saveTicket().click()
Ticket.saveNContinue().click()
//Ticket.ticketHamburgerOption().click().contains("edit").click()
Ticket.publishEvent().click()
cy.get('.buttons > .u-button').should('be.visible')
Ticket.CTAtoAddLink().click()

})

})