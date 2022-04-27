Cypress.Commands.add('login', (email, password) => {
    cy.fixture('login.json').as('login');
    cy.get('@login').then((login) => {
      cy.get(login.loginLink).click();
      cy.get(login.email).type(email);
      cy.get(login.password).type(password);
      cy.get(login.loginButton).click();
  });
});