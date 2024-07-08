// ForgetPassword.js
import React, { useState } from 'react';
import './ForgetPassword.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    if (password === confirmPassword) {
      console.log('Passwords match');
      // Add your form submission logic here, including email handling
      // Redirect to login page after successful submission
      navigate('/login'); // Navigate to your login page path
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <div className="forget-password-container">
      <form onSubmit={handleSubmit} className="forget-password-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
