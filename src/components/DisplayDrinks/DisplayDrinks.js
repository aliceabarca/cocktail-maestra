import './DisplayDrinks.css'
import { Link } from 'react-router-dom';

const DisplayDrinks = (props) => {
  if (!props.drinks.drinks) {
    return null;
  }
  const mapDrinks = props.drinks.drinks.map(drink => {

    return (
      <Link to={`drink/${drink.idDrink}`} key={drink.idDrink} className='drink-card-link'>
        <div className='display-drinks' key={drink.idDrink}>
          <p className='drink-name'>{drink.strDrink}</p>
          <img className='drink-image' src={drink.strDrinkThumb} alt='drink-images'></img>
        </div>
      </Link>
    );
  })

  return (
    <div className='drinks-container'>
      {mapDrinks}
    </div>
  )
};

export default DisplayDrinks;

