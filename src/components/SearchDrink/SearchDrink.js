import './SearchDrink.css'

const SearchDrink = ({ setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <section className='search'>
      <label form='search-section'></label>
      <input
        id='search'
        className=''
        type="text"
        placeholder='Search..'
        onChange={handleSearch}
      />
    </section>
  )
}

export default SearchDrink;