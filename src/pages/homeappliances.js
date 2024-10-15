import React from 'react';
import Cards from '../components/Cards';
import data from '../data';
import Navbar from '../components/Navbar';

export default function HomeAppliances() {
  const homeAppliancesData = data.find(category => category.category === "Home Appliances");

  return (
    <div>
      <Navbar />
      <Cards ProductsData={[homeAppliancesData]} />
    </div>
  );
}
