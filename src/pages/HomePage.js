import React, { useEffect, useState } from 'react';
import PhotoGrid from '../components/PhotoGrid';
import axios from 'axios';
import { FaSearch, FaTree, FaDesktop, FaBuilding, FaUsers, FaPaw, FaCamera, FaFutbol } from 'react-icons/fa'; // Add icons
import './styles/HomePage.css';

const HomePage = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(false); // Add loading state
  const [categories, setCategories] = useState([
    { name: 'Nature', icon: <FaTree /> },
    { name: 'Technology', icon: <FaDesktop /> },
    { name: 'Business', icon: <FaBuilding /> },
    { name: 'People', icon: <FaUsers /> },
    { name: 'Animals', icon: <FaPaw /> },
    { name: 'Architecture', icon: <FaCamera /> },
    { name: 'Sports', icon: <FaFutbol /> }
  ]);

  useEffect(() => {
    setLoading(true); // Start loading
    axios.get(`/api/trending?category=${category}`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false)); // Stop loading
  }, [category]);

  const handleSearch = () => {
    setLoading(true); // Start loading
    axios.get(`/api/search?query=${searchTerm}`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false)); // Stop loading
  };

  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Explore Stunning Stock Photos</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search photos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </header>

      <section className="categories">
        <h2>Browse Categories</h2>
        <div className="category-list">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`category-button ${category === cat.name ? 'active' : ''}`}
              onClick={() => setCategory(cat.name)}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      <section className="photo-gallery">
        <h2>Trending Images</h2>
        {loading ? (
          <p>Loading trending images...</p> // Placeholder for loading state
        ) : photos.length > 0 ? (
          <PhotoGrid photos={photos} /> // Display photos when available
        ) : (
          <p>No trending images available. Please try again later.</p> // Placeholder for no images
        )}
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-about">
            <h3>About Us</h3>
            <p>StockPhotoApp is a platform for high-quality stock images. We aim to provide photographers and businesses with a marketplace for stunning visuals.</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaTree /> Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaDesktop /> Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaCamera /> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 StockPhotoApp. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
