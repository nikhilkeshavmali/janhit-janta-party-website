import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="nav-logo">
        <img src="/logo.jpeg" alt="Logo" className="logo-img" />
        <div className="logo-text">
          <span className="brand-title">JANHIT LOKSHAI</span>
          <span className="brand-subtitle">PARTY • JLP</span>
        </div>
      </div>

      <nav className="nav-links">
        <a href="#home">होम</a>
        <a href="#about">आमच्याबद्दल</a>
        <a href="#leaders">नेते</a>
        <a href="#fronts">आघाड्या</a>
        <a href="#manifesto">जाहीरनामा</a>
        <a href="#volunteer">स्वयंसेवक व्हा</a>
        <a href="#media">मीडिया</a>
        <a href="#contact">संपर्क</a>
      </nav>

      <div className="nav-actions">
        <div className="lang-switcher">
          <span>EN</span>
          <span>हिंदी</span>
          <span className="active-lang">मराठी</span>
        </div>
        <a href="#donate" className="btn-donate">
          ♡ देणगी
        </a>
      </div>
    </header>
  );
};

export default Navbar;