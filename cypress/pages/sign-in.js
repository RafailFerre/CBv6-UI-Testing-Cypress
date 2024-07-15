import BasePage from "./Base"

class SignIn extends BasePage {

    get emailField() { return cy.get('[name="email"]') }

    get passwordField() { return cy.get('[name="password"]') }

    get submitButton() { return cy.get('[type="submit"]') }
    
    open() {
        cy.visit('/user/login');
        // cy.visit(`${Cypress.env('baseUrl')}/user/login`);
    }

    signIn(email, password) {
        this.emailField.type(email);
        this.passwordField.type(password);
        this.submitButton.click();
    }

    // constructor() {
    //     this.email = '[name="email"]';
    //     this.password = '[name="password"]';
    //     this.submit = '[type="submit"]';
    // }

    // signIn(email, password) {
    //     cy.get(this.email).type(email);
    //     cy.get(this.password).type(password);
    //     cy.get(this.submit).click();
    // }
}

// export default new SignInPage;

export const SignInPage = new SignIn()