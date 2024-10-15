import React from 'react';
import Cards from '../components/Cards';
import data from '../data';
import Navbar from '../components/Navbar';

export default function Fashion() {
  const fashionData = data.find(category => category.category === "Fashion");

  return (
    <div>
      <Navbar />
      <Cards ProductsData={[fashionData]} />
     
    </div>
  );
}
