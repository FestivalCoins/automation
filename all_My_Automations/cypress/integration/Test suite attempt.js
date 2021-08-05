describe('My First Test suite', () => {
   
 beforeEach('Login',()=>{
    cy.visit("https://tix-staging.netlify.app/login/")
    cy.get('.login--form__email--input > .el-input__inner').type('00@yopmail.com')
    cy.get('.login--form__password--input > .el-input__inner').type('........')
    cy.get('.login--form__buttons > .u-button').click()
    cy.wait(2000) // wait for landing page
    cy.get('.events--page__header--text').should('be.visible')
})


    it('create single live event!', () => {
        cy.get('span').click()
        cy.get('.event-type__business > .event-type__step').click()
        cy.get('.event-type__buttons > :nth-child(2)').click()
        const eventname = () => Cypress._.random(0, 1e2)
        const event = eventname()
        const name = `Auto_Live_event${event}`
        const customname = `aut${event}`
        cy.get(':nth-child(1) > .event__form--section__content > .first--child > .el-form-item__content > .el-input > .el-input__inner').type(name)
        cy.get('.trix-content').type('just a description')
        cy.get('.el-col-16 > .el-input > .el-input__inner').type("Hidden location to be revealed a day before the event")
        cy.get(':nth-child(1) > .event__form--section__content > :nth-child(4) > .el-form-item__content > .el-input > .el-input__inner').type(customname)
        cy.get('.el-select__caret').click()
        cy.contains("career").should('be.visible')
        cy.contains('career').click()
        const filepath = 'images/banner.jpg'
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('.uploader__thumbnail')
        cy.wait(2000) //wait for file upload 
        cy.get('.first--child > .el-form-item__content > .wrap > .el-row > .el-col-14 > .el-date-editor > .el-input__inner').type('May 24,2022')
        cy.get('.first--child > .el-form-item__content > .wrap > .el-row > .el-col-10 > .el-date-editor > .el-input__inner').type('00:00')
        cy.wait(1000)
        cy.get(':nth-child(2) > .el-form-item__content > .wrap > .el-row > .el-col-14 > .el-date-editor > .el-input__inner').clear().type('May 29,2022')
        cy.get(':nth-child(2) > .el-form-item__content > .wrap > .el-row > .el-col-10 > .el-date-editor > .el-input__inner').clear().type('18:00')
        cy.get('.last--section > .event__form--section__content > .first--child > .el-form-item__content > .el-input > .el-input__inner').type("www.cnn.com")
        cy.get('[native-type="submit"]').click()
        cy.wait(2000)
        cy.get('.create--ticket__button').click()
        cy.get('.el-form-item__content > .el-input > .el-input__inner').type("Ticket one")
        cy.get('.el-textarea__inner').type('Description of the ticket')
        cy.get(':nth-child(6) > .el-form-item__content > .el-row > .el-col-14 > .el-input-number > .el-input > .el-input__inner').type("100")
        cy.get('[native-type="submit"]').click()
        cy.get('.el-switch__core').click() 
})
//it('Create Single Online event ', () => {
   //const meh = require("signup.js")
  //  })


it('Update personal info', () => {
    cy.get('.nav-user-actions__name').click()
    cy.contains('account').click()
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const newname = `Random ${id}`
    cy.get(':nth-child(1) > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').clear().type(newname)
    cy.get(':nth-child(1) > .el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').clear().type('07036982284')
    cy.get(':nth-child(1) > .el-form > .u-button').click()
    cy.contains('Profile Updated').should('be.visible')
})

it.only ('Update password', () => {
    cy.get('.nav-user-actions__name').click()
    cy.contains('account').click()
    cy.get(':nth-child(2) > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('........')
    cy.get(':nth-child(2) > .el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('........')
    cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner').type('........')
    cy.get('#pane-profile > :nth-child(2) > .el-form > .u-button').click()
    cy.contains('Password Updated').should('be.visible')
})



  })