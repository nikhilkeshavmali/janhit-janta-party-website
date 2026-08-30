import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  // बॅकग्राउंडला बदलणाऱ्या इमेजेसची यादी (इथे तुमच्या आवडीच्या इमेजेसच्या लिंक्स टाका)
  const images = [
    'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&w=1600&q=80'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // दर ५ सेकंदांनी आपोआप फोटो बदलण्यासाठी logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section style={styles.heroContainer}>
      {/* Background Image Overlay with Fade Transition */}
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            ...styles.bgSlide,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${img})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Hero Content */}
      <div style={styles.content}>
        <span style={styles.badge}>जनहित जनता पार्टी</span>
        <h1 style={styles.title}>
          जनतेची सेवा, <span style={{ color: '#FF9933' }}>राष्ट्राचे सबलीकरण!</span>
        </h1>
        <p style={styles.subtitle}>
          एक नवी पहाट, एक नवा विश्वास! आपल्या हक्कासाठी आणि प्रगतीसाठी एकत्र येऊया.
        </p>
        
        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button style={styles.primaryBtn}>
            पक्षाशी जोडले जा (Join Us)
          </button>
          <button style={styles.secondaryBtn}>
            अधिक माहिती (Learn More)
          </button>
        </div>
      </div>
    </section>
  );
};

// CSS Styles Object (इथे डिझाइन अधिक आकर्षक केले आहे)
const styles = {
  heroContainer: {
    position: 'relative',
    height: '85vh',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
    overflow: 'hidden',
    padding: '0 20px',
  },
  bgSlide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'opacity 1.5s ease-in-out',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '850px',
  },
  badge: {
    backgroundColor: '#FF9933',
    color: '#fff',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    display: 'inline-block',
    marginBottom: '15px',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '1.25rem',
    marginBottom: '35px',
    color: '#e0e0e0',
    lineHeight: '1.6',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: '#FF9933',
    color: '#fff',
    border: 'none',
    padding: '14px 32px',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(255, 153, 51, 0.4)',
    transition: 'transform 0.2s ease',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #ffffff',
    padding: '14px 32px',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default HeroSection;