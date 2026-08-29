import React from 'react';

const KeyInitiatives = () => {
  return (
    <section style={{ padding: '50px 20px', backgroundColor: '#e2e8f0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ color: '#0b192c', textAlign: 'center', marginBottom: '30px' }}>प्रमुख उपक्रम व मोहिमा</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          <div style={{ background: '#ffffff', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <span style={{ color: '#f26522', fontWeight: 'bold', fontSize: '0.8rem' }}>CAMPAIGN</span>
            <h3 style={{ margin: '10px 0', color: '#1e293b' }}>माझा वॉर्ड, माझी लोकशाही</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>प्रत्येक वॉर्डातील नागरिकांना निर्णय प्रक्रियेत थेट सहभागी करून घेण्यासाठी विशेष मोहीम.</p>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <span style={{ color: '#f26522', fontWeight: 'bold', fontSize: '0.8rem' }}>INITIATIVE</span>
            <h3 style={{ margin: '10px 0', color: '#1e293b' }}>युवा नेतृत्व विकास</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>तरुणांना राजकारण आणि समाजकारणात योग्य व्यासपीठ मिळवून देण्यासाठी कार्यशाळा.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyInitiatives;