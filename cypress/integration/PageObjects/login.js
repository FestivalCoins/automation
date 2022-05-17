


class login{
loginEmail(){
return cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
}
loginPassword(){

    return cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
}

save(){

    return cy.get('.el-button')
}

yourEventText(){

    return cy.get('.events--page__header--text')
}
intercomIcon(){
    return cy.get('.intercom-lightweight-app-launcher-icon-open').should("be.visible")
}


}

export default login;