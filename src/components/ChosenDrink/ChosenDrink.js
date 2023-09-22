import { Link } from 'react-router-dom';
import './ChosenDrink.css'

const ChosenDrink = (props) => {

  return (
    <div className='chosen-drink'>
      <img src={props.strDrinkThumb} alt={`picture of drink ${props.strDrink}`} className='drink-name'></img>
      <Link to={`${props.drinkId}`}></Link>
    </div>
  )
}

export default ChosenDrink;