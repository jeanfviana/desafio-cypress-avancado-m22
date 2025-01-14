/// <reference types="cypress" />

const produtosPage = require("../support/pages/produto.page")
const produtos = require('../fixtures/produtos.json')




describe('Deve adicionar produto ao Carrinho', () => {

  before(() => {
    
    cy.visit("/produtos/page/2")

    //Interceptando a resposta 200 original para 201
    cy.intercept('POST', produtos[0].url, {
      statusCode: 201,
    }).as('addProductToCart')
  })

  it('Deve adicionar Produto ao Carrinho interceptando a resposta da requisição com sucesso', () => {
        produtosPage.incluirProduto(produtos[0].produto, produtos[0].tamanho, produtos[0].cor, produtos[0].quantidade)
    cy.wait('@addProductToCart').its('response.statusCode').should('eq', 201)
  })
})