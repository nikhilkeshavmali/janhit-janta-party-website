import React, { useState } from "react";
import { initiatives, gallery } from "../data";
import "../assets/initiatives.css";

const pillars = [
  ["01", "Justice", "Equality and social dignity"],
  ["02", "Agriculture", "Farmers and rural livelihoods"],
  ["03", "Empowerment", "Representation for marginalized groups"],
  ["04", "Governance", "Constitutional and transparent administration"]
];

function Initiatives() {
  const [activeId, setActiveId] = useState(null);

  const toggleCard = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <main className="initiatives-page">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="JanhitWorks home">
            <span className="brand-mark">J</span>
            <span>
              <strong>JanhitWorks</strong>
              <small>Initiatives & Vision</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#top">Overview</a>
            <a href="#initiatives">Initiatives</a>
            <a href="#vision">Vision</a>
            <a href="#gallery">Gallery</a>
          </nav>

          <a className="nav-cta" href="#initiatives">Explore</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">JANHIT LOKSHAHI PARTY</p>
            <h1>Initiatives built around <span>people, opportunity and justice.</span></h1>
            <p className="hero-lead">
              A focused presentation of the party's stated policy priorities,
              covering social justice, farmers' welfare, community empowerment,
              education, rural development, housing and governance.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#initiatives">View initiatives</a>
              <a className="button button-light" href="#vision">Core vision <span>↓</span></a>
            </div>
            <div className="source-note">
              <span>●</span> Content and visuals are based on the provided party publication.
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img src={gallery[0].src} alt="Historical public-life image from the provided publication" />
              <div className="image-caption">
                <span>From the provided publication</span>
                <strong>Public life & political journey</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars" aria-label="Key policy pillars">
        <div className="container pillars-grid">
          {pillars.map(([num, title, sub]) => (
            <article className="pillar" key={num}>
              <span>{num}</span>
              <div><strong>{title}</strong><p>{sub}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="initiatives">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">POLICY PRIORITIES</p>
              <h2>What the initiatives focus on</h2>
            </div>
            <p>
              Each card turns the publication's broad policy statements into a
              clear, web-friendly summary while retaining the original themes.
            </p>
          </div>

          <div className="initiative-grid">
            {initiatives.map((item) => {
              const isOpen = activeId === item.id;
              return (
                <article className={`initiative-card ${item.accent} ${isOpen ? "is-open" : ""}`} key={item.id}>
                  <div className="card-topline">
                    <span className="card-number">{item.id}</span>
                    <span className="card-dot" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>

                  <button
                    className="details-toggle"
                    onClick={() => toggleCard(item.id)}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? "Hide details" : "Read policy points"}
                    <span>{isOpen ? "↑" : "→"}</span>
                  </button>

                  <div className={`details ${isOpen ? "details-open" : ""}`}>
                    <ul>
                      {item.details.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="vision-section" id="vision">
        <div className="container vision-grid">
          <div>
            <p className="eyebrow">CORE VISION</p>
            <h2>A constitutional, inclusive and people-first direction.</h2>
            <p className="vision-copy">
              The publication presents a vision influenced by social reform and
              constitutional values, with an emphasis on freedom, equality,
              fraternity, social justice and empowerment of marginalized groups.
            </p>
            <div className="vision-tags">
              <span>Freedom</span><span>Equality</span><span>Fraternity</span><span>Social Justice</span>
            </div>
          </div>

          <div className="inspiration-card">
            <span className="inspiration-kicker">INSPIRATION MENTIONED IN THE PUBLICATION</span>
            <div className="inspiration-list">
              <div>Chhatrapati Shivaji Maharaj</div>
              <div>Rajarshi Shahu Maharaj</div>
              <div>Mahatma Jyotiba Phule</div>
              <div>Dr. Babasaheb Ambedkar</div>
              <div>Annabhau Sathe</div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-strip">
        <div className="container feature-grid">
          <div className="feature-image">
            <img src={gallery[1].src} alt="Workers and public mobilization image from the provided publication" />
          </div>
          <div className="feature-copy">
            <p className="eyebrow">WORKERS & COMMUNITY</p>
            <h2>From policy priorities to public action.</h2>
            <p>
              The supplied publication includes documentation of public,
              workers' and community-oriented activities. This section uses
              the source imagery as a visual bridge between the policy cards
              and the historical record presented in the booklet.
            </p>
            <a href="#gallery" className="text-link">See source visuals <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="section-head compact">
            <div>
              <p className="eyebrow">SOURCE VISUALS</p>
              <h2>Selected imagery from the provided PDF</h2>
            </div>
          </div>
          <div className="gallery-grid">
            {gallery.map((image) => (
              <figure key={image.src} className="gallery-card">
                <img src={image.src} alt={image.title} loading="lazy" />
                <figcaption>{image.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-inner">
          <div>
            <p className="eyebrow">JANHITWORKS</p>
            <h2>Understand the initiatives. Explore the vision.</h2>
          </div>
          <a className="button button-dark" href="#top">Back to top ↑</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div><strong>JanhitWorks</strong><span>Initiatives & Vision</span></div>
          
        </div>
      </footer>
    </main>
  );
}

export default Initiatives;
