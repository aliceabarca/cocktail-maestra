const fetchDrinksById = (drinkId) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error('Unable to retrieve drinks from server.')
    }
  })
}

const fetchDrinks = (alcoholType) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcoholType}`)
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error('Unable to retrieve drinks from server.')
    }
  })
}

export { fetchDrinks, fetchDrinksById }