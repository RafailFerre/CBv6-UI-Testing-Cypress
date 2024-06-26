import { faker } from "@faker-js/faker";

describe("SIGNUP", () => {
  const companyName = faker.company.name();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password();
  describe("POSITIVE", () => {
    beforeEach(() => {
      cy.visit("https://clientbase.pasv.us/v6/user/register");
      //cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    });
    it("Sign up with valid credentials", () => {
      cy.get('[name="companyName"]').type(companyName);
      cy.get('[name="firstName"]').type(firstName);
      cy.get('[name="lastName"]').type(lastName);
      cy.get('[name="email"]').type(email);
      cy.get('[name="password"]').type(password);
      cy.get('[type="submit"]').click();
      cy.get("div.sidebar").should("be.visible");
      cy.get('[aria-label="Search"]').should("be.visible");
      cy.contains(firstName + " " + lastName);
      cy.get("#root > div > div > div.header-main.px-3.px-lg-4 > div").click();
      cy.get('[data-qa="profile"]').should("be.visible");
    });
  });

  describe("NEGATIVE", () => {
    beforeEach(() => {
      cy.visit("https://clientbase.pasv.us/v6/user/register");
      //cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    });
    it("Sign up with existing email", () => {
      cy.get('[name="companyName"]').type(companyName);
      cy.get('[name="firstName"]').type(firstName);
      cy.get('[name="lastName"]').type(lastName);
      cy.get('[name="email"]').type(email);
      cy.get('[name="password"]').type(password);
      cy.get('[type="submit"]').click();
      cy.get(".ant-notification-notice").should("be.visible");
    });
    it("Sign up with out first name", () => {
      cy.get('[name="companyName"]').type(companyName);
      cy.get('[name="firstName"]').type(firstName).clear();
      cy.get('[name="lastName"]').type(lastName);
      cy.get('[name="email"]').type("1" + email);
      cy.get('[name="password"]').type(password);
      cy.get('[type="submit"]').click();
      cy.get(".ant-notification-notice").should("be.visible");
    });
    it("Sign up with out first name", () => {
      cy.get('[name="companyName"]').type(companyName);
      cy.get('[name="firstName"]').type(firstName);
      cy.get('[name="lastName"]').type(lastName).clear();
      cy.get('[name="email"]').type("2" + email);
      cy.get('[name="password"]').type(password);
      cy.get('[type="submit"]').click();
      cy.get(".ant-notification-notice").should("be.visible");
    });
    it("Sign up with out email", () => {
      cy.get('[name="companyName"]').type(companyName);
      cy.get('[name="firstName"]').type(firstName);
      cy.get('[name="lastName"]').type(lastName);
      cy.get('[name="email"]').type(email).clear();
      cy.get('[name="password"]').type(password);
      cy.get('[type="submit"]').click();
      cy.on("window:alert", (text) => {
        expect(text).to.contains("Please fill out this field");
      });
    });
    it("Sign up with out password", () => {
      cy.get('[name="companyName"]').type(companyName);
      cy.get('[name="firstName"]').type(firstName);
      cy.get('[name="lastName"]').type(lastName);
      cy.get('[name="email"]').type("3" + email);
      cy.get('[name="password"]').type(password).clear();
      cy.get('[type="submit"]').click();
      cy.on("window:alert", (text) => {
        expect(text).to.contains("Please fill out this field");
      });
    });
  });
});
