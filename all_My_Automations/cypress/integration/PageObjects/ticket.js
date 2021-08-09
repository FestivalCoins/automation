class ticket{
newTicket(){
return  cy.get('.create--ticket__button')
}
ticketName(){
    return cy.get('.el-form-item__content > .el-input > .el-input__inner')
}
ticketDesc(){

    return  cy.get('.el-textarea__inner')
}
ticketquantity(){
    return cy.get(':nth-child(6) > .el-form-item__content > .el-row > .el-col-14 > .el-input-number > .el-input > .el-input__inner')
}
ticketPrice(){
 return cy.get('.el-tooltip > .el-input > .el-input__inner')   
}
saveTicket(){
    return cy.get('[native-type="submit"]')
}
ticketTab(){
    return cy.get('#tab-tickets > .tab__header')
}
selectPaidType(){

    return cy.get('[value="paid"]')
}
selectInviteonly(){

 return cy.get('[value="invite only"]')   
}
transferFees(){
    return cy.get('.el-checkbox__label')
}
selectLinkType(){

    return cy.get('.online--form__input').select("manually add an event link")
}
addLink(){
   return cy.get('.el-textarea__inner').type("Zoomlinkplaceholdertexts")  
}
saveLink(){
    return cy.get('.el-button > :nth-child(1) > span')
}

}export default ticket