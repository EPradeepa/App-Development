import React, { useState } from 'react';
import '../assets/css/Signup.css'; // Make sure to import your CSS file
import { Link } from 'react-router-dom';


function Signup() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        userRole: "user",
        password: "",
        confirmPassword: "",
        acceptedTerms: false,
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        setError(""); // Clear error message on input change
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simple validation checks
        if (!formData.firstName) {
            setError("First name is required.");
            return;
        }

        if (!formData.lastName) {
            setError("Last name is required.");
            return;
        }

        if (!formData.email) {
            setError("Email is required.");
            return;
        }

        if (!formData.phoneNumber) {
            setError("Phone number is required.");
            return;
        }

        const password = formData.password;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!password) {
            setError("Password is required.");
            return;
        } else if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters long and include at least one number and one special character.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!formData.acceptedTerms) {
            setError("You must accept the terms and conditions.");
            return;
        }

        // If validation passes, proceed with form submission
        console.log(formData);
        setError(""); // Clear error message on successful submission
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            userRole: "user",
            password: "",
            confirmPassword: "",
            acceptedTerms: false,
        });
        setError(""); // Clear error message on reset
    };

    return (
        <div className="container">
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <label>Last Name</label>
                <input
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label>Phone Number</label>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
                <label>User Role</label>
                <select
                    name="userRole"
                    value={formData.userRole}
                    onChange={handleChange}
                    required
                >
                    <option value="user">Customer</option>
                    <option value="admin">Admin</option>
                </select>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <label>Confirm Password</label>
                <input
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        name="acceptedTerms"
                        checked={formData.acceptedTerms}
                        onChange={handleChange}
                        required
                    />
                    I accept the terms and conditions
                </label>
                <button type="submit">Sign Up</button>
                
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <p>Already have an account
            <Link to="/Login">Login</Link> 
            </p>
        </div>
    );
}

export default Signup;