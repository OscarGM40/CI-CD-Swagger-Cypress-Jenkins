/// <reference types="cypress" />

import { indexPage } from "../support/pages";


describe('Pruebas automatizadas en search.js',() => {
  const url = 'http://automationpractice.com/index.php';
  it('Search with results',() => {
    cy.visit(url);
    indexPage.search('dress')
    // cy.get('#search_query_top').type('dress');
    // cy.get('#searchbox > .btn').click();
    cy.get('.lighter').contains('"dress"')
  })
})