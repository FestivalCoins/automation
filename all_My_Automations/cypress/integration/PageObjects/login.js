


class login{
loginEmail(){
return cy.get('.login--form__email--input > .el-input__inner')
}
loginPassword(){

    return cy.get('.login--form__password--input > .el-input__inner')
}

save(){

    return cy.get('.login--form__buttons > .u-button')
}

yourEventText(){

    return cy.get('.events--page__header--text')
}
intercomIcon(){
    return cy.contains('#pane-profile > :nth-child(2) > .el-form > .u-button').should("be.visible")
}

}export default login;