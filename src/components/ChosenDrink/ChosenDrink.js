import { Link } from 'react-router-dom';
import './ChosenDrink.css'
import PropTypes from'prop-types'

const ChosenDrink = (props) => {

  return (
    <div className='chosen-drink'>
      <img src={props.strDrinkThumb} alt={`picture of drink ${props.strDrink}`} className='drink-name'></img>
      <Link to={`${props.drinkId}`}></Link>
    </div>
  )
}

export default ChosenDrink;

ChosenDrink.propTypes = {
  strDrinkThumb: PropTypes.string.isRequired,
  strDrink: PropTypes.string.isRequired,
  drinkId: PropTypes.number.isRequired
}