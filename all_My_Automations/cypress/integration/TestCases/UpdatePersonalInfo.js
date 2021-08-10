// <reference types="cypress" />
import login from '../PageObjects/login'
import settings from '../PageObjects/settings'
describe('Test', function () {
    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
            
              })
             
    })
    
    before('Login', function() {
      const Login = new login()
      cy.visit("https://tix-staging.netlify.app/login/")
      Login.loginEmail().type(this.data.email)
      Login.loginPassword().type(this.data.password)
      Login.save().click();
      Login.yourEventText().should('be.visible')
})

it('Update personal settings',function(){
 const Settings = new settings()
Settings.userSetting().click()
Settings.selectAccount()
Settings.settingsFname().clear().type(this.data.buyerFname)
Settings.settingsPnumber().clear().type(this.data.buyerPnumber)
Settings.savePersonalInfo()
cy.contains('Profile Updated').should('be.visible')
})

it.only('Update password',function(){
  const Settings = new settings()
  Settings.userSetting().click()
  Settings.selectAccount()
  Settings.oldPassword().type(this.data.password)
  Settings.newPassword1().type(this.data.password)
  Settings.newPassword2().type(this.data.password)
  Settings.savePassword().click()
  cy.contains('Password Updated').should('be.visible')

})


})