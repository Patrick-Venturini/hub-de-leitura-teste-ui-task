/// <reference types="cypress"/>

class LoginPage {
    campoEmail() { return cy.get('#email') }
    campoSenha() { return cy.get('#password') }

    visitarLogin() {
        cy.visit('/login.html');
    }

    preencherLogin(email, senha) {
        this.visitarLogin();
        cy.login(email, senha)
    }
}

export default new LoginPage;