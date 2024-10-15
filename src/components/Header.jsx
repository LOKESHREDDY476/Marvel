import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import data from '../data';
import './Header.css';
import Login from './Login';
import { Signup } from './Signup';


function Header() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      {/* Login and Signup Sections */}
      <div className="home mt-5">
      <Login />
      <Signup />
      </div>
      
      <Cards ProductsData={data} />

    </div>
  );
}

export default Header;
