import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
      <h1>Welcome to Janhit Janta Party</h1>
      <p>Serving the People, Empowering the Nation!</p>
      <div style={{ marginTop: '20px' }}>
        <button style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer' }}>
          Join Us
        </button>
        <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;