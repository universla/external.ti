
import React, { useState } from 'react';
import BotCard from '../components/BotCard';
import StatsWidget from '../components/StatsWidget';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Datos de ejemplo
  const featuredBots = [
    {
      id: '123456789012345678',
      name: 'PremiumBot',
      description: 'Advanced multi-purpose bot with premium features',
      votes: 5420,
      category: 'Utility',
      avatar: 'PB'
    },
    {
      id: '234567890123456789',
      name: 'MusicMaster',
      description: 'High-quality music player with 24/7 radio',
      votes: 4890,
      category: 'Music',
      avatar: 'MM'
    },
    {
      id: '345678901234567890',
      name: 'Guardian',
      description: 'Advanced moderation and security system',
      votes: 4210,
      category: 'Moderation',
      avatar: 'G'
    }
  ];

  const topBots = [
    { id: '123456789012345678', name: 'SuperBot', votes: 5420, category: 'Utility' },
    { id: '234567890123456789', name: 'MusicMaster', votes: 4890, category: 'Música' },
    { id: '345678901234567890', name: 'Guardian', votes: 4210, category: 'Moderación' },
    { id: '456789012345678901', name: 'GameBot', votes: 3870, category: 'Juegos' },
    { id: '567890123456789012', name: 'FunBot', votes: 3240, category: 'Entretenimiento' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Find the perfect Discord bot</h1>
          <p>The best place to discover, vote, and manage Discord bots</p>
          
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search for bots..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsWidget />

      {/* Featured Bots */}
      <section className="featured-section">
        <div className="container">
          <h2>⭐ Featured Bots</h2>
          <div className="bots-grid">
            {featuredBots.map(bot => (
              <BotCard key={bot.id} bot={bot} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Bots */}
      <section className="top-section">
        <div className="container">
          <h2>🏆 Top Bots</h2>
          <div className="top-bots-list">
            {topBots.map((bot, index) => (
              <div key={bot.id} className="top-bot-item">
                <span className="position">#{index + 1}</span>
                <BotCard bot={bot} compact={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Want to add your bot?</h2>
          <p>Join thousands of bot developers and showcase your creation</p>
          <Link to="/add" className="btn-primary">Add Your Bot</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
