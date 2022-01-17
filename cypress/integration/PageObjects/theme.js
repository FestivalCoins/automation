class theme{
    defaultThemeSelect(){
        return cy.get(':nth-child(1) > .event-theme > .event-theme__info > .event-theme__buttons > :nth-child(1)')
    }
    defaultThemePreview(){
        returncy.get(':nth-child(1) > .event-theme > .event-theme__info > .event-theme__buttons > .u-button--cancel')
    }
    splitThemeSelect(){
        return cy.get(':nth-child(2) > .event-theme > .event-theme__info > .event-theme__buttons > :nth-child(1)')
     }
    splitThemePreview(){
        return cy.get(':nth-child(2) > .event-theme > .event-theme__info > .event-theme__buttons > .u-button--cancel')
    }
    azureThemeSelect(){
        return cy.get(':nth-child(3) > .event-theme > .event-theme__info > .event-theme__buttons > :nth-child(1)')
     
     }
    azureThemePreview(){
        return cy.get(':nth-child(3) > .event-theme > .event-theme__info > .event-theme__buttons > .u-button--cancel')
    
    }
    mistThemeSelect(){
        return cy.get(':nth-child(4) > .event-theme > .event-theme__info > .event-theme__buttons > :nth-child(1)')
     
     }
    mistThemePreview(){
        return cy.get(':nth-child(4) > .event-theme > .event-theme__info > .event-theme__buttons > .u-button--cancel')
    
    }
themeSubmit(){
    return cy.get('[native-type="submit"]')
}

}export default theme;