import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You can use axios for easier HTTP requests
import './ManageUsers.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users from the backend when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/users'); // Replace with your actual API endpoint
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load users.');
      setLoading(false);
    }
  };

  const handleAddUser = async () => {
    if (newUser) {
      setLoading(true);
      try {
        const response = await axios.post('/api/users', { name: newUser }); // Add the new user via POST request
        setUsers([...users, response.data]); // Append the newly added user to the list
        setNewUser('');
        setLoading(false);
      } catch (err) {
        setError('Failed to add user.');
        setLoading(false);
      }
    }
  };

  const handleRemoveUser = async (user) => {
    setLoading(true);
    try {
      await axios.delete(`/api/users/${user}`); // Remove user via DELETE request
      setUsers(users.filter(u => u !== user)); // Remove the user from the local state
      setLoading(false);
    } catch (err) {
      setError('Failed to remove user.');
      setLoading(false);
    }
  };

  return (
    <div className="manage-users-container">
      <h1 className="title">Manage Users</h1>
      <p className="description">
        Easily add, edit, or remove users from the system. Manage your user base with ease!
      </p>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Add User Section */}
      <div className="add-user">
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter new user name"
          className="user-input"
          disabled={loading} // Disable input while loading
        />
        <button onClick={handleAddUser} className="add-btn" disabled={loading}>
          {loading ? 'Adding...' : 'Add User'}
        </button>
      </div>

      {/* User List Section */}
      <div className="user-list">
        <h2 className="user-list-title">Current Users</h2>
        {loading ? (
          <p>Loading users...</p> // Loading indicator while fetching users
        ) : (
          <ul className="user-list-ul">
            {users.map((user, index) => (
              <li key={index} className="user-item">
                {user}
                <button
                  onClick={() => handleRemoveUser(user)}
                  className="remove-btn"
                  disabled={loading} // Disable remove button while loading
                >
                  {loading ? 'Removing...' : 'Remove'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
