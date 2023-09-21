import './DisplayDrinks.css'

const DisplayDrinks = (props) => {
  const mapDrinks = props.drinks.drinks.map(drink => {
    return (
      <div className='display-drinks' key={drink.idDrink}>
        <p>{drink.strDrink}</p>
        <img src={drink.strDrinkThumb}></img>
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