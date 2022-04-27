const { describe, it } = require("mocha");



describe('Diferentes formas de encontrar un elemento', () => {
  
  const url = 'http://automationpractice.com/index.php';

  it('buscar en el buscador',() => {
    cy.visit(url)
    cy.get('.search_query.form-control.ac_input').type('Hola ') // por clase
    cy.get('#search_query_top').type('Como te va ') // por id
    cy.get('[name="search_query"]').type('Me va muy bien') // por atributo name
    cy.get('[placeholder="Search"]').clear(); //por cualquier otro atributo
  })
});