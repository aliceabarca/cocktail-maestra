const fetchDrinksById = () => {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
  .then(response => {
    if(response.ok) {
      return response.json()
    // } else {
    //   throw new Error('Unable to retrieve contacts from server.')
    // }
    }
  })
}

const fetchDrinks = (alcoholType) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcoholType}`)
  .then(response => {
    if(response.ok) {
      return response
    } else {
      throw new Error('Unable to retrieve contacts from server.')
    }
  })
}

export { fetchDrinks, fetchDrinksById }
// log on be able to choose what type of alcohol , serch by alcohol
// then look for id.