import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginform.css';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async(e) => {
    const { username, password } = formData;

    if (!username || !password) {
      setError('Please enter both username and password');
      if (!username) {
        usernameInputRef.current.focus();
      } else {
        passwordInputRef.current.focus();
      }
      return;
    }

    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/authenticate",
        {
          email: formData.username, 
          password: formData.password,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      const role = response.data.role;

      if (role === "ADMIN") {
        navigate("/admin");
      } else {
        alert("Login successful");
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const handleForgotPassword = () => {
    alert('An email has been sent to your registered email ID.');
  };

  return (
    <div className="login-container">
      <center>
        <h2>LOGIN</h2>
      </center>
      <div className={`input-group ${error && !formData.username ? 'highlight' : ''}`}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          ref={usernameInputRef}
        />
      </div>
      <div className={`input-group ${error && !formData.password ? 'highlight' : ''}`}>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          ref={passwordInputRef}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <p className='divq'>
        <div className='fp' onClick={handleForgotPassword}>
          Forgot Password?
        </div>
      </p>
      <center>
        <button className='log1' onClick={handleLogin}>Login</button>
      </center>
      <center>
        <p className='dive'>
          Don't have an account? <Link to="/signup" className='si'>Signup</Link>
        </p>
      </center>
    </div>
  );
};

export default LoginForm;
