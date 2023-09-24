import './Favorites.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Favorites = ({ name, image, deleteFavorite, idDrink }) => {

  return (
      <div className='favorites'>
        <h3>{name}</h3>
        <img className='favorite-image-sec' src={image} alt={name}></img>
        <Link to={`/drink/${idDrink}`} className='view-details-link'>View Details</Link>
        <button className='delete-button' onClick={() => deleteFavorite(idDrink)}>
          DELETE? 🗑️
        </button>
      </div>
  );
};

export default Favorites;

Favorites.propTypes = {
  name: PropTypes.string.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  idDrink: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
