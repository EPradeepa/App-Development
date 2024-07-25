import React, { useState } from 'react';
import '../assets/css/Contact.css'; // Import your CSS file for styling

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic form validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all fields.');
            return;
        }

        // Simulate form submission
        console.log(formData);
        setStatus('Thank you for reaching out! We will get back to you soon.');

        // Clear form
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-us-container">
            <header className="contact-us-header">
                <h1>Contact Us</h1>
                <p>We would love to hear from you!</p>
            </header>
            <section className="contact-us-content">
                <h2>Our Contact Information</h2>
                <p><strong>Address:</strong> 123 Supermarket Lane, Grocery City, GC-600 709</p>
                <p><strong>Phone:</strong>  6752300332</p>
                <p><strong>Email:</strong> support@supermarket.com</p>
                
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    {status && <p className="status-message">{status}</p>}
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default Contact;
