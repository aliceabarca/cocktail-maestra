import './App.css';
import { fetchDrinks } from './api';
import { useState } from 'react';
import HomeView from './components/HomeView/HomeView';
import SingleDrink from './components/SingleDrink/SingleDrink';
import { Routes, Route } from 'react-router';
import FavoriteContainer from './components/FavoriteContainer/FavoriteContainer';
import Header from './components/Header/Header';

const App = () => {
  const [drinks, setDrinks] = useState([])
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('')
  const [favorites, setFavorites] = useState([])

  const addFavoriteDrinks = (newFavorite) => {
    setFavorites([...favorites, newFavorite])
  }

  const deleteFavorite = (id) => {
    const filterDrinks = favorites.filter(favorite => {
      return favorite.id !== id
    })
    setFavorites(filterDrinks)
  }


  const fetchAlcohol = (search) => {
    return fetchDrinks(search)
      .then((data) => {
        setDrinks(data)
        setLoaded(true)
      })
      .catch((error) => {
        setError(`Request failed - ${error.message}`)
      });
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomeView fetchAlcohol={fetchAlcohol} drinks={drinks} addFavoriteDrinks={addFavoriteDrinks}/>} />
        <Route path='drink/:drinkId' element={<SingleDrink addFavoriteDrinks={addFavoriteDrinks} />} />
        <Route path='/favorites' element={<FavoriteContainer favorites={favorites} deleteFavorite={deleteFavorite}/>} />
      </Routes>
    </div>
  );
}

export default App;
