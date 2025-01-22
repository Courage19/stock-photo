import React from 'react';
import PhotoCard from './Photocard';
import './styles/PhotoGrid.css';

const PhotoGrid = ({ photos }) => {
  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;
