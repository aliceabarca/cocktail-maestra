import './SingleDrink.css'
import { useState, useEffect } from 'react';
import { fetchDrinks, fetchDrinksById } from '../../api';
import { Link, useParams } from 'react-router-dom';
import rewindButton from '../../images/rewind-button (1).png'


const SingleDrink = ({ }) => {
  const [selectedDrink, setSelectedDrink] = useState({});
  const [loaded, setLoaded] = useState(false);

  const {drinkId} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDrinksById(drinkId);
        setSelectedDrink(prevSelectedDrink => data.drinks[0]);
        setLoaded(true);
        console.log('hello', data.drinks);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [drinkId]);

      return loaded && (
        <div className='drink-conatiner'>
          <div>
        <p>hello</p>
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
        <Link to={`/`}>
          <img className='back-button' alt='back button' src={rewindButton}></img>
        </Link>
      </div>
    )
}

export default SingleDrink;