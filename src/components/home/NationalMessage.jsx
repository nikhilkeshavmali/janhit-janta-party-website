import React from 'react';
//import './NationalMessage.css';

const NationalMessage = () => {
  return (
    <section className="message-section">
      <div className="message-card">
        {/* Left Side: Leader Profile */}
        <div className="leader-profile">
          <div className="leader-img-wrapper">
            <img src="/leader-ashok.jpeg" alt="अशोक अल्हाट" className="leader-img" />
          </div>
          <h3 className="leader-name">अशोक अल्हाट</h3>
          <p className="leader-role">राष्ट्रीय अध्यक्ष आणि संस्थापक</p>
        </div>

        {/* Right Side: Message Content */}
        <div className="message-body">
          <span className="tag-label">NATIONAL MESSAGE</span>
          <h2 className="message-title">
            “Power Belongs inside the Ward Assembly, Not behind Secretariat Fortresses”
          </h2>
          
          <blockquote className="quote-box">
            "लोकशाही म्हणजे केवळ पाच वर्षांतून एकदा मतदान करणे नव्हे; तर जेथे अत्यंत सामान्यातील सामान्य माणसाचा आवाज सर्वोच्च विधायी लक्ष वेधून घेईल असा भारत घडवणे हे आपले सामूहिक कर्तव्य आहे. केंद्रीकृत राजकारणाला लोकांच्या सहभागात्मक लोकशाहीने बदलण्यासाठी जेएलपीची स्थापना करण्यात आली!"
          </blockquote>

          <p className="message-paragraph">
            Having served inside administrative secretariats for a quarter-century, I saw firsthand how traditional governance systems operate—shielded by archaic files and inaccessible systems. JLP is our collective response to make Indian administrative structures modern, citizen-first, and completely open to the people they serve.
          </p>

          <div className="message-footer">
            <div>
              <strong>Ashok Alhat</strong>
              <div className="sub-role">National President, JLP</div>
            </div>
            <span className="signed-date">Signed May 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalMessage;