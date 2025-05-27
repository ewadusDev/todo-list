/// <reference types="cypress" />

import type { LoginPage } from "../types/fixtures.d.ts";

// ***********************************************
// This example commands.ts shows you how to
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
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      //   dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

const pathDataTest = "datatest/createuser.json";

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.fixture<LoginPage>(pathDataTest).then((dataTest) => {
    cy.get(dataTest.login_page.login_input.email_selector)
      .should("be.visible")
      .clear()
      .type(email);
    cy.get(dataTest.login_page.login_input.password_selector)
      .should("be.visible")
      .clear()
      .type(password);
    cy.get(dataTest.login_page.login_btn.selector).should("be.visible").click();
    cy.get("div[class='flex gap-6']").should("be.visible");
  });
});
