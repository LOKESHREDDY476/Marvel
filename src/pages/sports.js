import React from 'react';
import Cards from '../components/Cards';
import data from '../data';
import Navbar from '../components/Navbar';

export default function Sports() {
  const sportsData = data.find(category => category.category === "Sports");

  return (
    <div>
      <Navbar />
      <Cards ProductsData={[sportsData]} />
    </div>
  );
}
