/// <reference types="cypress" />


const { pedidoPage } = require("../support/pages/pedido.page");


describe('Teste de checkout carrinho', () => {

  
  it('deve fazer checkout com sucesso', () => {
    cy.login('aluno_ebac@teste.com','teste@teste.com')
    cy.checkout()
    pedidoPage.customerName().should('contain', 'Obrigado. Seu pedido foi recebido')
  })
})