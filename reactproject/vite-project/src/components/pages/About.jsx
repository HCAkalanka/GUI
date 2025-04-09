import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* About Header Section */}
      <section className="about-header">
        <h1>About Us</h1>
        <p>Your trusted source for quality computers and hardware.</p>
      </section>

      {/* About Content Section */}
      <section className="about-content">
        <div className="about-image">
          <img src=".\store.jpg" alt="About Us" />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At <strong>Computer & Hardware Store</strong>, we specialize in providing top-quality products and excellent customer service. 
            Whether you're looking for the latest laptops, custom-built desktops, or reliable hardware components, we’ve got you covered.
          </p>
          <p>
            Our team is passionate about technology and dedicated to helping our customers find the right solutions for their needs.
            From professionals to gaming enthusiasts, we cater to everyone with our wide range of products and expert advice.
          </p>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="about-values">
        <h2>Our Mission & Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>We ensure the highest standards for all our products and services.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We stay ahead of the curve to bring you the latest in technology.</p>
          </div>
          <div className="value-card">
            <h3>Customer Focus</h3>
            <p>Your satisfaction is our top priority, and we strive to exceed expectations.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>We believe in honest and transparent dealings with all our customers.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta">
        <h2>Join Our Community</h2>
        <p>Explore our store and discover the best hardware for your needs.</p>
        <a href="/store" className="btn">Visit Store</a>
      </section>
    </div>
  );
};

export default About;
