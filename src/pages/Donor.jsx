import { useState } from "react";
import "../Donor.css";

const Donor = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  // Form Field States
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const donationAmounts = [100, 500, 1000, 2000];

  // Razorpay Integration Logic
  const handlePayment = (e) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // 1. Check if Razorpay script is loaded
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    // Amount paise मध्ये द्यावी लागते (₹1 = 100 paise)
    const amountInPaise = Number(amount) * 100;

    // 2. Razorpay Options
    const options = {
      key: "rzp_test_00000000000000", // 👈 इथे तुमची Razorpay Key ID टाका (उदा. rzp_test_xxxxxx)
      amount: amountInPaise,
      currency: "INR",
      name: "Janhit Lokshahi Party", // राजकीय पक्षाचे नाव
      description: "Donation for Party & Community Support",
      image: "https://via.placeholder.com/150", // पक्षाचा लोगो URL

      // Form मधील माहिती Razorpay Popup मध्ये Auto-fill होईल
      prefill: {
        name: fullName,
        contact: mobile,
        email: email,
      },

      // सेलेक्ट केलेल्या पेमेंट मेथडनुसार Razorpay ऑप्शन्स हायलाइट करेल
      config: {
        display: {
          blocks: {
            banks: {
              name: "Pay using " + paymentMethod,
              instruments: [
                {
                  method: paymentMethod.toLowerCase(),
                },
              ],
            },
          },
          sequence: ["block.banks"],
          preferences: {
            show_default_blocks: true,
          },
        },
      },

      theme: {
        color: "#6256e8", // तुमच्या CSS मधील Primary थीम कलर (#6256e8)
      },

      // 3. पेमेंट यशस्वी झाल्यावर
      handler: function (response) {
        alert(
          `Thank you for your donation! \nPayment ID: ${response.razorpay_payment_id}`
        );

        // Form reset करा
        setFullName("");
        setMobile("");
        setEmail("");
        setAmount("");
      },

      modal: {
        ondismiss: function () {
          console.log("Payment window closed by user.");
        },
      },
    };

    // 4. Razorpay Modal उघडा
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="donor-page">
      {/* Header */}
      <header className="donor-header">
        <div className="donor-logo">
          <img 
      src="/logo.jpeg" 
      alt="Janhit Lokshahi Party Logo" 
      className="logo-img" 
    />
          <div>
            <h2>Janhit Lokshahi Party</h2>
            <p>Make a Difference</p>
          </div>
        </div>

        <div className="secure-text">🔒 Secure & Trusted</div>
      </header>

      {/* Main */}
      <main className="donor-container">
        {/* Left Section */}
        <section className="donor-content">
          <div className="donor-heading">
            <span>DONOR</span>
            <h1>Support Our Cause</h1>
            <p>
              Your contribution can make a real difference. Choose an amount and
              complete your donation securely.
            </p>
          </div>

          <form onSubmit={handlePayment}>
            {/* Donor Information */}
            <div className="donor-card">
              <div className="card-title">
                <div className="step">1</div>
                <div>
                  <h3>Donor Information</h3>
                  <p>Tell us a little about yourself</p>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    Full Name <b>*</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Mobile Number <b>*</b>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    maxLength="10"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  Email Address <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Donation Amount */}
            <div className="donor-card">
              <div className="card-title">
                <div className="step">2</div>
                <div>
                  <h3>Donation Amount</h3>
                  <p>Select how much you would like to donate</p>
                </div>
              </div>

              <div className="amount-options">
                {donationAmounts.map((value) => (
                  <button
                    type="button"
                    key={value}
                    className={
                      Number(amount) === value
                        ? "amount-btn active"
                        : "amount-btn"
                    }
                    onClick={() => setAmount(value)}
                  >
                    ₹{value.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>

              <div className="custom-amount">
                <label>Enter Custom Amount</label>
                <div className="amount-input">
                  <span>₹</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="donor-card">
              <div className="card-title">
                <div className="step">3</div>
                <div>
                  <h3>Payment Method</h3>
                  <p>Choose your preferred payment method</p>
                </div>
              </div>

              <div className="payment-options">
                <button
                  type="button"
                  className={
                    paymentMethod === "UPI"
                      ? "payment-option selected"
                      : "payment-option"
                  }
                  onClick={() => setPaymentMethod("UPI")}
                >
                  <span className="payment-icon">📱</span>
                  <div>
                    <strong>UPI</strong>
                    <small>Google Pay, PhonePe, Paytm</small>
                  </div>
                  <span className="check">
                    {paymentMethod === "UPI" ? "✓" : ""}
                  </span>
                </button>

                <button
                  type="button"
                  className={
                    paymentMethod === "CARD"
                      ? "payment-option selected"
                      : "payment-option"
                  }
                  onClick={() => setPaymentMethod("CARD")}
                >
                  <span className="payment-icon">💳</span>
                  <div>
                    <strong>Credit / Debit Card</strong>
                    <small>Visa, Mastercard, RuPay</small>
                  </div>
                  <span className="check">
                    {paymentMethod === "CARD" ? "✓" : ""}
                  </span>
                </button>

                <button
                  type="button"
                  className={
                    paymentMethod === "NETBANKING"
                      ? "payment-option selected"
                      : "payment-option"
                  }
                  onClick={() => setPaymentMethod("NETBANKING")}
                >
                  <span className="payment-icon">🏦</span>
                  <div>
                    <strong>Net Banking</strong>
                    <small>All major banks supported</small>
                  </div>
                  <span className="check">
                    {paymentMethod === "NETBANKING" ? "✓" : ""}
                  </span>
                </button>
              </div>
            </div>

            {/* Donate Button */}
            <button type="submit" className="donate-btn">
              Donate ₹
              {amount ? Number(amount).toLocaleString("en-IN") : "0"}
              <span>→</span>
            </button>

            <p className="payment-security">
              🔐 Your payment details are protected with secure encryption.
            </p>
          </form>
        </section>

        {/* Right Sidebar */}
        <aside className="donor-sidebar">
          <div className="summary-card">
            <div className="summary-header">
              <span>YOUR DONATION</span>
              <span className="heart">♥</span>
            </div>

            <div className="summary-amount">
              ₹{amount ? Number(amount).toLocaleString("en-IN") : "0"}
            </div>

            <p>
              Every contribution helps us support people and communities in
              need.
            </p>

            <div className="summary-line"></div>

            <div className="summary-row">
              <span>Donation</span>
              <strong>
                ₹{amount ? Number(amount).toLocaleString("en-IN") : "0"}
              </strong>
            </div>

            <div className="summary-row">
              <span>Processing Fee</span>
              <strong>₹0</strong>
            </div>

            <div className="summary-line"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>
                ₹{amount ? Number(amount).toLocaleString("en-IN") : "0"}
              </strong>
            </div>

            <div className="impact">
              <div className="impact-icon">🌱</div>
              <div>
                <h4>Your Impact</h4>
                <p>
                  Your donation helps us continue our mission and create
                  positive change.
                </p>
              </div>
            </div>
          </div>

          {/* Trust */}
          <div className="trust-card">
            <h3>Why Donate?</h3>
            <div className="trust-row">
              <span>✓</span>
              <p>Secure payment</p>
            </div>
            <div className="trust-row">
              <span>✓</span>
              <p>Transparent donations</p>
            </div>
            <div className="trust-row">
              <span>✓</span>
              <p>Instant confirmation</p>
            </div>
            <div className="trust-row">
              <span>✓</span>
              <p>Digital receipt</p>
            </div>
          </div>
        </aside>
      </main>

      <footer className="donor-footer">
        © 2026 Janhit Lokshahi Party • Secure Donation Platform
      </footer>
    </div>
  );
};

export default Donor;