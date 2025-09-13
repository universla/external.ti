import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>External.ui</h3>
            <p>The best place to discover Discord bots</p>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <Link to="/api">API</Link>
            <Link to="/docs">Documentation</Link>
            <Link to="/widgets">Widgets</Link>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <Link to="/help">Help Center</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/status">Status</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 External.ui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
