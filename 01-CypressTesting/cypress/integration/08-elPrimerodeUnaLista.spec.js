/// <reference types="cypress" />

describe('Obtener el primero de un grupo de elementos',() => {

  const url = 'http://automationpractice.com/index.php';
 
  before( () => cy.log('Empezando las pruebas'))

  beforeEach(() => cy.visit(url) )

  after( () => cy.log('finalizadas las pruebas'))

  it('Debe seleccionar el primero de la lista', function(){
    cy.get('[class="sf-with-ul"]').as('links');
    // cy.get('@links').click()
    cy.get('@links').first().click()
  })
  
})