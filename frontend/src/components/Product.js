// src/components/Product.js
import React from 'react';
import '../assets/css/Product.css';

const Product = ({ name, price }) => {
  return (
    <div className="product">
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  );
};

export default Product;
