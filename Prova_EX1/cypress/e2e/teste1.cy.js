import { acessarUrl } from "../support/Utils";
describe("Teste para Login válido", () => {
  it("Realiza login corretamente", () => {
    cy.task("exemplo", "Login válido");
    acessarUrl("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
  });
});
