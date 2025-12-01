import { acessarUrl } from "../support/Utils";
describe("Teste para Login inválido", () => {
  it("Tenta login com senha errada e falha na asserção", () => {
    cy.task("exemplo", "Falha proposital");
    acessarUrl("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("senha_errada");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("be.visible");
    cy.url().should("include", "/inventory.html");  
  });
});