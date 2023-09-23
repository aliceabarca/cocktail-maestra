import Favorites from '../Favorites/Favorites'
import PropTypes from 'prop-types'

const FavoriteContainer = ({ favorites, deleteFavorite }) => {
  const favoriteCards = favorites.map(favorite => {

    return (
      <Favorites 
        name={favorite.strDrink}
        image={favorite.strDrinkThumb}
        deleteFavorite={deleteFavorite}
        idDrink={favorite.idDrink}
        key={favorite.idDrink}
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