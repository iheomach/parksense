import React from 'react';
import Toolbar from '../components/common/Toolbar.tsx';

const HomePage: React.FC = () => {
  return (
    <div className="landing-container modern-bg">
      <Toolbar />
      <main className="centered-hero">
        <h1 className="big-title">Let's make your parking easy.</h1>
        <h2 className="big-subtitle">Find the best spot, save money, skip the traffic.</h2>
        
        <div className="search-container">
          <input 
            className="search-input" 
            type="text" 
            placeholder="Where do you want to park?" 
          />
          <button className="search-btn" aria-label="Search">Search</button>
        </div>
        
        <div className="quick-suggestions">
          <span>Popular searches:</span>
          <button className="suggestion-btn">Concert Venue</button>
          <button className="suggestion-btn">Downtown</button>
          <button className="suggestion-btn">Airport</button>
        </div>
        
        <div className="features-row">
          <div className="feature-card modern-feature">
            <span className="feature-icon" role="img" aria-label="AI">🤖</span>
            <h3 className="feature-title">AI-Powered Availability</h3>
            <p className="feature-desc">Smart predictions for open spots near you using advanced machine learning.</p>
          </div>
          <div className="feature-card modern-feature">
            <span className="feature-icon" role="img" aria-label="Cost">💸</span>
            <h3 className="feature-title">Cost Estimation</h3>
            <p className="feature-desc">See estimated prices before you park and compare options instantly.</p>
          </div>
          <div className="feature-card modern-feature">
            <span className="feature-icon" role="img" aria-label="Traffic">🚦</span>
            <h3 className="feature-title">Live Traffic Data</h3>
            <p className="feature-desc">Avoid congestion and find the fastest route to your destination.</p>
          </div>
        </div>
      </main>
      
      <footer className="main-footer translucent-footer">
        <span>© 2025 Smart Parking Finder. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default HomePage;