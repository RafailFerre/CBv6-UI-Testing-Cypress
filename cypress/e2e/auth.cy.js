describe("AUTHORIZATION", () => {
  describe("POSITIVE", () => {
    beforeEach(() => {
      cy.visit('/user/login');
      //cy.visit(`${Cypress.env('baseUrl')}/user/login`);
      //cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    });
    it("Sign in with valid credentials", () => {
      cy.get('[name="email"]').type(Cypress.env('email'));
      //cy.get('[name="email"]').type(`${Cypress.env('email')}`);
      cy.get('[name="password"]').type(Cypress.env('password'));
      //cy.get('[name="password"]').type(`${Cypress.env('password')}`);
      cy.get('[type="submit"]').click();

      cy.get('[aria-label="Search"]').should("be.visible");
      cy.get("#root > div > div > div.header-main.px-3.px-lg-4 > div").click();

      cy.get('[data-qa="profile"]').should("be.visible");
    });
  });
  describe("NEGATIVE", () => {
    beforeEach(() => {
      cy.visit('/user/login');
      //cy.visit(`${Cypress.env('baseUrl')}/user/register`);
    });
    it("Sign in with invalid email", () => {
      cy.get('[name="email"]').type("invalid@gmail.com");
      cy.get('[name="password"]').type(Cypress.env('password'));
      cy.get('[type="submit"]').click();

      cy.get(".ant-notification-notice").should("be.visible");

      cy.get(".ant-notification-notice-message")
        .should("have.text", "Auth failed");
    });
    it("Sign in with invalid password", () => {
      cy.get('[name="email"]').type(Cypress.env('email'));
      cy.get('[name="password"]').type("invalid_password");
      cy.get('[type="submit"]').click();

      cy.get(".ant-notification-notice").should("be.visible");
      
      cy.get(".ant-notification-notice-message")
        .should("have.text", "Auth failed");
    });
    it("Sign in with empty email", () => {
      cy.get('[name="email"]').type(Cypress.env('email')).clear();
      cy.get('[name="password"]').type(Cypress.env('password'));
      cy.get('[type="submit"]').click();

      cy.on("window:alert", (text) => {
        expect(text).to.contains("Please fill out this field");
      });
    });
    it("Sign in with empty password", () => {
      cy.get('[name="email"]').type(Cypress.env('email'));
      cy.get('[name="password"]').type(Cypress.env('password')).clear();
      cy.get('[type="submit"]').click();

      cy.on("window:alert", (text) => {
        expect(text).to.contains("Please fill out this field");
      });
    });
  });
});
