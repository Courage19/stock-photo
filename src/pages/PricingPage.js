import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './styles/PricingPage.css';

const PricingPage = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-header">Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">Free</p>
          <ul>
            <li><FaCheckCircle /> Access to 100 photos</li>
            <li><FaCheckCircle /> Standard License</li>
          </ul>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="pricing-card premium">
          <h3>Premium</h3>
          <p className="price">$29/month</p>
          <ul>
            <li><FaCheckCircle /> Unlimited Downloads</li>
            <li><FaCheckCircle /> Premium License</li>
            <li><FaCheckCircle /> Access to exclusive content</li>
          </ul>
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="price">Contact us</p>
          <ul>
            <li><FaCheckCircle /> Custom solutions</li>
            <li><FaCheckCircle /> Team access</li>
            <li><FaCheckCircle /> Dedicated support</li>
          </ul>
          <button className="contact-sales-btn">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
