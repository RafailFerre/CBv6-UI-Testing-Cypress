import { ClientPage } from "../pages";

describe('MOCK CLIENT', () => {
    beforeEach(() => {
        cy.intercept('POST', '*/client/*', { fixture: 'clients-mock.json' })
        cy.loginByApi()
        ClientPage.open()

    });

    it('mock clients', () => {
        cy.contains('MOCK CLIENT').should('be.visible')
        cy.contains('NO PAYMENT').should('be.visible')
        cy.contains('++++++++').should('be.visible')
        
    });
});