/// <reference types="cypress" />

const carrinhoPage = require("../support/pages/carrinho.page")


describe('Deve remover um Produto do Carrinho', () => {

  before(() => {
    cy.addItemToCart()

    cy.intercept('GET', 'carrinho/?remove_item=*', {
        statusCode: 204,
      }).as('removeItemFromCart')

  })

  

  

  it('Deve remover um Produto do Carrinho interceptando a resposta da requisição com sucesso', () => {
    
    carrinhoPage.removerProduto()
    cy.wait('@removeItemFromCart').its('response.statusCode').should('eq', 204)

  })
})