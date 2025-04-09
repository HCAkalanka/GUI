import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      {/* Header Section */}
      <header className="services-header">
        <h1>Our Services</h1>
        <p>We provide a wide range of services to meet all your computer and hardware needs.</p>
      </header>

      {/* Services Section */}
      <section className="services-list">
        {/* Service 1 */}
        <div className="service-card">
          <img
            src=".\OIP.jpg"
            alt="Custom PC Building"
            className="service-image"
          />
          <h3>Custom PC Building</h3>
          <p>
            Let us help you build your dream PC. Whether you're a gamer, designer, or developer, we customize systems to fit your specific requirements.
          </p>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <img
            src=".\R 1.jpg"
            alt="Hardware Upgrades"
            className="service-image"
          />
          <h3>Hardware Upgrades</h3>
          <p>
            Boost your system's performance with the latest processors, RAM, graphics cards, and more. Upgrade with ease and expert advice.
          </p>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <img
            src=".\th.jpeg"
            alt="Repair Services"
            className="service-image"
          />
          <h3>Repair Services</h3>
          <p>
            Experiencing hardware or software issues? Our skilled technicians can diagnose and fix problems to get your device back in action.
          </p>
        </div>

        {/* Service 4 */}
        <div className="service-card">
          <img
            src=".\network.jpg"
            alt="Networking Solutions"
            className="service-image"
          />
          <h3>Networking Solutions</h3>
          <p>
            From small offices to homes, we offer reliable networking solutions, including Wi-Fi setup, network security, and troubleshooting.
          </p>
        </div>

        {/* Service 5 */}
        <div className="service-card">
          <img
            src=".\install.jpg"
            alt="Software Installation"
            className="service-image"
          />
          <h3>Software Installation</h3>
          <p>
            We install and configure software to optimize your workflow, including operating systems, productivity tools, and antivirus programs.
          </p>
        </div>

        {/* Service 6 */}
        <div className="service-card">
          <img
            src=".\IT-Consulting.jpg"
            alt="IT Consulting"
            className="service-image"
          />
          <h3>IT Consulting</h3>
          <p>
            Need advice on IT infrastructure or equipment purchases? Our experts provide tailored solutions to help you make informed decisions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;

