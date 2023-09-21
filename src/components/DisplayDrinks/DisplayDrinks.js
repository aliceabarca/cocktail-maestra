import './DisplayDrinks.css'

const DisplayDrinks = (props) => {
  const mapDrinks = props.drinks.drinks.map(drink => {
    return (
      <div className='display-drinks' key={drink.idDrink}>
        <p className='drink-name'>{drink.strDrink}</p>
        <img className='drink-image' src={drink.strDrinkThumb} alt='drink-images'></img>
      </div>
    );
  })

  return (
    <div className='drinks-container'>
      {mapDrinks}
    </div>
  )
};

export default DisplayDrinks;