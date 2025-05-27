/// <reference types="cypress" />
import type { CreateTask } from "../../types/fixtures";
const pathDataTest = "datatest/createtask.json";

describe("TS002: Create Todo List", () => {
  beforeEach(() => {
    cy.fixture("datatest/users").then((dataTest) => {
      const { username, password } = dataTest.userA;
      cy.visit("localhost:3000/");
      cy.login(username, password);
    });
  });

  it("TC001: Create a task", () => {
    cy.fixture<CreateTask>(pathDataTest).then((dataTest) => {
      cy.get(dataTest.selectors.main_input_task)
        .should("be.visible")
        .type("TaskA1 {enter}");
      cy.get(dataTest.selectors.task_list)
        .first()
        .should("not.contain.text", "TaskA1");
      cy.get(dataTest.selectors.num_task)
        .first()
        .should("be.visible")
        .should("have.text", dataTest.one_task.TS001.TC001.num_task);
    });
  });

  it("TC002: Complete button", () => {
    cy.fixture<CreateTask>(pathDataTest).then((dataTest) => {
      cy.get(dataTest.selectors.task_checkbox).first().check();
      cy.get(dataTest.selectors.task_checkbox).first().should("be.checked");
      cy.get(dataTest.selectors.num_task)
        .eq(2)
        .should("have.text", dataTest.one_task.TS001.TC002.num_task);
      cy.get("aside ul a").eq(3).click();
      cy.get(dataTest.selectors.task_checkbox).first().should("be.checked");
      cy.get(dataTest.selectors.num_task)
        .eq(2)
        .should("have.text", dataTest.one_task.TS001.TC002.num_task);
    });
  });
  it("TC003: Hit a love button", () => {
    cy.fixture<CreateTask>(pathDataTest).then((dataTest) => {
      cy.get(dataTest.selectors.task_checkbox)
        .eq(1)
        .check()
        .should("be.checked");
      cy.get("aside ul a").eq(1).click();
      cy.get(dataTest.selectors.task_checkbox).eq(1).should("be.checked");
      cy.get(dataTest.selectors.num_task)
        .eq(2)
        .should("have.text", dataTest.one_task.TS001.TC002.num_task);
    });
  });
  it("TC004: Hit a delete button", () => {
    cy.fixture<CreateTask>(pathDataTest).then((dataTest) => {
      cy.get("section ul li").click();
      cy.get("aside form button").should("be.visible").click();
      cy.get("aside ul a").eq(2).click();
      cy.get(dataTest.selectors.num_task)
        .eq(2)
        .should("have.text", dataTest.one_task.TS001.TC003.num_task);
      cy.wait(dataTest.one_task.TS001.TC003.num_wait);
      cy.reload();
      cy.get(dataTest.selectors.num_task)
        .eq(2)
        .should("have.text", dataTest.one_task.TS001.TC003.num_task_latest);
    });
  });
});
