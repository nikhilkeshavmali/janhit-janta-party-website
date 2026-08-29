import React from 'react';

const Highlights = () => {
  const highlightsList = [
    { id: 1, title: 'Transparent Governance', desc: 'Accountable and transparent administration for every citizen.' },
    { id: 2, title: 'Youth Empowerment', desc: 'Creating employment, skill development, and better opportunities.' },
    { id: 3, title: 'Rural Development', desc: 'Comprehensive growth and support for farmers and rural areas.' }
  ];

  return (
    <section className="highlights-section" style={{ padding: '40px 20px', backgroundColor: '#ffffff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Key Highlights</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {highlightsList.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '280px' }}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;