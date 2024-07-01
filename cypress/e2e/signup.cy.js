import { faker } from "@faker-js/faker";
import  SignUpPage  from "../pages/Sign-up";
// import  { SignUpPage }  from "../pages/sign-up"; //if using const SignUpPage from "../pages/sign-up"; 

describe("SIGNUP", () => {

  const companyName = faker.company.name();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const password = faker.internet.password();

  describe("POSITIVE", () => {
    beforeEach(() => {
        SignUpPage.open();
        //cy.visit('/user/register');
        //cy.visit(`${Cypress.env('baseUrl')}/user/register`);
        //cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    });
    it("Sign up with valid credentials", () => {
      SignUpPage.signUp(companyName, firstName, lastName, email, password);
      // SignUpPage.companyNameField.type(companyName);
      // SignUpPage.firstNameField.type(firstName);
      // SignUpPage.lastNameField.type(lastName);
      // SignUpPage.emailField.type(email);
      // SignUpPage.passwordField.type(password);
      // SignUpPage.submitButton.click();
      // cy.get('[name="companyName"]').type(companyName);
      // cy.get('[name="firstName"]').type(firstName);
      // cy.get('[name="lastName"]').type(lastName);
      // cy.get('[name="email"]').type(email);
      // cy.get('[name="password"]').type(password);
      // cy.get('[type="submit"]').click();

      cy.get('[class*="ri-menu-2-fill"]').should("be.visible");

      cy.get('[aria-label="Search"]').should("be.visible");
      cy.contains(firstName + " " + lastName);

      cy.get("#root > div > div > div.header-main.px-3.px-lg-4 > div").should("be.visible"); //.click();
      //cy.get('[data-qa="profile"]').should("be.visible");
    });
  });

  describe("NEGATIVE", () => {
    beforeEach(() => {
        SignUpPage.open();
    });
    it("Sign up with existing email", () => {
      SignUpPage.companyNameField.type(companyName);
      SignUpPage.firstNameField.type(firstName);
      SignUpPage.lastNameField.type(lastName);
      SignUpPage.emailField.type(`${Cypress.env('email')}`);
      SignUpPage.passwordField.type(password);
      SignUpPage.submitButton.click();

      cy.url().should("eq", `${Cypress.env('baseUrl')}/user/register`);

      SignUpPage.toast.should("be.visible").and("have.text", "User with this e-mail exists");
      // cy.get(".ant-notification-notice").should("be.visible").should("have.text", "User with this e-mail exists");
    });

    it("Sign up with invalid password less than 5 characters", () => {
      SignUpPage.companyNameField.type(companyName);
      SignUpPage.firstNameField.type(firstName);
      SignUpPage.lastNameField.type(lastName);
      SignUpPage.emailField.type(`${Cypress.env('email')}`);
      SignUpPage.passwordField.type("1234");
      SignUpPage.submitButton.click();

      cy.url().should("eq", `${Cypress.env('baseUrl')}/user/register`);

      SignUpPage.toast.should("be.visible").and("have.text", "Wrong password format");
    });
    
    it("Sign up with out first name", () => {
      SignUpPage.companyNameField.type(companyName);
      SignUpPage.firstNameField.clear();
      SignUpPage.lastNameField.type(lastName);
      SignUpPage.emailField.type("1" + email);
      SignUpPage.passwordField.type(password);
      SignUpPage.submitButton.click();

      cy.url().should("eq", `${Cypress.env('baseUrl')}/user/register`);

      SignUpPage.toast.should("be.visible").and("have.text", "User was not created");
    });

    it("Sign up with out last name", () => {
      SignUpPage.companyNameField.type(companyName);
      SignUpPage.firstNameField.type(firstName);
      SignUpPage.lastNameField.clear();
      SignUpPage.emailField.type("2" + email);
      SignUpPage.passwordField.type(password);
      SignUpPage.submitButton.click();

      cy.url().should("eq", `${Cypress.env('baseUrl')}/user/register`);

      SignUpPage.toast.should("be.visible").and("have.text", "User was not created");;
    });

    it("Sign up with out email", () => {
      SignUpPage.companyNameField.type(companyName);
      SignUpPage.firstNameField.type(firstName);
      SignUpPage.lastNameField.type(lastName);
      SignUpPage.emailField.clear();
      SignUpPage.passwordField.type(password);
      SignUpPage.submitButton.click();

      cy.url().should("eq", `${Cypress.env('baseUrl')}/user/register`);
      
      cy.on("window:alert", (text) => {
        expect(text).to.contains("Please fill out this field");
      });
    });

    it("Sign up with out password", () => {
      SignUpPage.companyNameField.type(companyName);
      SignUpPage.firstNameField.type(firstName);
      SignUpPage.lastNameField.type(lastName);
      SignUpPage.emailField.type("3" + email);
      SignUpPage.passwordField.clear();
      SignUpPage.submitButton.click();

      cy.url().should("eq", `${Cypress.env('baseUrl')}/user/register`);
      
      cy.on("window:alert", (text) => {
        expect(text).to.contains("Please fill out this field");
      });
    });
  });
});
