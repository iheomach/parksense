import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <div className="main-header translucent-toolbar floating-toolbar">
      <div className="toolbar-content">
        <span className="logo">Parksense</span>
        <nav className="nav-links">
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </nav>
        <button className="btn-primary rounded-btn">Start Building</button>
      </div>
    </div>
  );
};

export default Toolbar;