import React from 'react';
import { Link } from 'react-router-dom';

const BotCard = ({ bot, featured = false, compact = false }) => {
  if (compact) {
    return (
      <div className="bot-card compact">
        <Link to={`/bot/${bot.id}`} className="bot-link">
          <div className="bot-info">
            <h3>{bot.name}</h3>
            <span className="category">{bot.category}</span>
            <div className="votes">
              📊 {bot.votes?.toLocaleString() || 0} votos
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className={`bot-card ${featured ? 'featured' : ''}`}>
      <Link to={`/bot/${bot.id}`} className="bot-link">
        <div className="bot-header">
          <img 
            src={bot.avatar || '/images/placeholder-bot.png'} 
            alt={bot.name}
            className="bot-avatar"
          />
          <div className="bot-title">
            <h3>{bot.name}</h3>
            <span className="category">{bot.category}</span>
          </div>
        </div>
        
        <p className="bot-description">{bot.description}</p>
        
        <div className="bot-stats">
          <span className="votes">📊 {bot.votes?.toLocaleString() || 0} votos</span>
          {featured && <span className="featured-badge">⭐ Destacado</span>}
        </div>
        
        <div className="bot-actions">
          <button className="btn-vote">Votar</button>
          <button className="btn-invite">Invitar</button>
        </div>
      </Link>
    </div>
  );
};

export default BotCard;
