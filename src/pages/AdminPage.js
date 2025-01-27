import React, { useEffect, useState } from 'react';
import { FaUsers, FaFileAlt, FaChartLine, FaCog } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './styles/AdminPage.css';

const AdminPage = () => {
  const [dashboardData, setDashboardData] = useState({
    activeUsers: 0,
    pendingReviews: 0,
    monthlyDownloads: 0,
    settingsStatus: 'Loading...',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Fetch data from the backend
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        const response = await fetch('https://your-backend-api.com/admin-dashboard');
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data.');
        }

        const data = await response.json();
        setDashboardData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="admin-dashboard">
      {/* Drawer */}
      <div className="drawer">
        <h2>Admin Panel</h2>
        <ul className="drawer-menu">
          <li>
            <Link to="/manage-users">
              <FaUsers /> Manage Users
            </Link>
          </li>
          <li>
            <Link to="/review-content">
              <FaFileAlt /> Review Content
            </Link>
          </li>
          <li>
            <Link to="/view-analytics">
              <FaChartLine /> View Analytics
            </Link>
          </li>
          <li>
            <Link to="/platform-settings">
              <FaCog /> Platform Settings
            </Link>
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
          {loading ? (
            <p>Loading dashboard data...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <>
              <div className="stat-card" onClick={() => navigate('/manage-users')}>
                <FaUsers className="stat-icon" />
                <div>
                  <h2>Users</h2>
                  <p>{dashboardData.activeUsers} Active Users</p>
                </div>
              </div>
              <div className="stat-card" onClick={() => navigate('/review-content')}>
                <FaFileAlt className="stat-icon" />
                <div>
                  <h2>Pending Reviews</h2>
                  <p>{dashboardData.pendingReviews} Items</p>
                </div>
              </div>
              <div className="stat-card" onClick={() => navigate('/view-analytics')}>
                <FaChartLine className="stat-icon" />
                <div>
                  <h2>Monthly Downloads</h2>
                  <p>{dashboardData.monthlyDownloads}</p>
                </div>
              </div>
              <div className="stat-card" onClick={() => navigate('/platform-settings')}>
                <FaCog className="stat-icon" />
                <div>
                  <h2>Settings</h2>
                  <p>{dashboardData.settingsStatus}</p>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Quick Actions Section */}
        <section className="dashboard-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button onClick={() => navigate('/manage-users')}>Manage Users</button>
            <button onClick={() => navigate('/review-content')}>Review Content</button>
            <button onClick={() => navigate('/view-analytics')}>View Analytics</button>
            <button onClick={() => navigate('/platform-settings')}>Platform Settings</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
