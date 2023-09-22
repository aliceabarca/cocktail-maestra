import './HomeView.css'
import Header from '../Header/Header';
import SearchDrink from '../SearchDrink/SearchDrink';
import { useState } from 'react';
import DisplayDrinks from '../DisplayDrinks/DisplayDrinks';

const HomeView = ({ setSearch, fetchAlcohol, drinks }) => {

  return (
    <div className='home-view'>
      <Header />
      <SearchDrink setSearch={setSearch} fetchAlcohol={fetchAlcohol}/>
      <DisplayDrinks drinks={drinks} />
    </div>
  ) 
}

export default HomeView;