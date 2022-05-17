class ticket{
noTicket(){
return cy.get('.no-tickets > .u-button')
}
ticketName(){
    return cy.get('.el-form-item__content > .el-input > .el-input__inner')
}
ticketDesc(){

    return  cy.get('.el-textarea__inner')
}
ticketquantity(){
    return cy.get(':nth-child(2) > .el-input-number > .el-input > .el-input__inner')
    //cy.get(':nth-child(6) > .el-form-item__content > .el-row > .el-col-14 > .el-input-number > .el-input > .el-input__inner')
}
ticketPrice(){
 return cy.get('.el-tooltip > .el-input > .el-input__inner')   
}
saveTicket(){
   
 return cy.get('[native-type="submit"]')
}
addTicket(){
return cy.get('.event-tickets__header > .u-button')

}
ticketHamburgerOption(){
  return cy.get('tbody > tr > :nth-child(5)')
}
saveNContinue(){

    return cy.get('.buttons > .u-button')
}
ticketTab(){
    return cy.get('#tab-tickets > .tab__header')
}
selectPaidType(){

    return cy.get('[value="Paid"]')
}
selectInviteonly(){

 return cy.get('[value="Invite only"]')   
}
transferFees(){
    return cy.get('.el-checkbox__label')
}
CTAtoAddLink(){
    return cy.get('p > a')
}
selectLinkType(){

    return cy.get('.online--form__input').select("manually add an event link")
}
addLink(){
   return cy.get('.el-textarea__inner').type("Zoomlinkplaceholdertexts")  
}
saveLink(){
    return cy.get('.online--form__btn > .el-button')
}
saveEvent(){

    return cy.get('.el-button')
}
publishEvent(){
    return cy.get('.buttons > :nth-child(2)')
}

}export default ticket