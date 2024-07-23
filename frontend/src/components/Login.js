import React from 'react';
import { useState } from 'react';
import '../assets/css/Login.css'; // Make sure to import your CSS file

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError(""); // Clear error message on input change
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Email validation
        if (!formData.email) {
            setError("Email is required.");
            return;
        }

        // Password validation
        const password = formData.password;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!password) {
            setError("Password is required.");
            return;
        } else if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters long and include at least one number and one special character.");
            return;
        }

        // If validation passes, proceed with form submission
        console.log(formData);
        setError(""); // Clear error message on successful submission
    };

    return (
        <div className="container">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} required />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange} required/>
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Login;
