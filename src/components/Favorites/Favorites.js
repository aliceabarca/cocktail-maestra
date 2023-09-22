import './Favorites.css'
import PropTypes from 'prop-types'
const Favorites = ({name, image, deleteFavorite, id}) => {

  return (
    <div className='favorites'>
      <h3>{name}</h3>
      <button onClick={() => deleteFavorite(id)}>🗑️</button>
    </div>
  )
}

export default Favorites;

Favorites.propTypes = {
  name: PropTypes.string.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}
