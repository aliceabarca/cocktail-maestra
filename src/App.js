import './App.css';
import { fetchDrinksById, fetchDrinks } from './api';
import { useState, useEffect } from 'react';
import HomeView from './components/HomeView/HomeView';
import SingleDrink from './components/SingleDrink/SingleDrink';
import { Routes, Route } from 'react-router';

function App() {
  const [drinks, setDrinks] = useState([])
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('')


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
      <Routes>
     <Route path='/' element={<HomeView fetchAlcohol={fetchAlcohol} drinks={drinks}/>} />
      <Route path='drink/:drinkId' element={<SingleDrink />} />
      </Routes>
    </div>
  );
}

export default App;
