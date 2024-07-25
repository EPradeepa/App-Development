import React from 'react';
import '../assets/css/Aboutus.css'; 

function Aboutus() {
    return (
        <div className="about-us-container">
            <header className="about-us-header">
                <h1>About Us</h1>
                <p>Welcome to Supermarket!</p>
            </header>
            <section className="about-us-content">
                <h2>Our Story</h2>
                <p>
                    Founded in [Year], Supermarket has been dedicated to providing high-quality products at affordable prices. 
                    Our journey started with a simple vision: to offer a wide range of groceries and essentials while delivering exceptional customer service.
                </p>
                <h2>Our Mission</h2>
                <p>
                    Our mission is to make shopping a pleasant and enjoyable experience for everyone. We are committed to offering fresh, 
                    local products and maintaining the highest standards of quality and hygiene. 
                    We believe in supporting our community and working with local suppliers to bring you the best products.
                </p>
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Customer First:</strong> We put our customers at the heart of everything we do.</li>
                    <li><strong>Integrity:</strong> We operate with honesty and transparency in all our dealings.</li>
                    <li><strong>Quality:</strong> We are committed to providing the highest quality products and services.</li>
                    <li><strong>Community:</strong> We support and engage with our local community.</li>
                    <li><strong>Sustainability:</strong> We strive to reduce our environmental impact through sustainable practices.</li>
                </ul>
                <h2>Our Team</h2>
                <p>
                    Our team is made up of dedicated professionals who are passionate about what they do. From our friendly store staff to 
                    our knowledgeable managers, we work together to ensure that every visit to Supermarket is a great experience.
                </p>
            </section>
            <footer className="about-us-footer">
                <p>Thank you for choosing Supermarket. We look forward to serving you!</p>
            </footer>
        </div>
    );
}

export default Aboutus;
