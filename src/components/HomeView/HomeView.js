import './HomeView.css'
import Header from '../Header/Header';
import SearchDrink from '../SearchDrink/SearchDrink';
import DisplayDrinks from '../DisplayDrinks/DisplayDrinks';

const HomeView = ({ setSearch, fetchAlcohol, drinks, addFavoriteDrinks }) => {

  return (
    <div className='home-view'>
      {/* <Header /> */}
      <SearchDrink setSearch={setSearch} fetchAlcohol={fetchAlcohol}/>
      <DisplayDrinks drinks={drinks} addFavoriteDrinks={addFavoriteDrinks}/>
    </div>
  ) 
}

export default HomeView;