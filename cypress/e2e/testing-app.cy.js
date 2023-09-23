describe('home page user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey', {
      statusCode: 200,
      fixture: 'drinks.json'
    })
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13194', {
    statusCode: 200,
    fixture: 'selectedDrink.json'
  })
})
  it('passes', () => {
    cy.get('header').contains('h1', 'COCKTAIL MAESTRA')
      .get('.cocktail-img').should('be.visible')
      .get('button').contains('.casa-button', 'CASA')
      .get('button').contains('.saved-drinks', 'SAVED DRINKS')
      .get('.button-src').should('be.visible')
      .get('.search-btn').should('be.visible')
  })
  it('should be able to view all drinks from  selected alcohol choice', () => {
    cy.get('.button-src').select('Whiskey')
      .get('.search-btn').click()
      .get('.drinks-container').children().should('have.length', 3)
      .get('.drinks-container').children().first().contains('p', 'Damned if you do')
      .get('.drinks-container').children().last().contains('p', 'Owen\'s Grandmother\'s Revenge')
      .get('.drinks-container').children().first().click()
      .get('.favorite-button').click()
      .url().should('contain', '/favorites')
      .get('.favorites').should('have.length', 1)
      .get('.delete-button').click()
      .get('.favorites').should('have.length', 0)
  })
})