import './App.css';
import { fetchDrinksById } from './api';
import { useState, useEffect } from 'react';
// import SearchDrink from './components/SearchDrink/SearchDrink';
import HomeView from './components/HomeView/HomeView';

function App() {
  const [drinks, setDrink] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchDrinksById()
    .then(data => {
      setDrink(data)
    })
    .catch(error => {
      console.log(`Request failed - ${error.message}`)
      })
  }, [])


  return (
    <div className="App">
      <HomeView />
    </div>
  );
}

export default App;
