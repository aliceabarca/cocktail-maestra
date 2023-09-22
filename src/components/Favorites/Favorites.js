import './Favorites.css'

const Favorites = ({name, image, deleteFavorite, id}) => {

  return (
    <div className='favorites'>
      <h3>{name}</h3>
      <button onClick={() => deleteFavorite(id)}>🗑️</button>
    </div>
  )
}

export default Favorites;