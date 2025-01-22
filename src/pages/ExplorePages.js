import React, { useEffect, useState } from 'react';
import PhotoGrid from '../components/PhotoGrid';
import axios from 'axios';

const ExplorePage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Replace with actual API for fetching categories or trending photos
    axios.get('/api/explore') 
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="explore-container">
      <h2>Explore Stunning Photos</h2>
      <PhotoGrid photos={photos} />
    </div>
  );
};

export default ExplorePage;
