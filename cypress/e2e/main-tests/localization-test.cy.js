describe('Localization Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check if Title and discription changes on language change', () => {
    // cy.get('.todo-list li').should('have.length', 2);

    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
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