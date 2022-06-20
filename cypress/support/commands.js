// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('visitpage', (endpoint) => {
    return cy.visit(endpoint);
});


Cypress.Commands.add('openCheckHatePage', (endpoint) => {
    cy.get('[data-cy="proceed_button"]').click();
    
    cy.wait(5000);
    
    cy.intercept('https://asa2022.herokuapp.com/api/saved_tweets/all_analyzed_tweets/').as('fetch-map-data')
    cy.wait('@fetch-map-data')
    
    
    cy.get('[data-cy="check_hate_button"]').should('exist');


    cy.get('[data-cy="check_hate_button"]').click();
    // return cy.visit(endpoint).wait(6000);
});