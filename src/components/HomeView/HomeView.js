import './HomeView.css'
import Header from '../Header/Header';
import SearchDrink from '../SearchDrink/SearchDrink';
import { useState } from 'react';

const HomeView = ({ setSearch, fetchAlcohol }) => {
  return (
    <div className='home-view'>
      <Header />
      <SearchDrink setSearch={setSearch} fetchAlcohol={fetchAlcohol}/>
    </div>
  ) 
}

export default HomeView;