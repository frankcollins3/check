import React from 'react';
import './App.css';

const HeroPage1 = () => {
  return (
    <div className="hero-container">
      <header className="hero-header">
        <nav className="hero-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="hero-main">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Your success is our priority. Let's achieve greatness together.</p>
          <button className="hero-button">Get Started</button>
        </div>
      </main>
      <footer className="hero-footer">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HeroPage1;
