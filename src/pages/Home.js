import React, { useState, useEffect } from 'react';
import BotCard from '../components/BotCard';
import StatsWidget from '../components/StatsWidget';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
  const [featuredBots, setFeaturedBots] = useState([]);
  const [topBots, setTopBots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    const mockFeaturedBots = [
      {
        id: '123456789012345678',
        name: 'PremiumBot',
        description: 'Bot premium con funciones avanzadas',
        votes: 5420,
        category: 'Utilidad',
        avatar: '/images/placeholder-bot.png',
        featured: true
      },
      {
        id: '234567890123456789',
        name: 'MusicPro',
        description: 'Reproductor de música de alta calidad',
        votes: 4890,
        category: 'Música',
        avatar: '/images/placeholder-bot.png',
        featured: true
      }
    ];

    const mockTopBots = [
      { id: '123456789012345678', name: 'SuperBot', votes: 5420, category: 'Utilidad' },
      { id: '234567890123456789', name: 'MusicMaster', votes: 4890, category: 'Música' },
      { id: '345678901234567890', name: 'Guardian', votes: 4210, category: 'Moderación' },
      { id: '456789012345678901', name: 'GameBot', votes: 3870, category: 'Juegos' },
      { id: '567890123456789012', name: 'FunBot', votes: 3240, category: 'Entretenimiento' }
    ];

    setFeaturedBots(mockFeaturedBots);
    setTopBots(mockTopBots);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Encuentra los mejores bots para tu servidor de Discord</h1>
          <p>Descubre, vota y añade bots increíbles a tu comunidad</p>
          <div className="hero-buttons">
            <Link to="/add" className="btn-primary">Añadir tu bot</Link>
            <Link to="/categories" className="btn-secondary">Explorar categorías</Link>
          </div>
        </div>
      </section>

      <StatsWidget />

      <section className="featured-section">
        <h2>⭐ Bots Destacados</h2>
        <div className="bots-grid">
          {featuredBots.map(bot => (
            <BotCard key={bot.id} bot={bot} featured={true} />
          ))}
        </div>
      </section>

      <section className="top-section">
        <h2>🏆 Top Bots</h2>
        <div className="bots-list">
          {topBots.map((bot, index) => (
            <div key={bot.id} className="top-bot-item">
              <span className="position">#{index + 1}</span>
              <BotCard bot={bot} compact={true} />
            </div>
          ))}
        </div>
      </section>

      <CategoryFilter />
    </div>
  );
};

export default Home;
