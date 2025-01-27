import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './styles/LoginSignup.css';

const LoginPage = () => {
  const [role, setRole] = useState('client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock authentication (you can replace this with real authentication logic)
    if (email && password) {
      // Redirect based on role
      if (role === 'admin') {
        navigate('/admin'); // Redirect to Admin page
      } else if (role === 'photographer') {
        navigate('/photographer'); // Redirect to Photographer page
      } else {
        navigate('/client'); // Redirect to Client page
      }
    } else {
      alert('Please enter valid email and password!');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
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
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
