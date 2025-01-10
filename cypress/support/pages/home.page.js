/// <reference types="cypress" />

export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },

    openComprar(){
        return cy.get('#primary-menu > .menu-item-629 > a').click()
    }
    
}