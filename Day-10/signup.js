import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isFormVisible, setFormVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('register-page');
    return () => {
      document.body.classList.remove('register-page');
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};

    if (!formData.username) {
      errors.username = 'Username is required';
    }

    if (!formData.email.includes('@')) {
      errors.email = 'Invalid email address';
    }

    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post("http://localhost:8080/users", {
        name: formData.username,
        email: formData.email,
        password: formData.password,
        roles: "USER",
      });

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage('Registration successful');
        setTimeout(() => {
          navigate('/loginform');
        }, 2000);
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('There was an error creating the user!', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="signup-container">
      <div className={`register-container ${isFormVisible ? '' : 'hidden'}`}>
        <div className="close-icon" onClick={() => setFormVisible(false)}>
          <i className="fas fa-times"></i> 
         </div>
        <h2>REGISTER</h2>
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit">SignUp</button>
          <p>Already registered? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
