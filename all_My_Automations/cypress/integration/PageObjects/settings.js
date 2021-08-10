


class settings{
userSetting(){
    return cy.get('.nav-user-actions__name').click()
}
selectAccount(){
    return cy.contains('account').click()
}
settingsFname(){
    return  cy.get(':nth-child(1) > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
}
settingsPnumber(){
    return cy.get(':nth-child(1) > .el-form > :nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
}

settingsLname(){
    return cy.get(':nth-child(1) > .el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
}

savePersonalInfo(){
    return  cy.get(':nth-child(1) > .el-form > .u-button').click()
}
oldPassword(){
    return  cy.get(':nth-child(2) > .el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
}
newPassword1(){
    return  cy.get(':nth-child(2) > .el-form > :nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
}
newPassword2(){
    return  cy.get(':nth-child(2) > .el-form > :nth-child(3) > .el-form-item__content > .el-input > .el-input__inner')
}
savePassword(){
    return cy.get('#pane-profile > :nth-child(2) > .el-form > .u-button')
}

}export default settings;