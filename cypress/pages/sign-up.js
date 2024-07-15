import BasePage from "./Base"

class SignUp extends BasePage {

    get companyNameField() { return cy.get('[name="companyName"]') }

    get firstNameField() { return cy.get('[name="firstName"]') }

    get lastNameField() { return cy.get('[name="lastName"]') }

    get emailField() { return cy.get('[name="email"]') }

    get passwordField() { return cy.get('[name="password"]') }

    get submitButton() { return cy.get('[type="submit"]') }
    
    open() {
        cy.visit('/user/register');
        // cy.visit(`${Cypress.env('baseUrl')}/user/register`);
    }

    signUp(companyName, firstName, lastName, email, password) {
        this.companyNameField.type(companyName);
        this.firstNameField.type(firstName);
        this.lastNameField.type(lastName);
        this.emailField.type(email);
        this.passwordField.type(password);
        this.submitButton.click();
    }
}

export const SignUpPage = new SignUp()

// export default new SignUpPage();