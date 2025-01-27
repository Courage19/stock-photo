import React from 'react';
import { FaUsers, FaFileAlt, FaChartLine, FaCog } from 'react-icons/fa';
import './styles/AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-dashboard">
      {/* Drawer */}
      <div className="drawer">
        <h2>Admin Panel</h2>
        <ul className="drawer-menu">
          <li>
            <FaUsers /> Manage Users
          </li>
          <li>
            <FaFileAlt /> Review Content
          </li>
          <li>
            <FaChartLine /> View Analytics
          </li>
          <li>
            <FaCog /> Platform Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Header */}
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </header>

        {/* Overview Section */}
        <section className="dashboard-overview">
          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <div>
              <h2>Users</h2>
              <p>1,234 Active Users</p>
            </div>
          </div>
          <div className="stat-card">
            <FaFileAlt className="stat-icon" />
            <div>
              <h2>Pending Reviews</h2>
              <p>45 Items</p>
            </div>
          </div>
          <div className="stat-card">
            <FaChartLine className="stat-icon" />
            <div>
              <h2>Monthly Downloads</h2>
              <p>12,345</p>
            </div>
          </div>
          <div className="stat-card">
            <FaCog className="stat-icon" />
            <div>
              <h2>Settings</h2>
              <p>Configure platform</p>
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="dashboard-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button>Manage Users</button>
            <button>Review Content</button>
            <button>View Analytics</button>
            <button>Platform Settings</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
