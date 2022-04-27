/// <reference types="Cypress" />
describe('Pruebas en search.spec.js', () => {
  beforeEach(() => {
    cy.visit('/'); // fijate que el cypress.json me va a ayudar aqui
  });

  it('Should search for elements with multiple results', () => {
    cy.fixture('index.json').as('tiendaDeRopa');
   
    cy.get('@tiendaDeRopa').then((index) => {
      cy.get(index.searchBox).type(index.searchBoxText);
      cy.get(index.searchButton).click();
    });
  
    cy.fixture('searchResult.json').then((searchResult) => {
      cy.get(searchResult.title).should('contain', 'dress');
    });
  });

  it('should search for elements with no results', () => {
    cy.fixture('index.json').as('tiendaDeRopa');
    cy.get('@tiendaDeRopa').then((index) => {
      cy.get(index.searchBox).type('qwerty');
      cy.get(index.searchButton).click();
    });
    cy.fixture('searchResult.json').then((searchResult) => {
      cy.get(searchResult.alert).should('contain', 'No results were found for your search');
    });
  });

  it('should search for elements with special code ', () => {
   cy.readFile('cypress/support/text-files/search.txt').then((text) => {
     cy.search('index',text);
   }); 
   cy.fixture('searchResult.json').then((searchResult) => {
    cy.get(searchResult.alert).should('contain', 'No results were found for your search');
  });

  });
});
