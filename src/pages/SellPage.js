import React from 'react';
import './styles/SellPage.css';

const SellPage = () => {
  return (
    <div className="sell-container">
      <h2>Sell Your Content</h2>
      <p>
        Become a contributor and start earning by sharing your photos with millions of users worldwide.
      </p>
      <div className="steps">
        <div className="step">
          <h3>1. Sign Up</h3>
          <p>Create a photographer account and submit your best work.</p>
        </div>
        <div className="step">
          <h3>2. Upload</h3>
          <p>Upload high-quality photos and organize them into collections.</p>
        </div>
        <div className="step">
          <h3>3. Earn</h3>
          <p>Earn royalties every time your photos are downloaded.</p>
        </div>
      </div>
      <button className="sell-button">Join Now</button>
    </div>
  );
};

export default SellPage;
