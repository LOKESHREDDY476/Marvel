import React from 'react';
import Cards from '../components/Cards'; 
import data from '../data'; 
import Navbar from '../components/Navbar';

export default function Electronics() {
  const electronicsData = data.find(category => category.category === "Electronics");

  return (
    <div>
      <Navbar />
      <Cards ProductsData={[electronicsData]} />  
    

    </div>
  );
}
