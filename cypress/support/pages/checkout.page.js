/// <reference types="cypress" />




class checkoutPage {
    get pagina() { return cy.visit('checkout')}
    get termo() { return cy.get('#terms')}
    get btnFinalizar() { return cy.get('#place_order')}

    checkout(){
        this.pagina
        this.termo.click()
        this.btnFinalizar.click()
    }

}    

module.exports = new checkoutPage();