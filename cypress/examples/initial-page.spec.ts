/// <reference types="cypress" />
describe('initial-page', () => {

    beforeEach(() => {
      cy.visit("localhost:4200/");
    })
  
    it(`has title 'cypress-from-scratch'`, () => {
      cy.contains('cypress-from-scratch');
      cy.get('h1').should('contain', 'cypress-from-scratch');
      cy.title().should('eq', 'CypressFromScratch');
    })
  
  })