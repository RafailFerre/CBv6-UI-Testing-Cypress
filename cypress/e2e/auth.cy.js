import { SignInPage } from '../pages'
// import { SignInPage } from "../pages/sign-in";

describe('AUTHORIZATION', () => {
  describe('POSITIVE', () => {
    beforeEach(() => {
      SignInPage.open()
      //cy.visit('/user/login');
      //cy.visit(`${Cypress.env('baseUrl')}/user/login`);
      //cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    })
    it('Sign in with valid credentials', () => {
      SignInPage.signIn(Cypress.env('email'), Cypress.env('password'))
      // SignInPage.emailField.type(`${Cypress.env('email')}`);
      // SignInPage.passwordField.type(`${Cypress.env('password')}`);
      // SignInPage.submitButton.click();
      // SignInPage.login(`${Cypress.env('email')}`, `${Cypress.env('password')}`); //page object model another way
      // cy.login(`${Cypress.env('email')}`, `${Cypress.env('password')}`); //custom command
      // cy.get('[name="email"]').type(`${Cypress.env('email')}`);
      // cy.get('[name="password"]').type(`${Cypress.env('password')}`);
      // //cy.get('[name="password"]').type(Cypress.env('email'));
      // //cy.get('[name="password"]').type(Cypress.env('password'));
      // cy.get('[type="submit"]').click();

      cy.get('[aria-label="Search"]').should('be.visible')
      cy.get('#root > div > div > div.header-main.px-3.px-lg-4 > div').click()

      cy.get('[aria-label="Search"]').should('be.visible')
      cy.get('#root > div > div > div.header-main.px-3.px-lg-4 > div').should('be.visible') //.click();
      // cy.get('[data-qa="profile"]').should("be.visible");
    })
  })
  describe('NEGATIVE', () => {
    beforeEach(() => {
      SignInPage.open()
    })
    it('Sign in with invalid email', () => {
      SignInPage.signIn('invalid@gmail', Cypress.env('password'))
      // SignInPage.emailField.type("invalid@gmail");
      // SignInPage.passwordField.type(`${Cypress.env('password')}`);
      // SignInPage.submitButton.click();

      SignInPage.toast.should('be.visible').and('have.text', 'Auth failed')
      // cy.get(".ant-notification-notice")
      //   .should("be.visible")
      //   .should("have.text", "Auth failed");
      cy.location('pathname').should('eq', '/v6/user/login')
      cy.url().should('eq', `${Cypress.env('baseUrl')}/user/login`)
    })

    it('Sign in with invalid password', () => {
      SignInPage.signIn(Cypress.env('email'), 'invalid_password')

      SignInPage.toast.should('be.visible').and('have.text', 'Auth failed')

      cy.url().should('eq', `${Cypress.env('baseUrl')}/user/login`)
      cy.location('pathname').should('eq', '/v6/user/login')
    })

    it('Sign in with empty email', () => {
      SignInPage.emailField.clear()
      SignInPage.passwordField.type(Cypress.env('password'))
      SignInPage.submitButton.click()

      cy.location('pathname').should('eq', '/v6/user/login')
      cy.url().should('eq', `${Cypress.env('baseUrl')}/user/login`)

      cy.on('window:alert', text => {
        expect(text).to.contains('Please fill out this field')
      })
    })

    it('Sign in with empty password', () => {
      SignInPage.emailField.type(Cypress.env('email'))
      SignInPage.passwordField.clear()
      SignInPage.submitButton.click()

      cy.location('pathname').should('eq', '/v6/user/login')
      cy.url().should('eq', `${Cypress.env('baseUrl')}/user/login`)

      // cy.window().then((win) => {
      //   cy.wrap(win).contains('Please fill out this field.').should('be.visible');
      //   win.alert('Please fill out this field.');
      // });
      // cy.contains('Please fill out this field').should('be.visible');

      cy.on('window:alert', text => {
        expect(text).to.contains('Please fill out this field').should('be.visible');
      })
    })
  })
})
