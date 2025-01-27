import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LoginSignup.css';

const LoginPage = () => {
  const [role, setRole] = useState('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Role descriptions
  const roleDescriptions = {
    admin: 'As an Admin, you can manage users, view analytics, and oversee the platform.',
    photographer: 'As a Photographer, you can upload, manage, and showcase your creative work.',
    client: 'As a Client, you can browse and purchase stunning photos or hire photographers.',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'photographer') {
        navigate('/photographer');
      } else {
        navigate('/client');
      }
    } else {
      alert('Please enter a valid email and password!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p className="subheading">Sign in to access your account</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="role">Choose Your Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="role-select"
            >
              <option value="admin">Admin</option>
              <option value="photographer">Photographer</option>
              <option value="client">Client</option>
            </select>
            <p className="role-description">{roleDescriptions[role]}</p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-prompt">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
