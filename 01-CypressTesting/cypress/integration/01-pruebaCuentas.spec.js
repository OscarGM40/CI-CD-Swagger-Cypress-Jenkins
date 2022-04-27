/*  cypress contiene mocha y chai.mocha permite escribir las pruebas y chai los asserts*/

const { expect } = require("chai");
const { it, describe } = require("mocha");


describe('Pruebas en cuentas.js', () => {
  let a = 2, b = 3;
/* ojo con el to.equal por estar en chai */
  it('Debe de sumar correctamente', () => {
    expect(a+b).to.equal(5);
  })
  /* y el to.be ?? */
  it('debe de restar correctamente',() => {
    expect(b-a).to.equal(1);
  })
})