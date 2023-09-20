import './SearchDrink.css'
import { useState } from 'react'
import { fetchDrinks } from '../../api'

const SearchDrink = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const fetchAlcohol = () => {
    fetchDrinks(search)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className='search'>
      <select className='button-src' value={search} onChange={handleSearch}>
        <option value={null}>Taste Something New...</option>
        <option value="Whiskey">Whiskey</option>
        <option value="Brandy">Brandy</option>
        <option value="Rum">Rum</option>
        <option value="Vodka">Vodka</option>
        <option value="Absinthe">Absinthe</option>
        <option value="Tequila">Tequila</option>
        <option value="Mezcal">Mezcal</option>
        <option value="Gin">Gin</option>
        <option value="Everclear">Everclear</option>
        <option value="Beer">Beer</option>
        <option value="Wine">Wine</option>
      </select>
      <button onClick={fetchAlcohol}>Fetch Drinks</button>
    </section>
  )
}

export default SearchDrink;