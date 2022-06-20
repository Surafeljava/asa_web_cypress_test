let targeturl = '/'

describe('Check Hate Speech Page Tests', () => {
  beforeEach(() => {
    cy.visit(targeturl);
    cy.url().should('include',targeturl)
    cy.wait(5000)
    // cy.get('[data-cy="proceed_button"]').click()
  });

  afterEach(() => {
    cy.wait(2000);
  });

  it('check if language change works', () => {
    cy.get('[data-cy="am_lang_button"]').click();
    cy.get('[data-cy="firstpage_header"]').should('have.text', 'እንኳን ደህና መጡ');

    cy.wait(3000);

    cy.get('[data-cy="em_lang_button"]').click();
    cy.get('[data-cy="firstpage_header"]').should('have.text', 'WELCOME!');
    
  });
  

});