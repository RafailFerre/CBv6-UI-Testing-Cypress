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

// import SignInPage from "../pages/Sign-in"

// Cypress.Commands.add('login', (email, password) => {
//    SignInPage.open();
//    SignInPage.signIn(email, password);
//    //  cy.visit(`${Cypress.env('baseUrl')}/user/login`) 
//    //  cy.get('[name="email"]').type(email);
//    //  cy.get('[name="password"]').type(password);
//    //  cy.get('[type="submit"]').click();
//  })

    Cypress.Commands.add('loginByToken', (token, userId) => {
        cy.visit(`${Cypress.env('baseUrl')}/`)
        window.localStorage.setItem('token', Cypress.env('token'))
        window.localStorage.setItem('userId', Cypress.env('userId'))
        //window.localStorage.setItem('lang', 'en')
        cy.get('[type="submit"]').click();
     })
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