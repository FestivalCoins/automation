// <reference types="cypress" />
import login from '../PageObjects/login'
import ticket from '../PageObjects/ticket'
import discountCode from '../PageObjects/discountCode'
describe('Test', function () {
    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
            
              })
             
    })
    
    beforeEach ('Login', function() {
   cy.logon()
})



it('Create automatic discount codes_ Minimum purchase ',function(){
 const Ticket = new ticket()  
 cy.contains('tickets sold').click() 
 

 cy.get('#tab-manage').click({force: true})
 
 const dc = new discountCode()
 dc.discountTab().click()
 dc.createDiscount().then(($text)=>{
  const buttontxt = "create discount"
  if ($text.text()== buttontxt){
  dc.createDiscount().click()
}
else{
    dc.addDiscount().click()
  }
    
})
dc.automaticDiscountR().click()
dc.nextButton().click()
const DC = () => Cypress._.random(0, 1e3)
const code = DC()
const disCode = `Tix${code}`
dc.codeName().type(disCode)
dc.discountValue().type("40")
dc.minPurchaseR().click()
dc.minPurchase().type("500")
dc.dcStartDate().type(this.data.startDay)
 dc.dcstartTime().click()
 dc.saveButton().click()
 
})

})