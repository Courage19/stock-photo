import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCamera, FaDollarSign, FaSearch } from 'react-icons/fa';
import './styles/Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
      <motion.nav
        className="navbar"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">
          <h1>StockPhotoApp</h1>
        </div>
      <ul className="nav-links">
        <li><Link to="/explore"><FaSearch /> Explore</Link></li>
        <li><Link to="/pricing"><FaDollarSign /> Pricing</Link></li>
        <li><Link to="/sell"><FaCamera /> Sell Content</Link></li>
        <li><Link to="/login"><FaUser /> Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
