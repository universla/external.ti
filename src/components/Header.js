import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Bot Directory" />
          <span>Bot Directory</span>
        </Link>
        
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/categories">Categorías</Link>
          <Link to="/leaderboard">Top Bots</Link>
          <Link to="/add" className="btn-primary">Añadir Bot</Link>
        </nav>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Buscar bots..." 
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
