/// <reference types="cypress" />

class ArticlesPage {
  constructor() {
    this.banner = '.lighter';
  }

  verifyArticle = (article) => {
    cy.get(this.banner).contains(article);
  };
}

const articlesPage = new ArticlesPage();
export { articlesPage };
