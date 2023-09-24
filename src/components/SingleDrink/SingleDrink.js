import './SingleDrink.css'
import { useState, useEffect } from 'react';
import { fetchDrinksById } from '../../api';
import { Link, useParams } from 'react-router-dom';
import addFavorites from '../../images/add-to-favorites.png'
import PropTypes from 'prop-types'

const SingleDrink = ({ setSelectedDrink, selectedDrink, setFavorites, favorites, setError }) => {
  const [loaded, setLoaded] = useState(false);
  const {drinkId} = useParams()

  const addFavoriteDrinks = (newFavorite) => {
    const isDuplicate = favorites.find((favorite) => favorite.idDrink === newFavorite.idDrink);

    if (!isDuplicate) {
      setFavorites([...favorites, newFavorite]);
      }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDrinksById(drinkId);
        if (data.drinks && data.drinks.length > 0) {
          setSelectedDrink(data.drinks[0]);
          setLoaded(true);
          } else {
        }
      } catch (error) {
        setError(`Request failed - ${error.message}`)
      }
    };
  
    fetchData();
  }, [drinkId]);

      return loaded && (
        <div className='drink-conatiner'>
          <div>
          {selectedDrink.strDrink}
          {selectedDrink.strGlass}
          {selectedDrink.strInstructions}
          {selectedDrink.strInstructionsES}
          {selectedDrink.strDrinkThumb}
          {selectedDrink.strIngredient1}
          {selectedDrink.strIngredient2}
          {selectedDrink.strIngredient3}
          {selectedDrink.strIngredient4}
          {selectedDrink.strIngredient5}
          {selectedDrink.strIngredient6}
          {selectedDrink.strIngredient7}
          {selectedDrink.strIngredient8}
          {selectedDrink.strIngredient9}
          {selectedDrink.strIngredient10}
          {selectedDrink.strIngredient11}
          {selectedDrink.strIngredient12}
          {selectedDrink.strIngredient13}
          {selectedDrink.strIngredient14}
          {selectedDrink.strIngredient15}
          {selectedDrink.strMeasure1}
          {selectedDrink.strMeasure2}
          {selectedDrink.strMeasure3}
          {selectedDrink.strMeasure4}
          {selectedDrink.strMeasure5}
          {selectedDrink.strMeasure6}
          {selectedDrink.strMeasure7}
          {selectedDrink.strMeasure8}
          {selectedDrink.strMeasure9}
          {selectedDrink.strMeasure10}
          {selectedDrink.strMeasure11}
          {selectedDrink.strMeasure12}
          {selectedDrink.strMeasure13}
          {selectedDrink.strMeasure14}
          {selectedDrink.strMeasure15}
        </div>
        <Link to={`/favorites`}>
          <img className='favorite-button' alt='favorite button' src={addFavorites} onClick={() => addFavoriteDrinks(selectedDrink)}></img>
        </Link>
      </div>
    )
}

export default SingleDrink;

SingleDrink.propTypes = {
  setSelectedDrink: PropTypes.func.isRequired,
  selectedDrink: PropTypes.object.isRequired,
  setFavorites: PropTypes.func.isRequired,
}
