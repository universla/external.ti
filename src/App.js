
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="container">
            <h1 className="logo">🤖 Bot Directory</h1>
            <nav className="nav">
              <a href="/">Inicio</a>
              <a href="/bots">Bots</a>
              <a href="/add">Añadir Bot</a>
            </nav>
          </div>
        </header>
        
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bots" element={<BotsPage />} />
            <Route path="/add" element={<AddBotPage />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Bot Directory. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// Componente Home
function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h2>Encuentra los mejores bots para Discord</h2>
        <p>Descubre, vota y añade bots increíbles a tu servidor</p>
        <div className="cta-buttons">
          <a href="/add" className="btn-primary">Añadir tu bot</a>
          <a href="/bots" className="btn-secondary">Explorar bots</a>
        </div>
      </div>
      
      <div className="stats">
        <div className="stat-item">
          <h3>1,250+</h3>
          <p>Bots registrados</p>
        </div>
        <div className="stat-item">
          <h3>45,200+</h3>
          <p>Votos totales</p>
        </div>
        <div className="stat-item">
          <h3>8,900+</h3>
          <p>Servidores activos</p>
        </div>
      </div>
    </div>
  );
}

// Componente BotsPage
function BotsPage() {
  return (
    <div className="page">
      <h2>🤖 Lista de Bots</h2>
      <div className="bots-grid">
        <div className="bot-card">
          <img src="https://placehold.co/50x50" alt="Bot" />
          <div className="bot-info">
            <h3>SuperBot</h3>
            <p>Bot multifuncional para servidores</p>
            <div className="bot-meta">
              <span>📊 5,420 votos</span>
              <span>🏷️ Utilidad</span>
            </div>
          </div>
        </div>
        <div className="bot-card">
          <img src="https://placehold.co/50x50" alt="Bot" />
          <div className="bot-info">
            <h3>MusicMaster</h3>
            <p>Reproductor de música premium</p>
            <div className="bot-meta">
              <span>📊 4,890 votos</span>
              <span>🏷️ Música</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente AddBotPage
function AddBotPage() {
  return (
    <div className="page">
      <h2>➕ Añadir Bot</h2>
      <form className="add-bot-form">
        <div className="form-group">
          <label>ID del Bot:</label>
          <input type="text" placeholder="123456789012345678" />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea placeholder="Describe tu bot..."></textarea>
        </div>
        <div className="form-group">
          <label>Categoría:</label>
          <select>
            <option>Utilidad</option>
            <option>Música</option>
            <option>Moderación</option>
            <option>Juegos</option>
          </select>
        </div>
        <button type="submit" className="btn-primary">Añadir Bot</button>
      </form>
    </div>
  );
}

export default App;
