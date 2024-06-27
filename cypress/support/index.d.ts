declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Sign in using email & password
         * @example
         * cy.login('your@email.com', 'your_password')
         */
        login(email: string, password: string): Chainable<any>

        /**
         * Sign in using token & userId
         * @example
         * cy.loginByToken()
         */
        loginByToken(): Chainable<any>
    }
}