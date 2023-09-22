import './SearchDrink.css'
import { useState } from 'react'

const SearchDrink = ({ fetchAlcohol }) => {
  const [search, setSearch] = useState(null)
  
  return (
    <section className='search'>
      <select className='button-src' onChange={event => setSearch(event.target.value)}>
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
      <button className='search-btn' onClick={() => fetchAlcohol(search)}>🔍</button>
    </section>
  )
}

export default SearchDrink;