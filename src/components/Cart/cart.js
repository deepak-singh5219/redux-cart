import React from "react";
import './cart.css';

const Cart = () => {
  const quantity = 5;
  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;