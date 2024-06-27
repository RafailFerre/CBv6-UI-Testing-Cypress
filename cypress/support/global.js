// before(() => {
//     const response = cy.request('POST', 'https://clientbase-server.herokuapp.com/v6/user/login', {
//         email: `${Cypress.env('email')}`, password: `${Cypress.env('password')}`
//     })
//     Cypress.env('token', response.body.payload.token)
//     Cypress.env('userId', response.body.payload._id)
// });

before(() => {
    cy.request('POST', 'https://clientbase-server.herokuapp.com/v6/user/login', {
        email: `${Cypress.env('email')}`, password: `${Cypress.env('password')}`
    }).then((response) => {
        Cypress.env('token', response.body.payload.token)
        Cypress.env('userId', response.body.payload._id)
    })
});