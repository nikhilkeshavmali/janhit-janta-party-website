import React from 'react';
//import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1: Logo & About */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img src="/logo.jpeg" alt="JLP Logo" className="logo-img" />
            <div className="logo-text">
              <span className="brand-title">JANHIT LOKSHAI</span>
              <span className="brand-subtitle">PARTY • JLP</span>
            </div>
          </div>
          <p className="footer-desc">
            एक स्वच्छ, आधुनिक आणि डिजिटल-प्रथम लोकशाही चळवळ. आम्ही केंद्रित राजकारणाला पारदर्शक बजेट, सहकारी शेती पायाभूत सुविधा आणि भारताच्या तरूणांसाठी गुणवत्ता-आधारित संधींनी बदलत आहोत.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">महत्त्वाच्या लिंक्स</h4>
          <ul className="footer-links">
            <li><a href="#home">होम</a></li>
            <li><a href="#about">आमच्याबद्दल</a></li>
            <li><a href="#leaders">नेते</a></li>
            <li><a href="#fronts">आघाड्या</a></li>
          </ul>
        </div>

        {/* Column 3: Office Address */}
        <div className="footer-col">
          <h4 className="footer-heading">JLP पुणे मुख्य कार्यालय</h4>
          <p className="contact-item">📍 Office Suit 102, Shanti Niketan Plaza, FC Road, Shivaji Nagar, Pune, Maharashtra - 411005</p>
          <p className="contact-item">📞 +91 20 8472 9102</p>
          <p className="contact-item">✉️ contact@janhitlokshaiparty.org</p>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-col">
          <h4 className="footer-heading">न्यूजलेटर सदस्यता</h4>
          <p className="newsletter-text">विधीमंडळातील मोहीम, सभा आणि धोरणात्मक कामाविषयी थेट अपडेट्स मिळवा.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="ईमेल पत्ता प्रविष्ट करा" />
            <button type="button">➤</button>
          </div>
          <small className="spam-note">Zero spam guaranteed. Unsubscribe at any time.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;