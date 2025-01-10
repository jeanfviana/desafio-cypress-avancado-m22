/// <reference types="cypress" />

class produtoPage {
    get produto() { return cy.get('div[class*="product-block grid"]')}
    get tamanho() { return cy.get('.button-variable-item-XL')}
    get cor() { return cy.get('.button-variable-item-Red')}
    get btnComprar() { return cy.get('.single_add_to_cart_button')}

    addProduto(produto){
        this.produto.contains(produto).click()
        this.tamanho.click()
        this.cor.click()
        this.btnComprar.click()


    }
    
}

module.exports = new produtoPage();