import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='main'>
      <img
        src="https://www.achieversit.com/assets/images/logo-white.png"
        alt="AIT"
        className="img-fluid logo"
      />
      <ul className='navbar'>
        <li className="nav">
          <Link to="/electronics" className="nav-link">
            Electronics
          </Link>
        </li>
        <li className="nav">
          <Link to="/fashion" className="nav-link">
            Fashion
          </Link>
        </li>
        <li className="nav">
          <Link to="/homeappliances" className="nav-link">
            Home Appliances
          </Link>
        </li>
        <li className="nav">
          <Link to="/books" className="nav-link">
            Books
          </Link>
        </li>
        <li className="nav">
          <Link to="/sports" className="nav-link">
            Sports
          </Link>
        </li>

        {/* Login and Signup Links */}
        <li className="nav">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav">
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}
