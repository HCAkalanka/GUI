import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css'

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchCart = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setError('User ID not found');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/cart/${userId}`);
      setCart(response.data);
    } catch (error) {
      setError('Error fetching cart');
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (userid, productid) =>  {
    const response = await axios.patch(`http://localhost:8080/cart/${userid}/${productid}/decrement`);
    fetchCart()
  }

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {cart ? (
        <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-items">
        {cart.items.map((item) => (
            item.quantity > 0 && (
              <div key={item.productId} className="cart-item">
                <h3>{item.name}</h3>
                <p>Price: LKR {item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove-btn" onClick={() => removeFromCart(cart.userId, item.productId)}>Remove</button>
              </div>
            )
          ))}
        </div>
      </div>
      
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;