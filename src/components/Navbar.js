import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCamera, FaDollarSign } from 'react-icons/fa'; // Removed unused FaSearch
import './styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === '/';

  // Render the navbar only on the home page
  if (!isHomePage) {
    return null;
  }

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
