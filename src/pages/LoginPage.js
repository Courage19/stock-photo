import React, { useState } from 'react';
import './styles/LoginSignup.css';

const LoginPage = () => {
  const [role, setRole] = useState('client');

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
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
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
