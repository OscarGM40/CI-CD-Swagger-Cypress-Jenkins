/// <reference types="cypress" />

class IndexPage {
/*   constructor() {
    this.searchInput = '#search_query_top';
    this.searchButton = '#searchbox > .btn';
  }
 */
  search = (element) => {
    cy.fixture('index.json').then((locators) => {
      cy.get(locators.searchInputSelector).type(element);
      cy.get(locators.searchButton).click();

    } )
  };
}

const indexPage = new IndexPage();
export { indexPage };
