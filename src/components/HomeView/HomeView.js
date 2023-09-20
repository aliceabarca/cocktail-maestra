import './HomeView.css'
import Header from '../Header/Header';
import SearchDrink from '../SearchDrink/SearchDrink';
import { useState } from 'react';

const HomeView = ({ setSearch }) => {
  return (
    <div className='home-view'>
      <Header />
      <SearchDrink setSearch={setSearch}/>
    </div>
  ) 
}

export default HomeView;