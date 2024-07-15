import { SignInPage, ClientPage } from '../pages'
const chance = require('chance').Chance();

describe('CLIENT CREATE', () => {
    const fullName = chance.name()
    const phone = chance.phone({ formatted: false })
    const email = chance.email()
    const description = chance.sentence()
    
    const clientPrice = chance.prime({ min: 1, max: 1000 })
    const clientPaid = chance.prime({ min: 1, max: 1000 })
    const vendorPrice = chance.prime({ min: 1, max: 1000 })
    const vendorPaid = chance.prime({ min: 1, max: 1000 })

    beforeEach(() => {
        cy.loginByApi()  // custom command
        // cy.reload()
        ClientPage.open()
        // SignInPage.open()
        // SignInPage.signIn(Cypress.env('email'), Cypress.env('password'))
        
    })
    it('Create new client', () => {
        ClientPage.createClient(fullName, phone, email, description)
        
        cy.contains(fullName).should('be.visible')
        cy.contains(phone).should('be.visible')
        cy.contains(email).should('be.visible')
        // cy.contains(description).should('be.visible')
    });

    it('Get client details', () => {
        ClientPage.getClient(fullName)
        // cy.contains(fullName).click()

        cy.contains(fullName).should('be.visible')
        ClientPage.buttonCreateOrder.should('be.visible').and('have.text', 'Create Order').click()
        ClientPage.drawerCreateOrder.should('be.visible').and('have.text', 'Create Order')
        ClientPage.drawerExit.should('be.visible').click()
        
    });
    it('Create new client order', () => {
        ClientPage.createOrder(fullName, clientPrice, clientPaid, vendorPrice, vendorPaid)

        ClientPage.toast.should('be.visible').and('have.text', 'Order create error')
    });
});