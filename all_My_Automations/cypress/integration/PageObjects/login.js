


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
    return cy.get('.intercom-lightweight-app-launcher-icon-open').should("be.visible")
}

}export default login;