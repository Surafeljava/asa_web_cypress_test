describe('Filter Test', () => {
  beforeEach(() => {
    cy.visit('/checkhate');
  });

  afterEach(() => {
    //Remove all cookies
    cy.clearCookies();
  });
  

  it('check if filter drop-downs work', () => {
    // cy.get('.todo-list li').should('have.length', 2);

    // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
    // cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
  });


  it('check visit command', () => {
    cy.visitpage('/checkhate');
  });  
});