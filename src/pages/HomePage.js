import React, { useEffect, useState } from 'react';
import PhotoGrid from '../components/PhotoGrid';
import axios from 'axios';
import {
  FaSearch,
  FaTree,
  FaDesktop,
  FaBuilding,
  FaUsers,
  FaPaw,
  FaCamera,
  FaFutbol,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'; // Modern icons
import './styles/HomePage.css';

const HomePage = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  const categories = [
    { name: 'Nature', icon: <FaTree /> },
    { name: 'Technology', icon: <FaDesktop /> },
    { name: 'Business', icon: <FaBuilding /> },
    { name: 'People', icon: <FaUsers /> },
    { name: 'Animals', icon: <FaPaw /> },
    { name: 'Architecture', icon: <FaCamera /> },
    { name: 'Sports', icon: <FaFutbol /> },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/trending?category=${category}`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [category]);

  const handleSearch = () => {
    if (searchTerm.trim() === '') return;
    setLoading(true);
    axios
      .get(`/api/search?query=${searchTerm}`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Explore Stunning Stock Photos</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for amazing photos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </header>

      {/* Categories Section */}
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

      {/* Photo Gallery Section */}
      <section className="photo-gallery">
        <h2>Trending Images</h2>
        {loading ? (
          <p>Loading trending images...</p>
        ) : photos.length > 0 ? (
          <PhotoGrid photos={photos} />
        ) : (
          <p>No trending images available. Please try again later.</p>
        )}
      </section>

      {/* WhatsApp Chatbot Button */}
<a
  href="https://wa.me/+263785705057" // Replace with your WhatsApp number
  className="whatsapp-chatbot"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="whatsapp-icon-container">
    <FaWhatsapp className="whatsapp-icon" />
    <span className="notification-badge">1</span>
  </div>
</a>

{/* Greeting Message */}
<div className="chatbot-greeting">
  <p>Hi there! Need help? Chat with us!</p>
</div>


      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/sell">Selling</a>
              </li>
              <li>
                <a href="/contact">About</a>
              </li>
              <li>
                <a href="/terms">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer-about">
            <h3>About Us</h3>
            <p>
              StockPhotoApp is a platform for high-quality stock images. We aim to provide photographers and businesses
              with a marketplace for stunning visuals.
            </p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram /> Instagram
                </a>
              </li>
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
