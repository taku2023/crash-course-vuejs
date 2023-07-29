/// <reference types="cypress" />

describe("Login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });
  it("show error if no user found", () => {
    cy.get('input[type="email"]').type("usernotfound@gmail.com");
    cy.get('input[type="password"]').type("passw0rd");
    cy.get("button").click();
    cy.get("p.is-error").should("contain.text", "No user found");
  });

  it("visit home page after login success", () => {
    cy.get('input[type="email"]').type("valid@gmail.com");
    cy.get('input[type="password"]').type("longpassw0rd");
    cy.get("button").click();
    cy.url.should("eq", "http://localhost:5173/home");
  });
});
