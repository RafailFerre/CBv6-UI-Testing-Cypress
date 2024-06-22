describe('AUTHORIZATION', () => {
    it('Sign in with valid credentials', () => {
        cy.visit('https://clientbase.us/v6/user/login')
        cy.get('[name="email"]').type('test@gmail.com')
        cy.get('[name="password"]').type('12345')
        cy.get('[type="submit"]').click()
        cy.get('[aria-label="Search"]').should('be.visible')
        cy.get('#root > div > div > div.header-main.px-3.px-lg-4 > div').click()
        cy.get('[data-qa="profile"]').should('be.visible')
    });
});