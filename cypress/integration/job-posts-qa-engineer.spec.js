/// <reference types="cypress" />
describe("Job Posts Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
        win.sessionStorage.clear()
      });
      cy.clearCookies()
    });
  
    it("Finds Senior QA Engineer Posts", () => {
        //Arrange 
        cy.viewport('macbook-13')
        cy.visit(Cypress.env("baseUrl"))
        //Act 
        cy.contains('Careers').click()
        //Assert
        cy.get('.job-listing').contains('Sr. QA Engineer').should('be.visible').siblings('a').invoke('attr', 'href')
        .then(href => {
          cy.log(href);
          cy.addContext(href)
        });
    });
  });
  