// <reference types="cypress" />
import event from '../PageObjects/event'
//import login from '../PageObjects/login'
import ticket from '../PageObjects/ticket'
describe('Test', function () {
    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
            
              })
             
    })
    
    beforeEach(() =>{
        cy.login('email','password');
     
})

it('create single live event',function(){
    cy.visit('https://deploy-preview-461--tix-staging.netlify.app/events')
    cy.wait(6000)
    const Event = new event()
   // cy.get('.nav-logo').click()
    Event.createnewEvent().click()
    Event.liveEvent().click()
    Event.saveEventType().should('be.enabled')
    Event.saveEventType().click()
    Event.eventName().type(this.data.eventName)
    Event.eventdescription().type(this.data.eventDesc)
    Event.address().type(this.data.address)
    Event.category().click()
   // cy.contains(this.data.category).click()
   // const filepath = 'images/banner.jpg'
    //cy.get('input[type="file"]').attachFile(filepath)
    //Event.uploadImage().click()
    //cy.wait(3000)
    Event.eventStartDay().type(this.data.startDay)
    Event.eventStartTime().type(this.data.endTime)
    Event.eventEndDay().clear().type(this.data.endDay)
    Event.eventEndTime().clear().type(this.data.endTime)
   // Event.website().type(this.data.website)
    Event.saveEvent().click()
    //Event.themePageTitle().should('be.visble')


})
it('create again',function(){
    const Event = new event()
    cy.get('.nav-logo').click()
    Event.createnewEvent().click()
    Event.liveEvent().click()
    Event.saveEventType().should('be.enabled')
    Event.saveEventType().click()
    Event.eventName().type("Sample event name")
    Event.eventdescription().type(this.data.eventDesc)
    Event.address().type(this.data.address)
    Event.category().click()
   Event.eventStartDay().type(this.data.startDay)
    Event.eventStartTime().type(this.data.endTime)
    Event.eventEndDay().clear().type(this.data.endDay)
    Event.eventEndTime().clear().type(this.data.endTime)
   Event.saveEvent().click()
    Event.themePageTitle().should('be.visble')


})

})