import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCamera, FaDollarSign, FaSearch } from 'react-icons/fa'; // Added FaHome icon
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <Link to="/">Stock<span>Photo</span>App</Link>
        </h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
    
        <li>
          <Link to="/pricing">
            <FaDollarSign /> Pricing
          </Link>
        </li>
        <li>
          <Link to="/sell">
            <FaCamera /> Sell Content
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaUser /> Login
          </Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
