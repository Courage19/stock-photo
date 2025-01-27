import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload, FaWallet, FaFolderOpen, FaHome } from 'react-icons/fa';
import './styles/PhotographerPage.css';

const PhotographerPage = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleNavigate = (path) => navigate(path);

  return (
    <div className="photographer-dashboard">
      {/* Fixed Drawer */}
      <aside className="drawer">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => handleNavigate('/')}>
            <FaHome /> Home
          </li>
          <li onClick={() => handleNavigate('/upload-photos')}>
            <FaUpload /> Upload Photos
          </li>
          <li onClick={() => handleNavigate('/view-earnings')}>
            <FaWallet /> View Earnings
          </li>
          <li onClick={() => handleNavigate('/manage-collections')}>
            <FaFolderOpen /> Manage Collections
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header Section */}
        <header className="photographer-header">
          <h1>Welcome, Photographer!</h1>
          <p>
            Showcase your creativity, manage your collections, and monitor your success in one place.
          </p>
        </header>

        {/* Quick Actions Section */}
        <section className="photographer-actions">
          <h2>Quick Actions</h2>
          <div className="action-cards">
            <div className="action-card" onClick={() => handleNavigate('/upload-photos')}>
              <FaUpload className="action-icon" />
              <h3>Upload Photos</h3>
              <p>Share your best work with the world and grow your portfolio.</p>
              <button>Upload Now</button>
            </div>
            <div className="action-card" onClick={() => handleNavigate('/view-earnings')}>
              <FaWallet className="action-icon" />
              <h3>View Earnings</h3>
              <p>Track your sales and monitor your earnings in real time.</p>
              <button>View Earnings</button>
            </div>
            <div className="action-card" onClick={() => handleNavigate('/manage-collections')}>
              <FaFolderOpen className="action-icon" />
              <h3>Manage Collections</h3>
              <p>Organize your content into categories and collections effortlessly.</p>
              <button>Manage Now</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PhotographerPage;
