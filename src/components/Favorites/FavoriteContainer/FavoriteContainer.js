import Favorites from "../Favorites";


const FavoriteContainer = ({favorites, deleteFavorite}) => {
  let favoriteCards = favorites.map(favorite => {
    return (
      <Favorites 
        name={favorite.strDrink}
        image={favorite.strDrinkThumb}
        deleteFavorite={deleteFavorite}
        id={favorite.id}
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