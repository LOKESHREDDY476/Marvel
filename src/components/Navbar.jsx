import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="container mt-3">
      <div className="row align-items-center">
        {/* 4 Columns for the Logo */}
        <div className="col-md-4">
          <img
            src="https://www.achieversit.com/assets/images/logo-white.png"
            alt="AIT"
            className="img-fluid logo"
          />
        </div>
        <div className="col-md-8">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/electronics" className="nav-link">Electronics</Link>
                </li>
                <li className="nav-item">
                  <Link to="/fashion" className="nav-link">Fashion</Link>
                </li>
                <li className="nav-item">
                  <Link to="/homeappliances" className="nav-link">Home Appliances</Link>
                </li>
                <li className="nav-item">
                  <Link to="/books" className="nav-link">Books</Link>
                </li>
                <li className="nav-item">
                  <Link to="/sports" className="nav-link">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
