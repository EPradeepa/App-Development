// import React from 'react';
// import './Cart.css';
// import { useNavigate } from 'react-router-dom';

// const Cart = ({ cartItems, setCartItems }) => {
//   const navigate = useNavigate();
  
    
  

//   const handlePayment = () => {
//     navigate('/Payment'); // Adjust the route as necessary
//   };

//   return (
//     <div className="cart-page">
//       <h2>Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="cart-items">
//           {cartItems.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img src={item.img} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h3>{item.name}</h3>
//                 <p>Weight: {item.weight}</p>
//                 <p>Price: ₹{item.price}</p>
//                 {/* <button className="remove-button" onClick={() => handleRemoveItem(index)}>Remove</button> */}
//               </div>
//             </div>
//           ))}
//           <button className="payment-button" onClick={handlePayment}>Proceed to Payment</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handlePayment = () => {
    navigate('/Payment'); // Adjust the route as necessary
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Weight: {item.weight}</p>
                <p>Price: ₹{item.price}</p>
                <button className="remove-button" onClick={() => handleRemoveItem(index)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="payment-button" onClick={handlePayment}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
