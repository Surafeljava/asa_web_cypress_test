describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/checkhate');
  });

  it('displays two sub pages - check tweet hate and check hate', () => {
    // cy.get('.todo-list li').should('have.length', 2);

    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
  });


  it('check visit command', () => {
    cy.visitpage('/checkhate');
  });


  
})