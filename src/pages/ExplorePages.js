import React, { useEffect, useState } from 'react';
import PhotoGrid from '../components/PhotoGrid';
import axios from 'axios';
import './styles/ExplorePage.css';

const ExplorePage = () => {
  const [photos, setPhotos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories and trending photos
    setLoading(true);
    axios
      .get('/api/categories') // Replace with the actual categories API
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));

    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    setLoading(true);
    axios
      .get(`/api/explore?category=${selectedCategory}&search=${searchTerm}`) // Replace with actual API
      .then((response) => setPhotos(response.data))
      .catch((error) => setError('Failed to fetch photos. Please try again.'))
      .finally(() => setLoading(false));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    fetchPhotos();
  };

  const handleSearch = () => {
    fetchPhotos();
  };

  return (
    <div className="explore-container">
      <h2>Explore Stunning Photos</h2>
      <div className="explore-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search photos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="category-filter">
          <label htmlFor="category-select">Filter by Category:</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading && <p className="loading-spinner">Loading photos...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <PhotoGrid photos={photos} />
      )}

      {!loading && !error && photos.length === 0 && (
        <p className="no-photos-message">No photos found. Try a different search or category.</p>
      )}
    </div>
  );
};

export default ExplorePage;
