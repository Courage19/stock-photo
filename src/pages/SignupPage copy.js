import React, { useState } from 'react';
import './styles/LoginSignup.css';

const SignupPage = () => {
  const [role, setRole] = useState('client');

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="photographer">Photographer</option>
            <option value="client">Client</option>
          </select>
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Create a password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
