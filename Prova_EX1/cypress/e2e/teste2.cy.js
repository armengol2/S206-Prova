import { acessarUrl } from "../support/Utils";
describe("Teste para Adicionar item ao carrinho", () => {
  it("Adiciona um produto ao carrinho com sucesso", () => {
    cy.task("exemplo", "Carrinho Funcional");
    acessarUrl("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
  });
});