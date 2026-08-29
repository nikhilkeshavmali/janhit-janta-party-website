import React from 'react';

const LatestUpdates = () => {
  return (
    <section className="updates-section" style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Latest Updates</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <article style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '10px' }}>
          <small>August 28, 2026</small>
          <h3>Janhit Janta Party successfully conducted Youth Leadership Summit</h3>
        </article>
      </div>
    </section>
  );
};

export default LatestUpdates;