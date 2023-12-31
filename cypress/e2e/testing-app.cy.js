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
      .get('button').contains('.home-button', 'HOME')
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
      .url().should('contain', 'drink/13194')
      .get('.drink-name').should('contain', 'Damned if you do')
      .get('.stir-glass-type').should('contain', 'Shot glass')
      .get('.english-instructions-section').should('contain', 'English Instructions: Pour into shot glass. Put in mouth. Repeat as deemed necessary.')
      .get('.spanish-instructions-section').should('contain', 'Spanish Instructions / Instrucciones en Español: ')
      .get('.ingredients-section').should('contain', 'Ingredients: Whiskey0.75 oz Hot Damn0.25 oz')
      .get('.selected-drink-image').should('be.visible')
      .get('.save-text').should('contain', 'SAVE?')
      .get('.favorite-button').click()
      .url().should('contain', '/favorites')
      .get('.favorites').should('have.length', 1)
      .get('.view-details-link').click()
      .get('.favorite-button').click()
      .url().should('contain', '/favorites')
      .get('.delete-button').click()
      .get('.favorites').should('have.length', 0)
  })

  it('should be able to click back home', () => {
    cy.get('.home-button').click()
      .url().should('contain', '/')
  })

  it('should display URL error page with a 404 level error', () => {
    cy.intercept('GET','https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=nonsense', {
      statusCode: 404
    })
    .visit('http://localhost:3000/nonsense')
    .url().should('eq', 'http://localhost:3000/nonsense')
    .get('.error-button').click()
    .url().should('eq', 'http://localhost:3000/')
  })
})