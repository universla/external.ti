import React from 'react';

const StatsWidget = () => {
  const stats = {
    totalBots: 1250,
    totalVotes: 45200,
    activeServers: 8900,
    users: 125000
  };

  return (
    <section className="stats-widget">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{stats.totalBots.toLocaleString()}+</div>
            <div className="stat-label">Bots</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.totalVotes.toLocaleString()}+</div>
            <div className="stat-label">Votes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.activeServers.toLocaleString()}+</div>
            <div className="stat-label">Servers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.users.toLocaleString()}+</div>
            <div className="stat-label">Users</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsWidget;
