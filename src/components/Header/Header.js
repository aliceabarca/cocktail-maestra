import './Header.css'
import cocktail from '../../images/cocktail.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-section'>
        <img className='cocktail-img' src={cocktail} alt='cocktail image' />
      </div>
      <div className='title'>
        <h1>Cocktail Maestra</h1>
      </div>
    </header>
  )
}

export default Header;