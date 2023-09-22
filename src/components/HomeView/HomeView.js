import './HomeView.css'
import SearchDrink from '../SearchDrink/SearchDrink';
import DisplayDrinks from '../DisplayDrinks/DisplayDrinks';
import PropTypes from 'prop-types'

const HomeView = ({fetchAlcohol, drinks, addFavoriteDrinks }) => {

  return (
    <div className='home-view'>
      <SearchDrink fetchAlcohol={fetchAlcohol}/>
      <DisplayDrinks drinks={drinks} addFavoriteDrinks={addFavoriteDrinks}/>
    </div>
  ) 
}

export default HomeView;

HomeView.propTypes = {
  fetchAlcohol: PropTypes.func.isRequired,
  drinks: PropTypes.array.isRequired,
  addFavoriteDrinks: PropTypes.func.isRequired
}