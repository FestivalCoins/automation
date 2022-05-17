
import login from '../integration/PageObjects/login'
import event from '../integration/PageObjects/event'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//........

 Cypress.Commands.add('logon', (email, password) => { 
   const Login = new login()
  cy.visit("https://tix-staging.netlify.app/login")
  Login.loginEmail().type('nneka@tix.africa')
  Login.loginPassword().type('........')
  Login.save().click();
})
Cypress.Commands.add('rando',() => { 

  const DC = Cypress._.random(0, 1e3)
  const code = DC
  const disCode = `Tix${code}`

})
Cypress.Commands.add('createEvent',() => { 
  const Event = new event()
   Event.createnewEvent().click()
   Event.liveEvent().click()
   Event.saveEventType().click()
   Event.eventName().type("sample22")
   Event.eventdescription().type("another randmo")
 Event.address().type("random location around")
 Event.category().click()
 Event.eventStartDay().type("December 13, 2022")
 Event.eventStartTime().type("00:00")
 Event.eventEndDay().type("December 13, 2022")
 Event.eventEndTime().clear().type("12:00")
 Event.saveEvent().click()
 cy.contains("Event Page Theme").should('be.visible')
  })

/* Cypress.Commands.add('generaterandom', (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}) */




//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
