import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('register-page');
    return () => {
      document.body.classList.remove('register-page');
    };
  }, []);

  const handleSignup = () => {
    if (!username || !password || !confirmPassword) {
      setError('Please enter all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Get existing registered users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Check if the username is already taken
    if (existingUsers.some((user) => user.username === username)) {
      setError('Username is already taken');
      return;
    }

    // Add the new user to the array
    const newUser = { username, password };
    const updatedUsers = [...existingUsers, newUser];

    // Update local storage with the new user
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

    setError('');

    // Navigate to the login page
    navigate('/Login');
  };

  return (
    <div className="signup-container">
      <h2 className='simp'>REGISTER</h2>
      <div className="input-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button className='bt1' onClick={handleSignup}>SignUp</button>
      <p className='toy'>
        Already a member? <Link to="/loginform">LOGIN</Link>
      </p>
    </div>
  );
};

export default SignUp;