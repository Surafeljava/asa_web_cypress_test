let targeturl = '/checkhate'

describe('Check Hate Speech Page Tests', () => {
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
  
  it('Check hate speech of a text', () => {
    cy.openCheckHatePage();

    cy.fixture('texts').then((texts) => {
      // expect(user, 'the same data').to.deep.equal(userFixture)
      cy.get('[data-cy="text-to-predict"]').type(texts['t1']);

      cy.get('[data-cy="checktext_button"]').click();

      
      cy.intercept('https://asa-middle.herokuapp.com/predict_from_text').as('predict_from_text')
      cy.wait('@predict_from_text')
      
      cy.get('[data-cy="result-title"]').should('have.text', texts['results']['title']);
      cy.get('[data-cy="result-sentence"]').should('have.text', texts['t1']);
      cy.get('[data-cy="result-prediction"]').should('have.text', texts['results']['prediction']);

    })

  });  


  it('Check hate speech of a tweet id', () => {
    cy.openCheckHatePage();

    cy.fixture('tweet').then((tweet) => {
      // expect(user, 'the same data').to.deep.equal(userFixture)
      cy.get('[data-cy="tweet-id-input"]').type(tweet['tweet_id']);

      cy.get('[data-cy="checktweet_button"]').click();
      
      cy.intercept('https://asa-middle.herokuapp.com/predict_from_tweetid').as('predict_from_tweetid')
      cy.wait('@predict_from_tweetid')
      
      cy.get('[data-cy="result-title"]').should('have.text', tweet['results']['title']);
      cy.get('[data-cy="result-sentence"]').should('have.text', tweet['results']['text']);
      cy.get('[data-cy="result-prediction"]').should('have.text', tweet['results']['prediction']);

    })

  }); 


  // it('Check hate speech of a text', () => {
  //   cy.openCheckHatePage();
  // });
});