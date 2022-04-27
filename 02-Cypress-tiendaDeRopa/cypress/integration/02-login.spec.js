

describe('pruebas en el login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('login with incorrect email', () => {
    cy.login('something','123456');

    cy.fixture('login.json').then((login) => {
      cy.get(login.incorrectLoginBanner).should('contain', 'Invalid email address');

    });

/*     cy.get('@login').then((login) => {
      cy.get(login.loginLink).click();
      cy.get(login.email).type('something');
      cy.get(login.password).type('1234567890');
      cy.get(login.loginButton).click();
    }); */
  });
});
