import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/BrowsePhotos.css';
import { FaSearch, FaFilter } from 'react-icons/fa';

const BrowsePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([
    'All',
    'Nature',
    'People',
    'Architecture',
    'Animals',
    'Sports',
    'Business',
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch photos based on category
    setLoading(true);
    const categoryParam = selectedCategory !== 'All' ? `category=${selectedCategory}` : '';
    axios
      .get(`/api/photos?${categoryParam}`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`/api/photos?search=${searchTerm}`)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="browse-photos">
      <header className="browse-header">
        <h1>Browse Photos</h1>
        <p>Explore our collection of high-quality stock images curated just for you.</p>
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

      <section className="filter-section">
        <h2>Categories</h2>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="photo-gallery">
        <h2>Photo Gallery</h2>
        {loading ? (
          <p className="loading-message">Loading photos...</p>
        ) : photos.length > 0 ? (
          <div className="photo-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="photo-card">
                <img src={photo.url} alt={photo.title} />
                <div className="photo-info">
                  <h3>{photo.title}</h3>
                  <p>{photo.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-photos-message">No photos found. Try a different search or category.</p>
        )}
      </section>
    </div>
  );
};

export default BrowsePhotos;
