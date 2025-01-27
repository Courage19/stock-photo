import React from 'react';
import { FaImages, FaCreditCard, FaDownload, FaHeart, FaUser } from 'react-icons/fa';
import './styles/ClientPage.css';

const ClientPage = () => {
  return (
    <div className="client-dashboard">
      {/* Header Section */}
      <header className="client-header">
        <p>Discover stunning images, manage your account, and access your downloads with ease.</p>
      </header>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-cards">
          <div className="action-card">
            <FaImages className="action-icon" />
            <h3>Browse Photos</h3>
            <p>Explore our collection of high-quality stock images curated just for you.</p>
            <button>Explore Now</button>
          </div>
          <div className="action-card">
            <FaCreditCard className="action-icon" />
            <h3>Manage Subscription</h3>
            <p>Update your subscription plan or payment details at any time.</p>
            <button>Manage Now</button>
          </div>
          <div className="action-card">
            <FaDownload className="action-icon" />
            <h3>Download History</h3>
            <p>View and re-download previously purchased or licensed images.</p>
            <button>View History</button>
          </div>
        </div>
      </section>

      {/* Favorites Section */}
      <section className="favorites-section">
        <h2>Your Favorites</h2>
        <p>Access your favorite collections and save more for later.</p>
        <button><FaHeart /> View Favorites</button>
      </section>

      {/* Account Section */}
      <section className="account-section">
        <h2>Manage Your Account</h2>
        <div className="account-options">
          <div className="account-card">
            <FaUser className="account-icon" />
            <h3>Profile Settings</h3>
            <p>Update your personal information and preferences.</p>
            <button>Edit Profile</button>
          </div>
          <div className="account-card">
            <FaCreditCard className="account-icon" />
            <h3>Billing & Payments</h3>
            <p>View your billing history and payment methods.</p>
            <button>Manage Billing</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientPage;
