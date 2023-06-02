describe("home page", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io")
  });
  it("check h1 contain correct text", () => {
    cy.visit("https://example.cypress.io/")
    cy.get("h1").contains("Kitchen Sink")
  });
  it("check button contain correct text", () => {
    cy.visit("https://example.cypress.io/")
    cy.contains('Commands').click()
    cy.contains('Querying').click()
    cy.get("h1").contains("Querying")
  })
})
