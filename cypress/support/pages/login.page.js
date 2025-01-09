/// <reference types="cypress" />

class loginPage {
    get #email() { return cy.get('[data-testid="email"]')}
    get #password() { return cy.get('[data-testid="password"]')}
    get #bntLogin() { return cy.get('[data-testid="btnLogin"]')}
    get #bntSign() { return cy.get('[data-testid="signUp"] > .css-146c3p1')}

    login(email, password){
        this.#email.type(email)
        this.#password.type(password)
        this.#bntLogin.click()
    }

    sing(){
        this.#bntSign.click()
    }
}

module.exports = new loginPage();