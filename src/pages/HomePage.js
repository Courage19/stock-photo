import React, { useEffect, useState } from 'react';
import PhotoGrid from '../components/PhotoGrid';
import axios from 'axios';

const HomePage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('/api/trending') // panoiswa API
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Trending Images</h2>
      <PhotoGrid photos={photos} />
    </div>
  );
};

export default HomePage;
