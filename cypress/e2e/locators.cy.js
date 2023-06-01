/*
//CSS Selector

tag id
tag class
tag attribute
tag class attribute

#id                         tag#id
.class                      tag.class
[attribute='value]          tag.[attribute='value']
.class[attribute='value']   tag.class[attribute='value']
*/

describe('Google Search', () => {
    beforeEach(() => {
      // Visit Google homepage before each test
      cy.visit('https://www.google.com');
    });
  
    it('should display search results', () => {
      const searchText = 'Cypress testing';
  
      // Type the search query in the search input field
      cy.get('#APjFqb').type(searchText);
  
      // Press Enter key to submit the search query
      cy.get('#APjFqb').type('{enter}');
  
      // Verify that search results are displayed
      //cy.title().should('eq', 'cypress testing - Google Search')
    });
  
    it('should navigate to a search result page', () => {
      const searchText = 'Cypress testing';
  
      // Type the search query in the search input field
      cy.get('#APjFqb').type(searchText);
  
      // Press Enter key to submit the search query
      cy.get('#APjFqb]').type('{enter}');
  
      //cy.get('#APjFqb').contains('searchText').should('exist');
    });
  });
  