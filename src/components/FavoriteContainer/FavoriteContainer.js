import Favorites from '../Favorites/Favorites'
import PropTypes from 'prop-types'

const FavoriteContainer = ({favorites, deleteFavorite}) => {

  const favoriteCards = favorites.map(favorite => {
    return (
      <Favorites 
        name={favorite.strDrink}
        image={favorite.strDrinkThumb}
        deleteFavorite={deleteFavorite}
        id={favorite.id}
        key={favorite.id}
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
  favorites: PropTypes.array.isRequired,
  deleteFavorite: PropTypes.func.isRequired
}