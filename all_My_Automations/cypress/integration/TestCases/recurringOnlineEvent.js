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
      cy.wait(2000)
      Login.yourEventText().should('be.visible')
})

it('create Recurring Online event',function(){
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
    Event.selectRecurring().click()
    Event.recurringEventStartDay().type(this.data.startDay)
    Event.eventfrequency().select('every week')
    Event.recurringEventStartTime().clear().type(this.data.endTime)
    Event.recurringEventEndTime().clear().type(this.data.endTime)
    Event.selectNumberOfOcc().click()
    Event.numberOfOcurrances().type(this.data.numberOfOcurrances)
    Event.website().type(this.data.website)
    Event.saveEvent().click()

})


})