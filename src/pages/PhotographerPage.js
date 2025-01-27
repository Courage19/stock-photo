import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaUpload, FaWallet, FaFolderOpen } from 'react-icons/fa';
import './styles/PhotographerPage.css';

const PhotographerPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handlers for navigation
  const handleUpload = () => navigate('/upload-photos');
  const handleEarnings = () => navigate('/view-earnings');
  const handleCollections = () => navigate('/manage-collections');

  return (
    <div className="photographer-dashboard">
      {/* Header Section */}
      <header className="photographer-header">
        <h1>Welcome!</h1>
        <p>
          Showcase your talent, upload stunning content, and monitor your success. Empower your creative journey with us!
        </p>
      </header>

      {/* Quick Actions Section */}
      <section className="photographer-actions">
        <h2>Quick Actions</h2>
        <div className="action-cards">
          <div className="action-card">
            <FaUpload className="action-icon" />
            <h3>Upload Photos</h3>
            <p>Share your best work with the world and build your portfolio.</p>
            <button onClick={handleUpload}>Upload Now</button>
          </div>
          <div className="action-card">
            <FaWallet className="action-icon" />
            <h3>View Earnings</h3>
            <p>Track your sales and earnings in real-time.</p>
            <button onClick={handleEarnings}>View Earnings</button>
          </div>
          <div className="action-card">
            <FaFolderOpen className="action-icon" />
            <h3>Manage Collections</h3>
            <p>Organize your photos into categories and collections.</p>
            <button onClick={handleCollections}>Manage Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotographerPage;
