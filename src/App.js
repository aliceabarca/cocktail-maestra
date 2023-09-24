import './App.css';
import { fetchDrinks } from './api';
import { useState } from 'react';
import HomeView from './components/HomeView/HomeView';
import SingleDrink from './components/SingleDrink/SingleDrink';
import { Routes, Route,  } from 'react-router';
import FavoriteContainer from './components/FavoriteContainer/FavoriteContainer';
import Header from './components/Header/Header';
import Error from './components/Error/Error';

const App = () => {
  const [drinks, setDrinks] = useState({})
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('')
  const [favorites, setFavorites] = useState([])
  const [selectedDrink, setSelectedDrink] = useState({});

  const deleteFavorite = (idDrink) => {
    const filterDrinks = favorites.filter(favorite => favorite.idDrink !== idDrink)
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
        <Route path='/' element={<HomeView fetchAlcohol={fetchAlcohol} drinks={drinks} />} />
        <Route path='/drink/:drinkId' element={<SingleDrink setFavorites={setFavorites} favorites={favorites} setSelectedDrink={setSelectedDrink} selectedDrink={selectedDrink} setError={setError}/>} />
        <Route path='/favorites' element={<FavoriteContainer favorites={favorites} deleteFavorite={deleteFavorite} selectedDrink={selectedDrink}/>} />
        <Route path='*' element={<Error error={error}/>}/>
      </Routes>
      {error && <Error error={error} />}x
    </div>
  );
}

export default App;
