import React, { useState } from 'react';
import './styles/LoginSignup.css';

const SignupPage = () => {
  const [role, setRole] = useState('client');

  // Role descriptions
  const roleDescriptions = {
    photographer: 'Join as a Photographer to showcase your portfolio and connect with potential clients.',
    client: 'Sign up as a Client to explore stunning photos and hire talented photographers.',
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Join Us Today!</h2>
        <p className="subheading">Create an account and explore endless possibilities</p>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="role">Choose Your Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="role-select"
            >
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
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="input-field"
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="login-prompt">
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
