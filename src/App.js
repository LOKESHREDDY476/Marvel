import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { Signup } from './components/Signup';
import Electronics from './pages/electronics';
import Fashion from './pages/fashion';
import HomeAppliances from './pages/homeappliances';
import Books from './pages/books';
import Sports from './pages/sports';

function App() {
  return (
    <>


      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/homeappliances" element={<HomeAppliances />} />
        <Route path="/books" element={<Books />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>


    </>
  );
}

export default App;









