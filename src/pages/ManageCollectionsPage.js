import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';
import './styles/ManageCollectionsPage.css';

const ManageCollectionsPage = () => {
  const [collections, setCollections] = useState([
    { name: 'Nature', photos: 120 },
    { name: 'Cityscapes', photos: 85 },
    { name: 'Portraits', photos: 60 },
  ]);

  const handleAddCollection = () => {
    const newCollection = { name: `Collection ${collections.length + 1}`, photos: 0 };
    setCollections([...collections, newCollection]);
  };

  const handleEditCollection = (index) => {
    const updatedName = prompt('Enter new name for the collection:', collections[index].name);
    if (updatedName) {
      const updatedCollections = [...collections];
      updatedCollections[index].name = updatedName;
      setCollections(updatedCollections);
    }
  };

  const handleDeleteCollection = (index) => {
    if (window.confirm('Are you sure you want to delete this collection?')) {
      const updatedCollections = collections.filter((_, i) => i !== index);
      setCollections(updatedCollections);
    }
  };

  return (
    <div className="collections-container">
      <h1>Manage Your Collections</h1>
      <button className="add-collection-btn" onClick={handleAddCollection}>
        <FaPlus /> Add New Collection
      </button>
      <div className="collections-list">
        {collections.map((collection, index) => (
          <div key={index} className="collection-card">
            <h3>{collection.name}</h3>
            <p>{collection.photos} Photos</p>
            <div className="action-buttons">
              <button className="edit-btn" onClick={() => handleEditCollection(index)}>
                <FaEdit /> Edit
              </button>
              <button className="delete-btn" onClick={() => handleDeleteCollection(index)}>
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCollectionsPage;
