import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../../context/CartContext'; // Import CartContext
import './Store.css'; // Optional: Add CSS for styling
import images from '../../assets/images/images';

// function getImage() {
//   return Object.values(images)[Math.floor(Math.random() * Object.values(images).length)];

// }

const Store = () => {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(''); // State to handle errors
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
  
    fetchProducts();
  }, []);

  // Handle adding a product to the cart
  const handleAddToCart = async (productId, name, price, quantity = 1) => {
    const userId = localStorage.getItem('userId'); // Ensure userId is stored in localStorage
    if (!userId) {
      alert('Please log in to add items to the cart.');
      return;
    }
  
    try {
      await axios.post('http://localhost:8080/cart/add', {
        userId,
        productId,
        name,
        price,
        quantity,
      });
      alert('Product added to cart!');
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (

    <div className="store-container">
      {/* {console.log(getImage())} */}
      <h1>Store</h1>
      <div className="product-list">
      {products.map((product) => (
  <div key={product._id} className="product-card">
    {/* Use product.image directly */}
    <img src={product.image} alt={product.name} className="product-image" />
    
    <h2 className="product-name">{product.name}</h2>
    <p className="product-description">{product.description}</p>
    <p className="product-price">LKR {product.price}</p>
    
    <button
      className="add-to-cart-btn"
      onClick={() => handleAddToCart(product._id, product.name, product.price)}
    >
      Add to Cart
    </button>
  </div>
))}

      </div>
    </div>
  );
};

export default Store;