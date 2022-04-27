/* global cy */
describe('Pruebas con checboxes en cypress', () => {

  const url = 'http://automationpractice.com/index.php?id_category=3&controller=category';

  before(() => {
    cy.log('Starting the tests...')
  })

  beforeEach(() => {
    cy.visit(url)
  })

  it('Large Tops search', () => {
    cy.get('#layered_category_4').check();
    cy.get('#layered_id_attribute_group_3').as('getCheck2');
    cy.get('@getCheck2').check();
    cy.get('@getCheck2').uncheck();
    // cy.get('#layered_id_attribute_group_3').check();
    /* aqui iría alguna lógica tras las interacciones */
    // cy.get('#layered_id_attribute_group_3').uncheck();
  })

});