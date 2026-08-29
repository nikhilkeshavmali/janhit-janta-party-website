import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="nav-logo">
        <Link to="/">
          <img src="/logo.jpeg" alt="Logo" className="logo-img" />
        </Link>

        <div className="logo-text">
          <span className="brand-title">JANHIT LOKSHAI</span>
          <span className="brand-subtitle">PARTY • JLP</span>
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/">होम</Link>

        <Link to="/about">आमच्याबद्दल</Link>

        <Link to="/leaders">नेते</Link>

        <Link to="/fronts">आघाड्या</Link>

        <Link to="/manifesto">जाहीरनामा</Link>

        <Link to="/volunteer">स्वयंसेवक व्हा</Link>

        <Link to="/media">मीडिया</Link>

        <Link to="/contact">संपर्क</Link>
      </nav>

      <div className="nav-actions">
        <div className="lang-switcher">
          <span>EN</span>
          <span>हिंदी</span>
          <span className="active-lang">मराठी</span>
        </div>

        <Link to="/donor" className="btn-donate">
          ♡ देणगी
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
