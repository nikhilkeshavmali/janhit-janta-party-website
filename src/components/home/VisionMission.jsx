import React from 'react';

const VisionMission = () => {
  const goals = [
    { id: 1, title: 'पारदर्शक शासन', desc: 'डिजिटल-प्रथम लोकशाही आणि प्रत्येक प्रशासकीय कामात पारदर्शकता.' },
    { id: 2, title: 'युवा सक्षमीकरण', desc: 'तरुणांसाठी गुणवत्ता-आधारित रोजगार आणि कौशल्याचा विकास.' },
    { id: 3, title: 'कृषी व पायाभूत सुविधा', desc: 'सहकारी शेती आणि ग्रामीण भागाचा शाश्वत विकास.' }
  ];

  return (
    <section style={{ padding: '50px 20px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#0b192c', marginBottom: '30px' }}>आमची प्रमुख ध्येयधोरणे</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {goals.map((item) => (
            <div key={item.id} style={{ padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', textAlign: 'left' }}>
              <h3 style={{ color: '#f26522', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;