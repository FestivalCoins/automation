

class event {
createnewEvent(){
return cy.get('span')
}
onlineEvent(){
  return cy.get('.event-type__personal > .event-type__step')  
}
liveEvent(){
return cy.get('.event-type__business > .event-type__step')

}

saveEventType(){
  return cy.get('.event-type__buttons > :nth-child(2)')
}
eventName(){
  return  cy.get(':nth-child(1) > .event__form--section__content > .first--child > .el-form-item__content > .el-input > .el-input__inner')
}
eventdescription(){
  return  cy.get('.trix-content')
}
category(){

  return cy.get('.el-select__caret')
}
uploadImage(){
return cy.get('.uploader__thumbnail')

}
eventStartDay(){

return cy.get('.first--child > .el-form-item__content > .wrap > .el-row > .el-col-14 > .el-date-editor > .el-input__inner')

}
recurringEventStartDay(){

   return cy.get(':nth-child(1) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner')
  }
eventEndDay(){
  return cy.get(':nth-child(2) > .el-form-item__content > .wrap > .el-row > .el-col-14 > .el-date-editor > .el-input__inner')

}
eventEndTime(){
  return cy.get(':nth-child(2) > .el-form-item__content > .wrap > .el-row > .el-col-10 > .el-date-editor > .el-input__inner')

}
recurringEventEndTime(){
  return cy.get(':nth-child(2) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner')

}

eventStartTime(){
  return cy.get('.first--child > .el-form-item__content > .wrap > .el-row > .el-col-10 > .el-date-editor > .el-input__inner')
}
recurringEventStartTime(){
  return cy.get(':nth-child(2) > :nth-child(1) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner')
}

website(){
  return  cy.get('.last--section > .event__form--section__content > .first--child > .el-form-item__content > .el-input > .el-input__inner')
}
saveEvent(){
  return cy.get('[native-type="submit"]')
}
address(){
return cy.get('.el-col-16 > .el-input > .el-input__inner')

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


}
export default event;