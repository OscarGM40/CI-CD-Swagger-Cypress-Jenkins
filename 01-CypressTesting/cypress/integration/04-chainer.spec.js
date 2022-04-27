


describe('Encadenar comandos para concatenar strings en input de busqueda',() => {

  const url = 'http://automationpractice.com/index.php';

  it('Vamos a escribir y limpiar', () => {
    /* fijate que no tiene sentido repetir por cada prueba este cy.visit.Lo cambiaremos. */
    cy.visit(url);
    cy.get('#search_query_top').clear().type('Hola').clear().type('que tal');
  })

})