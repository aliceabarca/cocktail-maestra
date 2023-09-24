import Favorites from '../Favorites/Favorites'
import PropTypes from 'prop-types'

const FavoriteContainer = ({ favorites, deleteFavorite }) => {
  const favoriteCards = favorites.map(favorite => {
    console.log(favorites)
    return (
      <Favorites 
        key={favorite.idDrink}  
        name={favorite.strDrink}
        image={favorite.strDrinkThumb}
        idDrink={favorite.idDrink}
        deleteFavorite={deleteFavorite}
      />
    )
  })
  
  return (
    <div className="favorite-container">
      {favoriteCards}
    </div>
  )
}

export default FavoriteContainer;

FavoriteContainer.propTypes = {
  deleteFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}