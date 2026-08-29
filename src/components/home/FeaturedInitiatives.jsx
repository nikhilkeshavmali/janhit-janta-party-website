import React from 'react';

const FeaturedInitiatives = () => {
  return (
    <section className="initiatives-section" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Featured Initiatives</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '300px' }}>
          <h3>Education Support Scheme</h3>
          <p>Providing free educational kits and guidance to needy students.</p>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '300px' }}>
          <h3>Health Camps</h3>
          <p>Organizing free medical health checkups across urban and rural areas.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInitiatives;