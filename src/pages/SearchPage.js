import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import PhotoGrid from '../components/PhotoGrid';
import axios from 'axios';

const SearchPage = () => {
  const [photos, setPhotos] = useState([]);

  const handleSearch = (query) => {
    axios.get(`/api/search?q=${query}`) // Replace with actual API
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Search Images</h2>
      <SearchBar onSearch={handleSearch} />
      <PhotoGrid photos={photos} />
    </div>
  );
};

export default SearchPage;
