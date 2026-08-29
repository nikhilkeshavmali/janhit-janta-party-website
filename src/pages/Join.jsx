import React, { useState } from 'react';

// Branch: feature/join-contact

function Join() {
  // State management for form input fields and selected interests
  const [formData, setFormData] = useState({
    title: 'Mr.',
    fullName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    mobile: '',
    address: '',
    state: 'Maharashtra',
    district: '',
    pincode: '',
    availability: '',
    interests: []
  });

  // State management for user profile photo preview and mobile error
  const [photo, setPhoto] = useState(null);
  const [mobileError, setMobileError] = useState('');

  // Handle dynamic text and select input changes with 10-digit mobile restriction
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
      if (numericValue.length === 10) {
        setMobileError('');
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle profile photo upload and create local preview URL
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  // Handle multi-select interest buttons toggling
  const handleInterestClick = (interest) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter((item) => item !== interest)
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest]
      });
    }
  };

  // Handle volunteer registration form submission with mobile validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.mobile.length !== 10) {
      setMobileError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setMobileError('');
    alert("Volunteer registration form submitted successfully!");
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; }

        .join-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #fffaf5 0%, #ffffff 35%, #f6fbf5 100%);
          font-family: Arial, Helvetica, sans-serif;
          color: #222;
        }

        /* Tricolor top border line */
        .tricolor-line {
          display: flex;
          width: 100%;
          height: 5px;
        }
        .saffron-line { flex: 1; background: #f39a35; }
        .white-line { flex: 1; background: #ffffff; }
        .green-line { flex: 1; background: #2f8f46; }

        .join-container {
          width: 100%;
          max-width: 1250px;
          margin: auto;
          padding: 20px 20px 50px;
        }

        /* Breadcrumb navigation styling */
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #777;
          margin-bottom: 15px;
        }
        .breadcrumb-home { color: #172b70; font-weight: 700; }
        .breadcrumb-active { color: #d97719; font-weight: 700; }
        .breadcrumb-arrow { color: #aaa; font-size: 17px; }

        /* Centered hero banner section */
        .join-hero {
          position: relative;
          overflow: hidden;
          min-height: 160px;
          border-radius: 16px;
          padding: 30px 35px;
          margin-bottom: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(120deg, #fff3e3, #ffffff 50%, #f0f8f1);
          border: 1px solid #eeeeee;
          box-shadow: 0 5px 20px rgba(0,0,0,0.04);
        }

        .join-hero h1 {
          margin: 0;
          font-size: 32px;
          color: #172b70;
          font-weight: 800;
        }
        .join-hero h1 span { color: #d97719; }
        .join-hero p {
          margin: 12px 0 0;
          color: #62676d;
          font-size: 13px;
          line-height: 1.5;
        }

        /* Main registration form container card */
        .form-card {
          max-width: 750px;
          margin: 0 auto;
          background: #ffffff;
          padding: 35px 45px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
        }

        .form-section-title {
          color: #1e3a8a;
          font-size: 12px;
          font-weight: bold;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 8px;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .form-label {
          display: block;
          font-size: 11px;
          font-weight: bold;
          color: #475569;
          margin-bottom: 6px;
        }

        .form-input, .form-select {
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          font-size: 13px;
          outline: none;
          box-sizing: border-box;
          background: #fafafa;
        }

        .form-input:focus, .form-select:focus {
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
          padding: 10px 28px;
          border-radius: 25px;
          font-weight: bold;
          font-size: 13px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 10px rgba(217, 119, 6, 0.2);
          transition: 0.25s;
        }
        .submit-btn:hover { transform: translateY(-2px); }
      `}</style>

      <div className="join-page">
        {/* Tricolor bar */}
        <div className="tricolor-line">
          <div className="saffron-line"></div>
          <div className="white-line"></div>
          <div className="green-line"></div>
        </div>

        <div className="join-container">
          {/* Breadcrumb path */}
          <div className="breadcrumb">
            <span className="breadcrumb-home">Home</span>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-active">Join As Volunteer</span>
          </div>

          {/* Hero banner section */}
          <div className="join-hero">
            <div>
              <h1>Join As <span>Volunteer</span></h1>
              <p>Join as a volunteer and contribute to the nation-building journey of Janhit Lokshahi Party.</p>
            </div>
          </div>

          {/* Main registration form box */}
          <main className="form-card">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ color: '#b45309', fontSize: '22px', fontWeight: '800', margin: '0 0 4px 0' }}>VOLUNTEER REGISTRATION</h2>
              <p style={{ color: '#1e3a8a', fontSize: '13px', fontWeight: '700', margin: 0 }}>Fill out the details below to register</p>
            </div>

            {/* Profile photo upload section */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
              <label style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '85px', height: '85px', borderRadius: '50%', border: '2px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#f8fafc' }}>
                  {photo ? (
                    <img src={photo} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ textAlign: 'center', padding: '2px' }}>
                      <span style={{ fontSize: '16px' }}>📷</span>
                      <p style={{ fontSize: '9px', color: '#94a3b8', margin: '4px 0 0 0', fontWeight: '500' }}>Upload Photo</p>
                    </div>
                  )}
                </div>
                <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
              </label>
            </div>

            <form onSubmit={handleSubmit}>
              <h3 className="form-section-title">PERSONAL DETAILS</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label className="form-label">TITLE</label>
                  <select name="title" value={formData.title} onChange={handleChange} className="form-select">
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">FULL NAME</label>
                  <input type="text" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} className="form-input" required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label className="form-label">GENDER</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="form-select" required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">DATE OF BIRTH</label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="form-input" required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
                <div>
                  <label className="form-label">EMAIL ADDRESS</label>
                  <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                  <label className="form-label">MOBILE NUMBER</label>
                  <input type="tel" name="mobile" placeholder="Enter 10-digit mobile number" value={formData.mobile} onChange={handleChange} className="form-input" required />
                  {mobileError && <p className="error-text">{mobileError}</p>}
                </div>
              </div>

              <h3 className="form-section-title">VOLUNTEER INFORMATION</h3>

              <div style={{ marginBottom: '20px' }}>
                <label className="form-label">ADDRESS</label>
                <input type="text" name="address" placeholder="Enter your full address" value={formData.address} onChange={handleChange} className="form-input" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div>
                  <label className="form-label">STATE</label>
                  <select name="state" value={formData.state} onChange={handleChange} className="form-select">
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
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
                <div>
                  <label className="form-label">DISTRICT</label>
                  <input type="text" name="district" placeholder="Enter district" value={formData.district} onChange={handleChange} className="form-input" required />
                </div>
                <div>
                  <label className="form-label">PINCODE</label>
                  <input type="text" name="pincode" placeholder="6-digit Pincode" value={formData.pincode} onChange={handleChange} className="form-input" required />
                </div>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label className="form-label">AVAILABILITY</label>
                <select name="availability" value={formData.availability} onChange={handleChange} className="form-select" required>
                  <option value="">Select availability</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Weekends">Weekends Only</option>
                </select>
              </div>

              {/* Areas of interest selection buttons */}
              <div style={{ marginBottom: '30px' }}>
                <label className="form-label" style={{ marginBottom: '12px' }}>AREAS OF INTEREST</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '10px' }}>
                  {['Social Media', 'Event Management', 'Door-to-Door Campaign', 'Content Writing', 'Fundraising'].map((interest) => (
                    <button
                      type="button"
                      key={interest}
                      onClick={() => handleInterestClick(interest)}
                      style={{
                        padding: '9px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        border: '1px solid',
                        textAlign: 'center',
                        borderColor: formData.interests.includes(interest) ? '#b45309' : '#cbd5e1',
                        backgroundColor: formData.interests.includes(interest) ? '#b45309' : '#ffffff',
                        color: formData.interests.includes(interest) ? '#ffffff' : '#334155',
                        transition: '0.2s'
                      }}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form submit button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" className="submit-btn">
                  <span>SAVE</span>
                  <span>➔</span>
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default Join;