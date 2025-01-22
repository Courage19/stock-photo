import React from 'react';
import './styles/PricingPage.css';

const PricingPage = () => {
  return (
    <div className="pricing-container">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p>Free</p>
          <ul>
            <li>Access to 100 photos</li>
            <li>Standard License</li>
          </ul>
          <button>Get Started</button>
        </div>
        <div className="pricing-card">
          <h3>Premium</h3>
          <p>$29/month</p>
          <ul>
            <li>Unlimited Downloads</li>
            <li>Premium License</li>
            <li>Access to exclusive content</li>
          </ul>
          <button>Subscribe</button>
        </div>
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p>Contact us</p>
          <ul>
            <li>Custom solutions</li>
            <li>Team access</li>
            <li>Dedicated support</li>
          </ul>
          <button>Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
