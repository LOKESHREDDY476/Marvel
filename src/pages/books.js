import React from 'react';
import Cards from '../components/Cards';
import data from '../data';
import Navbar from '../components/Navbar';

export default function Books() {
  const booksData = data.find(category => category.category === "Books");

  return (
    <div>
      <Navbar />
      <Cards ProductsData={[booksData]} />
    

    </div>
  );
}
