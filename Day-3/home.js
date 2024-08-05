import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import supermarketImage from '../assets/home7.jpg'; 
import anotherImage from '../assets/home8j.jpg'; 
import extraImage1 from '../assets/p-5.jpg';
import extraImage2 from '../assets/p-3.jpg';
import extraImage3 from '../assets/p-7.jpg';
import './home.css';
import { Link } from 'react-router-dom';
import MySmartBasket from './MySmartBasket'; 
import Footer from './footer';

const Home = ({ addToCart }) => {
  const images = [supermarketImage, anotherImage, extraImage1, extraImage2, extraImage3]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => {
        
        console.log(response.data);
      })
      .catch(error => {
        
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <img src={images[currentImageIndex]} alt={`Current slide ${currentImageIndex + 1}`} />
      <div className="explore-btn">
        <Link to="/Category">Explore More... Shop Now</Link>
      </div>
      <MySmartBasket addToCart={addToCart} />
      <Footer/>
    </div>
  );
};

export default Home;
