class buyTicket{
register(){
return cy.get('.u-button')

}
numberOfTickets(){
    return cy.get(':nth-child(1) > .ticket > .ticket__header > .ticket__select > .el-form-item > .el-form-item__content > div > .ticket__select--input')
}
buyerEmail(){
   return cy.get(':nth-child(1) > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
}
buyerFname(){
    return cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
}
buyerLname(){
  return cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')

}
buyerPnumber(){
    return cy.get(':nth-child(4) > .el-form-item__content > .el-input > .el-input__inner')
}
createorder(){
  return  cy.contains("order")  
}

}export default buyTicket