import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/store');
  };
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Computer & Hardware Store</h1>
        <p>Your one-stop shop for all your computer and hardware needs.</p>
        <button onClick={handleShopNow}>Shop Now</button>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>High-Quality Products</h3>
            <p>We offer the latest and most reliable computer hardware and accessories.</p>
          </div>
          <div className="card">
            <h3>Competitive Prices</h3>
            <p>Get the best value for your money with our affordable pricing.</p>
          </div>
          <div className="card">
            <h3>Expert Support</h3>
            <p>Our team is here to help you with any questions or issues.</p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product">
            <img src="https://th.bing.com/th/id/OIP.SnTVTBDrcydHyxKY_ZiyEwAAAA?rs=1&pid=ImgDetMain" alt="Laptop" />
            <h3>Gaming Laptop</h3>
            <p>LKR32OO00</p>
          </div>
          <div className="product">
            <img src=".\OIP1.jpg" alt="Desktop" />
            <h3>Custom Desktop</h3>
            <p>LKR600000</p>
          </div>
          <div className="product">
            <img src=".\R.jpg" alt="Mouse" />
            <h3>Ergonomic Mouse</h3>
            <p>LKR6000</p>
          </div>
          <div className="product">
            <img src=".\keyboard.jpg" alt="Keyboard" />
            <h3>Mechanical Keyboard</h3>
            <p>LKR8000</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"Great service and amazing products! Highly recommend."</p>
            <h4>- Anura Kumara </h4>
          </div>
          <div className="testimonial">
            <p>"I love my new gaming setup. Thanks for the great advice!"</p>
            <h4>- R Mahinda</h4>
          </div>
          <div className="testimonial">
            <p>"Affordable prices and fast delivery. I'll shop here again."</p>
            <h4>- Ranil Wikramasinhe</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
