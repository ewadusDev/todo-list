/// <reference types="cypress" />
import type { LoginPage } from "../../types/fixtures";

const pathDataTest = "datatest/createuser.json";

describe("TS001: Create User", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/");
  });
  after(() => {});

  it("TC001: Login Page UI elements assertion", () => {
    cy.fixture<LoginPage>(pathDataTest).then((dataTest) => {
      cy.get(dataTest.login_page.app_name.selector)
        .should("be.visible")
        .should("have.text", dataTest.login_page.app_name.message);
      cy.get(dataTest.login_page.header.selector)
        .should("be.visible")
        .should("have.text", dataTest.login_page.header.message);
      cy.get(dataTest.login_page.login_input.email_selector).should(
        "be.visible"
      );
      cy.get(dataTest.login_page.login_input.password_selector).should(
        "be.visible"
      );
      cy.contains(dataTest.login_page.helping_text).should("be.visible");
      cy.get(dataTest.login_page.login_btn.selector)
        .should("be.visible")
        .should("have.text", dataTest.login_page.login_btn.message);
    });
  });

  it("TC002: Create User Page UI elements assertion", () => {
    cy.fixture<LoginPage>(pathDataTest).then((dataTest) => {
      cy.get(dataTest.login_page.create_acc_btn.selector)
        .should("be.visible")
        .click();
      cy.get(dataTest.create_page.headline.selector)
        .should("be.visible")
        .contains(dataTest.create_page.headline.message);
      cy.get(dataTest.create_page.box_left).then((selector) => {
        cy.wrap(selector).contains("Enter your information");
        cy.wrap(selector).contains(
          "Please do not use the actual data for registration"
        );
      });
      cy.get(dataTest.create_page.firstname_input).should("be.visible");
      cy.get(dataTest.create_page.lastname_input).should("be.visible");
      cy.get(dataTest.create_page.email_input).should("be.visible");
      cy.get(dataTest.create_page.password_input).should("be.visible");
      cy.get(dataTest.create_page.cfpassword_input).should("be.visible");
      cy.get(dataTest.create_page.box_right).contains(
        "Please do not use the actual data for registration."
      );
      cy.get(dataTest.create_page.create_acc_btn.selector)
        .should("be.visible")
        .contains("Create Account");
    });
  });

  it("TC003: Create User", () => {
    cy.fixture<LoginPage>(pathDataTest).then((dataTest) => {
      cy.get(dataTest.login_page.create_acc_btn.selector)
        .should("be.visible")
        .click();

      cy.get(dataTest.create_page.firstname_input)
        .should("be.visible")
        .type("Thomas");
      cy.get(dataTest.create_page.lastname_input)
        .should("be.visible")
        .type("Eawdus");
      cy.get(dataTest.create_page.email_input)
        .should("be.visible")
        .type("thomas@gmail.com");
      cy.get(dataTest.create_page.password_input)
        .should("be.visible")
        .type("123456");
      cy.get(dataTest.create_page.cfpassword_input)
        .should("be.visible")
        .type("123456");
      cy.get(dataTest.create_page.create_acc_btn.selector)
        .should("be.visible")
        .click();
      cy.get(dataTest.login_page.header.selector)
        .should("be.visible")
        .should("have.text", dataTest.login_page.header.message);
    });
  });
});
