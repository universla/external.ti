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
              📊 {bot.votes?.toLocaleString() || 0} votes
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
          <div className="bot-avatar">
            {bot.avatar || bot.name.charAt(0)}
          </div>
          <div className="bot-title">
            <h3>{bot.name}</h3>
            <span className="category">{bot.category}</span>
          </div>
        </div>
        
        <p className="bot-description">{bot.description}</p>
        
        <div className="bot-stats">
          <span className="votes">📊 {bot.votes?.toLocaleString() || 0} votes</span>
          {featured && <span className="featured-badge">⭐ Featured</span>}
        </div>
        
        <div className="bot-actions">
          <button className="btn-vote">Vote</button>
          <button className="btn-invite">Invite</button>
        </div>
      </Link>
    </div>
  );
};

export default BotCard;
