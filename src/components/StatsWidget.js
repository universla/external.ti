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
      <div className="stat-item">
        <span className="stat-number">{stats.totalBots.toLocaleString()}</span>
        <span className="stat-label">Bots</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{stats.totalVotes.toLocaleString()}</span>
        <span className="stat-label">Votos</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{stats.activeServers.toLocaleString()}</span>
        <span className="stat-label">Servidores</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{stats.users.toLocaleString()}</span>
        <span className="stat-label">Usuarios</span>
      </div>
    </section>
  );
};

export default StatsWidget;
