/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page");
const loginPage = require("../support/pages/login.page");
const {firstName, lastName, phone, email, senha} = require("../fixtures/data.json");
const signPage = require("../support/pages/sign.page");
const { profilePage } = require("../support/pages/profile.page");

describe('Teste de cadastro', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  });
  it('deve fazer cadastro com sucesso', () => {
    homePage.openMenu('Account')
    loginPage.sing()
    signPage.sign(firstName, lastName, phone, email, senha, senha)
    homePage.openMenu('Account')
    profilePage.customerName().should('contain', lastName + ' ' + firstName)
  })
})