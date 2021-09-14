class discountCode{

discountTab(){
  return cy.get('#tab-discounts > .orders-content__header')

}
createDiscount(){

  return cy.get('.no-discount > .el-button')
}
manualDiscountR(){
  return cy.get(':nth-child(2) > .discount-type__personal > .discount-type__step')
}
automaticDiscountR(){
  return cy.get(':nth-child(3) > .discount-type__personal > .discount-type__step')
}
nextButton(){
  return cy.get('.discount-type__buttons > :nth-child(2)')
}
codeName(){
  return cy.get('.el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
}
FixedValueR(){
  return cy.get('.discount__label.is-required > .el-form-item__content > :nth-child(2) > .el-radio__input > .el-radio__inner')
}

discountValue(){
  return cy.get(':nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
}
discountFixedValue(){
  return cy.get('.discount__value > .el-form-item__content > .el-input > .el-input__inner')
}
oneUseR(){
  return cy.get(':nth-child(5) > .el-form-item > .el-form-item__content > :nth-child(2) > .el-radio__input > .el-radio__inner')
}
limitedUseR(){

  return cy.get(':nth-child(3) > .el-radio__input > .el-radio__inner')
}
enterLimitedAmount(){
  return cy.get(':nth-child(5) > .el-form-item > .el-form-item__content > .el-input > .el-input__inner')
}
minPurchaseR(){
  return cy.get(':nth-child(5) > .discount__label > .el-form-item__content > :nth-child(2) > .el-radio__input > .el-radio__inner')
}

minQuantity(){
return cy.get('.discount__fee > .el-input__inner')

}

minPurchase(){
  return cy.get(':nth-child(5) > .discount__value > .el-form-item__content > .el-input > .el-input__inner')

  
  }
dcStartDate(){

  return cy.get('.first--child > .el-form-item__content > .wrap > .el-row > .el-col-14 > .el-date-editor > .el-input__inner')
}
dcEndDate(){

 return cy.get(':nth-child(7) > .el-form-item__content > .wrap > .el-row > .el-col-14 > .el-date-editor > .el-input__inner')  
}

dcstartTime(){
  return cy.get('.first--child > .el-form-item__content > .wrap > .el-row > .el-col-10 > .el-date-editor > .el-input__inner')

}
dcendTime(){
  return cy.get(':nth-child(7) > .el-form-item__content > .wrap > .el-row > .el-col-10 > .el-date-editor > .el-input__inner')
}
saveButton(){
return cy.get('.buttons > .el-button--primary')

}
tixProbanner(){
  return cy.get('.el-tooltip')
}
discountVisibility(){
return cy.get('.discount--list > .list-card__actions > .list-card__status > a > .el-icon-view')

}
addDiscount(){
  return cy.get('.create--discount__button > span')
}
//cy.get('.tix-pro__description > .u-button')
}export default discountCode;