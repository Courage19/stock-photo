import React, { useEffect, useState } from 'react';
import { FaImages, FaCreditCard, FaDownload, FaHeart, FaUser, FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles/ClientPage.css';

const ClientPage = () => {
  const [photographers, setPhotographers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch photographers from the backend
  useEffect(() => {
    const fetchPhotographers = async () => {
      try {
        const response = await fetch('https://api.example.com/photographers'); // Replace with your backend API URL
        const data = await response.json();
        setPhotographers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching photographers:', error);
        setLoading(false);
      }
    };

    fetchPhotographers();
  }, []);

  return (
    <div className="client-dashboard">
      {/* Fixed Drawer */}
      <aside className="fixed-drawer">
    
        <nav className="drawer-nav">
          <Link to="/browse"><FaImages /> Browse Photos</Link>
          <Link to="/subscription"><FaCreditCard /> Manage Subscription</Link>
          <Link to="/downloads"><FaDownload /> Download History</Link>
          <Link to="/favorites"><FaHeart /> Favorites</Link>
          <Link to="/profile"><FaUser /> Profile</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="client-main">
        {/* Header Section */}
        <header className="client-header">
          <h2>Welcome to StockPhotoApp!</h2>
          <p>Discover stunning images, connect with photographers, and manage your account effortlessly.</p>
        </header>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-cards">
            <div className="action-card">
              <FaImages className="action-icon" />
              <h3>Browse Photos</h3>
              <p>Explore our collection of high-quality stock images curated just for you.</p>
              <Link to="/browse">
                <button>Explore Now</button>
              </Link>
            </div>
            <div className="action-card">
              <FaCreditCard className="action-icon" />
              <h3>Manage Subscription</h3>
              <p>Update your subscription plan or payment details at any time.</p>
              <Link to="/subscription">
                <button>Manage Now</button>
              </Link>
            </div>
            <div className="action-card">
              <FaDownload className="action-icon" />
              <h3>Download History</h3>
              <p>View and re-download previously purchased or licensed images.</p>
              <Link to="/downloads">
                <button>View History</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Photographers Section */}
        <section className="photographers-section">
          <h2>Discover Photographers</h2>
          <p>Find talented photographers and hire them for your projects.</p>

          {loading ? (
            <p>Loading photographers...</p>
          ) : photographers.length > 0 ? (
            <div className="photographer-cards">
              {photographers.map((photographer) => (
                <div key={photographer.id} className="photographer-card">
                  <FaCamera className="photographer-icon" />
                  <h3>{photographer.name}</h3>
                  <p>{photographer.specialization}</p>
                  <div className="photographer-buttons">
                    <Link to={`/photographer/${photographer.id}`}>
                      <button>View Profile</button>
                    </Link>
                    <Link to={`/hire/${photographer.id}`}>
                      <button>Hire Now</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No photographers available at the moment.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default ClientPage;
