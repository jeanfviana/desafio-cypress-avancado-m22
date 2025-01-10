// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const checkoutPage = require("./pages/checkout.page");
const { homePage } = require("./pages/home.page");
const { pedidoPage } = require("./pages/pedido.page");
const produtoPage = require("./pages/produto.page")


Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('minha-conta')
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('checkout', () => {
    cy.visit('/')
    homePage.openComprar()
    produtoPage.addProduto('Abominable Hoodie')
    checkoutPage.checkout()
    
    

})