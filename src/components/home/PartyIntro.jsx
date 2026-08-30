import React from 'react';

const PartyIntro = () => {
  // पक्षाचे मुख्य ३ कार्यक्षेत्रे (Pillars)
  const pillars = [
    {
      icon: '🏛️',
      title: 'पारदर्शक शासन',
      description: 'भष्टाचारमुक्त आणि जनतेच्या हिताचे निर्णय घेणारी तत्पर प्रशासन यंत्रणा उभारणे.',
    },
    {
      icon: '🎓',
      title: 'शिक्षण आणि रोजगार',
      description: 'तरुणांना दर्जेदार शिक्षण आणि रोजगाराच्या नवीन संधी उपलब्ध करून देणे.',
    },
    {
      icon: '🌱',
      title: 'शाश्वत विकास',
      description: 'पर्यावरणपूरक विकास, शेतकरी सक्षमीकरण आणि पायाभूत सुविधांचा कायापालट.',
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Sub-heading & Badge */}
        <span style={styles.subTitle}>आमची ओळख आणि ध्येय</span>
        <h2 style={styles.heading}>जनहित जनता पार्टीमध्ये आपले स्वागत आहे</h2>
        
        {/* Divider Line */}
        <div style={styles.divider}></div>

        {/* Main Intro Paragraph */}
        <p style={styles.description}>
          जनहित जनता पार्टी ही केवळ एक राजकीय संघटना नसून जनतेच्या हक्कासाठी लढणारा एक विचार आहे. 
          सामाजिक कल्याण, शिक्षण, आरोग्य आणि शाश्वत विकासाच्या माध्यमातून देशातील प्रत्येक नागरिकाचे 
          जीवनमान उंचावणे हेच आमचे अंतिम ध्येय आहे.
        </p>

        {/* Core Pillars Cards Grid */}
        <div style={styles.grid}>
          {pillars.map((pillar, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconBox}>{pillar.icon}</div>
              <h3 style={styles.cardTitle}>{pillar.title}</h3>
              <p style={styles.cardDesc}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CSS Styles Object
const styles = {
  section: {
    padding: '80px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  subTitle: {
    color: '#FF9933',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    display: 'block',
    marginBottom: '8px',
  },
  heading: {
    fontSize: '2.3rem',
    color: '#1a1a1a',
    fontWeight: '800',
    marginBottom: '15px',
  },
  divider: {
    width: '60px',
    height: '4px',
    backgroundColor: '#FF9933',
    margin: '0 auto 25px auto',
    borderRadius: '2px',
  },
  description: {
    fontSize: '1.15rem',
    color: '#555555',
    lineHeight: '1.8',
    maxWidth: '850px',
    margin: '0 auto 50px auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '35px 25px',
    borderRadius: '12px',
    border: '1px solid #eee',
    boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
  },
  iconBox: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#222',
    marginBottom: '10px',
  },
  cardDesc: {
    fontSize: '0.95rem',
    color: '#666',
    lineHeight: '1.6',
  },
};

export default PartyIntro;