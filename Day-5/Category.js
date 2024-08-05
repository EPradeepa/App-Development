import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';
import Img1 from '../assets/pi-3.jpg';
import Img2 from '../assets/pi-5.jpg';
import Img3 from '../assets/pi-1.jpg';
import Img4 from '../assets/apple.jpg';
import Img5 from '../assets/orange.jpg';
import Img6 from '../assets/guava.jpg';

const Category = ({ addToCart }) => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Groceries',
      products: [
        {
          id: 1,
          name: 'Cleaning & Washing',
          img: Img1,
          price: 36,
          originalPrice: 62.1,
          discount: 42,
        },
        {
          id: 2,
          name: 'Tea & Coffee',
          img: Img2,
          price: 80,
          originalPrice: 117.81,
          discount: 32,
        },
        {
          id: 3,
          name: 'Rice & Dal',
          img: Img3,
          price: 152,
          originalPrice: 208.22,
          discount: 27,
        },
      ],
    },
    {
      id: 2,
      name: 'Fruits',
      products: [
        {
          id: 4,
          name: 'Apple',
          img: Img4,
          price: 100,
          originalPrice: 150,
          discount: 10,
        },
        {
          id: 5,
          name: 'Orange',
          img: Img5,
          price: 50,
          originalPrice: 70,
          discount: 25,
        },
        {
          id: 6,
          name: 'Guava',
          img: Img6,
          price: 50,
          originalPrice: 70,
          discount: 30,
        },
      ],
    },
  ];

  const [selectedWeights, setSelectedWeights] = useState(
    categories.reduce((acc, category) => {
      category.products.forEach((product) => {
        acc[product.id] = '1kg';
      });
      return acc;
    }, {})
  );

  const handleWeightChange = (productId, weight) => {
    setSelectedWeights({ ...selectedWeights, [productId]: weight });
  };

  const getPrice = (price, weight) => {
    return weight === '500g' ? price / 2 : price;
  };

  const handleAddToCart = (product) => {
    addToCart(product, selectedWeights[product.id]);
    navigate('/cart');
  };

  return (
    <div className="category-page">
      <h2>Categories</h2>
      {categories.map((category) => (
        <div key={category.id} className="category-section">
          <h3>{category.name}</h3>
          <div className="product-list">
            {category.products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="discount-badge">{product.discount}% OFF</div>
                <img src={product.img} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h3>fresho!</h3>
                  <p>{product.name}</p>
                  <select
                    value={selectedWeights[product.id]}
                    onChange={(e) => handleWeightChange(product.id, e.target.value)}
                  >
                    <option value="1kg">1 kg</option>
                    <option value="500g">500 gm</option>
                  </select>
                  <div className="price">
                    <span>₹{getPrice(product.price, selectedWeights[product.id])}</span>
                    <span className="original-price">₹{getPrice(product.originalPrice, selectedWeights[product.id])}</span>
                  </div>
                  <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
