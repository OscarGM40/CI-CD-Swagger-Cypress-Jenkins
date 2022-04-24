const { describe, it } = require("mocha");

describe('Pruebas automatizadas en search.js',() => {

  const url = 'http://automationpractice.com/index.php';
  
  before( () => {
    cy.log("Ejecutando precondiciones a las pruebas")
  })
  after( () => {
    cy.log('finalizadas las pruebas en el archivo')
  })
  
  beforeEach( () => {
    cy.visit(url);
    cy.log("Ejecutando una prueba")
  })

  afterEach( () => {
    cy.log("Finalizando una prueba")
  })

  it('Search for dresses',() => {
    cy.get('#search_query_top').type('dress');
    cy.get('#searchbox > .btn').click();
    // cy.get('.lighter').contains('"dress"')
    cy.get('.page-heading').contains('"dress"')
  })
  
  it('Search for hats',() => {
    cy.get('#search_query_top').clear().type('hats');
    cy.get('#searchbox > .btn').click();
    // cy.get('.lighter').contains('"hats"')
    cy.get('.page-heading').contains('"hats"')
  })
})