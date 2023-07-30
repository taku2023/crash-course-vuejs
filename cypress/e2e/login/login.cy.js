/// <reference types="cypress" />

describe("Login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("show error if no user found", () => {
    cy.get('input[type="email"]').type("usernotfound@gmail.com");
    cy.get('input[type="password"]').type("passw0rd");
    cy.get("button").click();
    cy.get("p.is-error").should("contain.text", "user not found");
  });

  it("visit home page after login success", () => {
    cy.get('input[type="email"]').type("your@gmail.com");
    cy.get('input[type="password"]').type("longpassw0rd");
    cy.get("button").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/home");
    });
  });
});
