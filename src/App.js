
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header como top.gg */}
      <header className="topgg-header">
        <div className="container">
          <div className="logo">
            <span className="logo-text">🤖 Bot Directory</span>
          </div>
          <nav className="nav">
            <a href="/" className="nav-link active">Home</a>
            <a href="/bots" className="nav-link">Bots</a>
            <a href="/servers" className="nav-link">Servers</a>
            <a href="/add" className="nav-link">Add Bot</a>
            <a href="/login" className="nav-link">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="hero">
        <div className="container">
          <h1>Find the perfect Discord bot</h1>
          <p>The best place to discover, vote, and manage Discord bots</p>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search for bots..." 
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stat-item">
            <div className="stat-number">1,250+</div>
            <div className="stat-label">Bots</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">45,200+</div>
            <div className="stat-label">Votes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8,900+</div>
            <div className="stat-label">Servers</div>
          </div>
        </div>
      </section>

      {/* Featured bots */}
      <section className="featured">
        <div className="container">
          <h2>⭐ Featured Bots</h2>
          <div className="bots-grid">
            <BotCard 
              name="PremiumBot" 
              description="Advanced multi-purpose bot" 
              votes="5,420" 
              category="Utility"
            />
            <BotCard 
              name="MusicMaster" 
              description="High-quality music player" 
              votes="4,890" 
              category="Music"
            />
            <BotCard 
              name="Guardian" 
              description="Advanced moderation system" 
              votes="4,210" 
              category="Moderation"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Bot Directory</h3>
              <p>Discover amazing Discord bots</p>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <a href="/about">About</a>
              <a href="/api">API</a>
              <a href="/docs">Documentation</a>
            </div>
          </div>
          <div className="copyright">
            &copy; 2024 Bot Directory. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Componente para tarjetas de bots
function BotCard({ name, description, votes, category }) {
  return (
    <div className="bot-card">
      <div className="bot-header">
        <img 
          src="https://placehold.co/50x50" 
          alt={name}
          className="bot-avatar"
        />
        <div className="bot-info">
          <h3>{name}</h3>
          <span className="bot-category">{category}</span>
        </div>
      </div>
      <p className="bot-description">{description}</p>
      <div className="bot-stats">
        <span className="votes">📊 {votes} votes</span>
      </div>
      <div className="bot-actions">
        <button className="btn-vote">Vote</button>
        <button className="btn-invite">Invite</button>
      </div>
    </div>
  );
}

export default App;
