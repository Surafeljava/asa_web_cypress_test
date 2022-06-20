let targeturl = '/'

describe('Localization Tests', () => {
  beforeEach(() => {
    cy.visit(targeturl);
    cy.url().should('include',targeturl)
    cy.wait(6000)
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


  it('Check if proceed button text changes on language change', () => {
    // cy.get('.todo-list li').should('have.length', 2);

    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
  });



  it('check visit command', () => {
    cy.visitpage('/checkhate');
  });  
});