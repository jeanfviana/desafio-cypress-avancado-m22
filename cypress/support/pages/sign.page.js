/// <reference types="cypress" />

class signPage {
    get #firstName() { return cy.get('[data-testid="firstName"]')}
    get #lastName() { return cy.get('[data-testid="lastName"]')}
    get #phone() { return cy.get('[data-testid="phone"]')}
    get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')}
    get #senha() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')}
    get #reSenha() { return cy.get('[data-testid="repassword"]')}
    get #bntCriar() { return cy.get('[data-testid="create"]')}

    sign(firstNome, lastNome, phone, email, senha, reSenha){
        this.#firstName.type(firstNome)
        this.#lastName.type(lastNome)
        this.#phone.type(phone)
        this.#email.type(email)
        this.#senha.type(senha)
        this.#reSenha.type(reSenha)
        this.#bntCriar.click()
    }
}

module.exports = new signPage();