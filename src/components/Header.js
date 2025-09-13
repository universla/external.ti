import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-text">🤖 External.ui</span>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/bots" className="nav-link">Bots</Link>
          <Link to="/servers" className="nav-link">Servers</Link>
          <Link to="/add" className="nav-link btn-primary">Add Bot</Link>
        </nav>
        
        <div className="user-actions">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
