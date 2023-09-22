import './Header.css'
import cocktail from '../../images/cocktail.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-section'>
        <img className='cocktail-img' src={cocktail} alt='cocktail image' />
      </div>
      <div className='title'>
        <h1>COCKTAIL MAESTRA</h1>
        <NavLink to={`/`}>
          <button>CASA</button>
        </NavLink>
        <NavLink to={`/favorites`}>
          <button>SAVED DRINKS</button>
        </NavLink>
        <hr />
      </div>
    </header>
  )
}

export default Header;