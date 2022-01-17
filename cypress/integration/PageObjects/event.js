

class event {
createnewEvent(){
return cy.get('.event-preview__plus')
}
onlineEvent(){
  return cy.get('.event-type > :nth-child(2)')
}
liveEvent(){
return cy.get('.event-type > :nth-child(1)')

}

saveEventType(){
  return cy.get('.el-button')
}
eventName(){
  return cy.get('[label-position="top"] > .el-form-item__content > .el-input > .el-input__inner')}
eventdescription(){
  return  cy.get('.trix-content')
}
category(){

  //return cy.get('.el-select__caret')
  return cy.get('.event__form--section__interests > :nth-child(3)')
}
uploadImage(){
return cy.get('.uploader__placeholder')

}
eventStartDay(){

return cy.get(':nth-child(1) > .el-form-item__content > .wrap > .el-row > :nth-child(1) > .el-date-editor > .el-input__inner')
}
recurringEventStartDay(){

   return cy.get(':nth-child(1) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner')
 }
eventEndDay(){
  return cy.get(':nth-child(2) > .el-form-item__content > .wrap > .el-row > :nth-child(1) > .el-date-editor > .el-input__inner')
}
eventEndTime(){
  return cy.get(':nth-child(2) > .el-form-item__content > .wrap > .el-row > :nth-child(2) > .el-date-editor > .el-input__inner')
}
recurringEventEndTime(){
  return cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner')

}

eventStartTime(){
  return cy.get(':nth-child(1) > .el-form-item__content > .wrap > .el-row > :nth-child(2) > .el-date-editor > .el-input__inner')}
recurringEventStartTime(){
  return cy.get(':nth-child(2) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner')
}

website(){
  return  cy.get('.last--section > .event__form--section__content > .is-success > .el-form-item__content > .el-input > .el-input__inner')
}
saveEvent(){
  return cy.get('[native-type="submit"]')
}
address(){
return cy.get('.el-col-20 > .el-input > .el-input__inner')

}
selectRecurring(){

  return cy.get('.event__form--section__timing > :nth-child(2) > span')
}
eventfrequency(){
  return cy.get('.input')
}

selectNumberOfOcc(){
return cy.get(':nth-child(4) > :nth-child(1) > .el-form-item > .el-form-item__content > .flex > .el-radio > .el-radio__input > .el-radio__inner')

}

numberOfOcurrances(){

  return cy.get('.input-number > .el-input__inner')
}
themePageTitle(){
  return cy.get('.last--section > .event__form--section__content > .is-success > .el-form-item__content > .el-input > .el-input__inner')
}

}
export default event;