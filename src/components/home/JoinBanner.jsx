import React from 'react';

const JoinBanner = () => {
  return (
    <section style={{ padding: '50px 20px', backgroundColor: '#0b192c', color: '#ffffff', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>बदलाचा एक भाग व्हा!</h2>
        <p style={{ color: '#cbd5e1', marginBottom: '25px', fontSize: '1rem' }}>
          स्वच्छ, आधुनिक आणि पारदर्शक लोकशाहीसाठी आजच जनहित लोकशाही पक्षाशी जोडले जा.
        </p>
        <button style={{
          backgroundColor: '#f26522',
          color: '#ffffff',
          border: 'none',
          padding: '12px 30px',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          स्वयंसेवक म्हणून नोंदणी करा
        </button>
      </div>
    </section>
  );
};

export default JoinBanner;