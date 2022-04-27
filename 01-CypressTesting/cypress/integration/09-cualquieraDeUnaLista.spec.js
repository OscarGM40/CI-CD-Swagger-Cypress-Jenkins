/// <reference types="cypress" />

describe('Seleccionando cualquier elemento de una lista por indice',() => {
  const url = 'http://automationpractice.com/index.php';
  before( () => cy.log('starting'));
  beforeEach( () => cy.visit(url));
  after( () => cy.log('Finishing'));

  it('Debe de seleccionar un elemento por indice y visitarlo',() => {
    cy.get('[class="sf-with-ul"]').as('links');
    cy.get('@links').eq(3).click()
  }) 

});