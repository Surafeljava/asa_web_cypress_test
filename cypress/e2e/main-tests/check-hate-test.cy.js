let targeturl = '/checkhate'

describe('Check Hate Speech Page Tests', () => {
  beforeEach(() => {
    cy.visit(targeturl);
    cy.url().should('include',targeturl)
    cy.wait(6000)
    // cy.get('[data-cy="proceed_button"]').click()
  });

  afterEach(() => {
    //Wait for 2 seconds
    cy.wait(2000);
    //Remove all cookies
    // cy.clearCookies();
  });

  it('check if language change works', () => {
    cy.get('[data-cy="am_lang_button"]').click();
    cy.get('[data-cy="firstpage_header"]').should('have.text', 'እንኳን ደህና መጡ');

    cy.wait(3000);

    cy.get('[data-cy="em_lang_button"]').click();
    cy.get('[data-cy="firstpage_header"]').should('have.text', 'WELCOME!');
    
  });
  
  it('Check hate speech of a text', () => {
    cy.get('[data-cy="proceed_button"]').click();
    
    cy.wait(5000);
    
    cy.intercept('https://asa2022.herokuapp.com/api/saved_tweets/all_analyzed_tweets/').as('fetch-map-data')
    cy.wait('@fetch-map-data')
    
    
    cy.get('[data-cy="home_button"]').should('be.visible');
    // cy.get('.todo-list li').should('have.length', 2);
  });  
});