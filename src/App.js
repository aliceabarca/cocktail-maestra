import './App.css';
import { fetchDrinksById, fetchDrinks } from './api';
import { useState, useEffect } from 'react';
import DisplayDrinks from './components/DisplayDrinks/DisplayDrinks';
import HomeView from './components/HomeView/HomeView';

function App() {
  const [drinks, setDrinks] = useState([])
  const [loaded, setLoaded] = useState(false);


  const fetchAlcohol = (search) => {
    return fetchDrinks(search)
      .then((data) => {
        setDrinks(data)
        setLoaded(true)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      
      <HomeView fetchAlcohol={fetchAlcohol}/>
      {loaded ? <DisplayDrinks drinks={drinks} /> : null}
    </div>
  );
}

export default App;
