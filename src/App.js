import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BotProfile from './pages/BotProfile';
import AddBot from './pages/AddBot';
import Leaderboard from './pages/Leaderboard';
import Categories from './pages/Categories';
import SearchResults from './pages/SearchResults';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bot/:id" element={<BotProfile />} />
            <Route path="/add" element={<AddBot />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
