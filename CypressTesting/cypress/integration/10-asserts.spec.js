/// <reference types="cypress" />

describe('utilizando los asserts de chai', function () {
  let a = 1;

  before( () => cy.logWithSpecialFormat('starting tests in asserts'));
  
  it('la igualdad debe ser true', () => {
    expect(1 === 1).to.equal(true);
  });

  /* si uso only solo ejecutaré las que se marquen con only */
  it.only('la resta debe estar bien', () => {
    expect(1 - 1).to.equal(0);
  });

  it.only('la operacion no debe estar correcta', () => {
    expect(1 - 1).not.to.equal(2);
  });

  /* fijate en otra forma de hacer el to.equal(true) pero con propiedades */
  it.only('tiene que ser verdadero', () => {
    expect(2 === 2).to.be.true;
  });

  /* comprobar si algo existe(to.exist) */
  it.only('la variable debe existir', () => {
    expect(a,'a no debe existir y si veo esto es que si existe').to.exist;
  });

  /* comprobar que algo sea menor que */
  it.only('debe ser menor a 10', () => {
    expect(a,'a debe ser menor que 10 y no lo es').to.be.lessThan(10);
  });

  it('debe ser mayor que 0', () => {
    expect(a).to.be.greaterThan(0);
  });
});
