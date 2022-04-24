/// <reference types="cypress" />

describe('Pruebas con combo boxes o selects',function(){

  const url = 'http://automationpractice.com/index.php?id_category=3&controller=category';
  
  before(() => cy.log('starting tests in comboboxes'))

  this.beforeEach(() => {
    cy.visit(url);
  });

  it('Order by Highest prices', function(){
    cy.get('#selectProductSort').select('Price: Highest first');
  })
  
  it('Order by In stock', function(){
    cy.get('#selectProductSort').select('In stock');
  })
}) 