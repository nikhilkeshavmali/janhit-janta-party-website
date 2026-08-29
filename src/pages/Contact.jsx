import React, { useState } from 'react';
import partyBanner from '../assets/party-banner.jpeg';

// Branch: feature/join-contact

function Contact() {
  // State management for selected state, form inputs, and error message
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [contactData, setContactData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });
  const [mobileError, setMobileError] = useState('');

  // Office address details for different states
  const officeDetails = {
    Maharashtra: {
      type: "Maharashtra Main & Registered Office",
      regAddress: "41/3, Gandevi Road, Panvelgaon, Navi Mumbai - 400705, Maharashtra State, India.",
      contactAddress: "4/402, 4th Floor, Dharti Co-op Society, G. S. Nangre Marg, Dr. Ambedkar Marg, Parel, Mumbai - 400012.",
      mahaAddress: "J. K. Chamber, Plot No. 76, Office No. 608, Sec. No. 17, Vashi, Navi Mumbai, Maharashtra State - 400703.",
      phone: "7738033353",
      email: "contact@jlpindia.org"
    },
    Default: {
      type: "State Liaison Office",
      regAddress: "Main branch of the respective state.",
      contactAddress: "Official contact office.",
      mahaAddress: "Regional office of the respective state.",
      phone: "7738033353",
      email: "info@jlpindia.org"
    }
  };

  const currentOffice = officeDetails[selectedState] || officeDetails.Default;

  // Handle input changes dynamically and clear mobile error if valid
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Allow only numbers for mobile field and restrict to 10 digits
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setContactData({ ...contactData, [name]: numericValue });
      if (numericValue.length === 10) {
        setMobileError('');
      }
    } else {
      setContactData({ ...contactData, [name]: value });
    }
  };

  // Handle form submission with 10-digit mobile validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (contactData.mobile.length !== 10) {
      setMobileError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setMobileError('');
    alert("Message sent successfully!");
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; }

        .contact-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #fffaf5 0%, #ffffff 35%, #f6fbf5 100%);
          font-family: Arial, Helvetica, sans-serif;
          color: #222;
        }

        /* Tricolor top border line */
        .tricolor-line {
          display: flex;
          width: 100%;
          height: 4px;
        }
        .saffron-line { flex: 1; background: #f39a35; }
        .white-line { flex: 1; background: #ffffff; }
        .green-line { flex: 1; background: #2f8f46; }

        .contact-container {
          width: 100%;
          max-width: 1100px;
          margin: auto;
          padding: 20px 20px 40px;
        }

        /* Breadcrumb navigation styling */
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #777;
          margin-bottom: 12px;
        }
        .breadcrumb-home { color: #172b70; font-weight: 700; }
        .breadcrumb-active { color: #d97719; font-weight: 700; }
        .breadcrumb-arrow { color: #aaa; font-size: 15px; }

        /* Hero banner section */
        .contact-hero {
          position: relative;
          overflow: hidden;
          min-height: 130px;
          border-radius: 12px;
          padding: 20px 30px;
          margin-bottom: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(120deg, #fff3e3, #ffffff 50%, #f0f8f1);
          border: 1px solid #eeeeee;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .contact-hero h1 {
          margin: 0;
          font-size: 28px;
          color: #172b70;
          font-weight: 800;
        }
        .contact-hero h1 span { color: #d97719; }
        .contact-hero p {
          margin: 10px 0 0;
          color: #62676d;
          font-size: 12px;
          line-height: 1.4;
        }

        /* Grid layout for banner and office info */
        .top-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .banner-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.04);
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          height: 100%;
        }

        .office-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 22px 25px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.04);
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Perfect clean alignment structure for Address rows */
        .address-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 10px;
          color: #475569;
          margin-bottom: 12px;
          line-height: 1.5;
        }

        .address-label {
          min-width: 110px;
          font-weight: bold;
          color: #0f172a;
          flex-shrink: 0;
        }

        .address-value {
          flex: 1;
        }

        /* Contact message form box */
        .form-box {
          max-width: 100%;
          background: #ffffff;
          border-radius: 12px;
          padding: 30px 35px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.04);
          border: 1px solid #e2e8f0;
        }

        .form-box h3 {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-label {
          display: block;
          font-size: 10px;
          font-weight: bold;
          color: #475569;
          margin-bottom: 5px;
        }

        .form-input {
          width: 100%;
          padding: 9px 12px;
          border-radius: 6px;
          border: 1px solid #cbd5e1;
          font-size: 12px;
          outline: none;
          box-sizing: border-box;
          background: #fafafa;
        }

        .form-input:focus {
          border-color: #d97719;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(243,154,53,0.1);
        }

        .error-text {
          color: #ef4444;
          font-size: 10px;
          margin-top: 4px;
          font-weight: bold;
        }

        .submit-btn {
          background: linear-gradient(135deg, #e58b2c, #d97719);
          color: #ffffff;
          border: none;
          padding: 10px 24px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 3px 8px rgba(217, 119, 6, 0.2);
          transition: 0.25s;
        }
        .submit-btn:hover { transform: translateY(-2px); }

        @media (max-width: 768px) {
          .top-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contact-page">
        {/* Tricolor bar */}
        <div className="tricolor-line">
          <div className="saffron-line"></div>
          <div className="white-line"></div>
          <div className="green-line"></div>
        </div>

        <div className="contact-container">
          {/* Breadcrumb path */}
          <div className="breadcrumb">
            <span className="breadcrumb-home">Home</span>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-active">Contact Us</span>
          </div>

          {/* Hero section */}
          <div className="contact-hero">
            <div>
              <h1>Contact <span>Us</span></h1>
              <p>Get in touch with Janhit Lokshahi Party. We are here to listen to your concerns and answer your questions.</p>
            </div>
          </div>

          {/* Main content grid: Banner image on left, Office details on right */}
          <div className="top-info-grid">
            
            {/* Left side banner image */}
            <div className="banner-card">
              <div style={{ width: '100%', overflow: 'hidden', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }}>
                <img 
                  src={partyBanner} 
                  alt="Janhit Lokshahi Party Banner" 
                  style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '8px' }} 
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              </div>
            </div>

            {/* Right side office addresses matching the exact clean layout requested */}
            <div className="office-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{ backgroundColor: '#b45309', color: '#ffffff', fontSize: '10px', fontWeight: 'bold', padding: '6px 14px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {currentOffice.type}
                  </span>

                  {/* State selector dropdown */}
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    style={{ backgroundColor: '#ffffff', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', color: '#334155', border: '1px solid #cbd5e1', outline: 'none', cursor: 'pointer' }}
                  >
                    <option value="Maharashtra">📍 Maharashtra</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>

                <h4 style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'center', margin: '12px 0 16px 0', color: '#0f172a' }}>Janhit Lokshahi Party</h4>
                
                {/* Registered office address row */}
                <div className="address-row">
                  <span style={{ color: '#b45309', fontSize: '12px' }}>📍</span>
                  <span className="address-label">Registered Office:</span>
                  <span className="address-value">{currentOffice.regAddress}</span>
                </div>

                {/* Contact office address row */}
                <div className="address-row">
                  <span style={{ color: '#b45309', fontSize: '12px' }}>📍</span>
                  <span className="address-label">Contact Office:</span>
                  <span className="address-value">{currentOffice.contactAddress}</span>
                </div>

                {/* State office address row */}
                <div className="address-row">
                  <span style={{ color: '#b45309', fontSize: '12px' }}>📍</span>
                  <span className="address-label">State Office:</span>
                  <span className="address-value">{currentOffice.mahaAddress}</span>
                </div>
              </div>

              {/* Contact numbers and emails */}
              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', fontSize: '11px', color: '#1e3a8a', display: 'flex', gap: '25px', fontWeight: '600', flexWrap: 'wrap' }}>
                <span>📞 {currentOffice.phone}</span>
                <span>✉️ {currentOffice.email}</span>
              </div>
            </div>

          </div>

          {/* Message user feedback form section */}
          <div className="form-box">
            <h3>SEND US A MESSAGE</h3>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }} className="form-group">
                <div>
                  <label className="form-label">FULL NAME</label>
                  <input type="text" name="fullName" placeholder="Enter your full name" value={contactData.fullName} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                  <label className="form-label">MOBILE NUMBER</label>
                  <input type="tel" name="mobile" placeholder="Enter 10-digit mobile number" value={contactData.mobile} onChange={handleChange} className="form-input" required />
                  {mobileError && <p className="error-text">{mobileError}</p>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">EMAIL ADDRESS</label>
                <input type="email" name="email" placeholder="Enter your email address" value={contactData.email} onChange={handleChange} className="form-input" required />
              </div>

              <div className="form-group">
                <label className="form-label">SUBJECT</label>
                <input type="text" name="subject" placeholder="What is this regarding?" value={contactData.subject} onChange={handleChange} className="form-input" required />
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label">MESSAGE</label>
                <textarea rows="3" name="message" placeholder="Write your message here..." value={contactData.message} onChange={handleChange} className="form-input" style={{ resize: 'vertical' }} required></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" className="submit-btn">
                  <span>SEND MESSAGE</span>
                  <span>➔</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;