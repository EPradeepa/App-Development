import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav1">
          <Link to="/home" className="home">
            <span className="trailblazer">Shopify</span>
            <span className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/category" className="nav-link">Category</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/loginform" className="nav-link">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link">My Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
