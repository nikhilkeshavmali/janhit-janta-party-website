import React from "react";
import "../assets/About.css";
import ashokraoImage from "../assets/images/ashokrao-alhat.jpg";

import {
  Award,
  Target,
  BookOpen,
  Calendar,
  MapPin,
  Heart,
  ShieldCheck,
  Users,
} from "lucide-react";

const About = () => {
  const journey = [
    {
      year: "1990",
      title: "Beginning of Social Movement",
      description:
        'Began his social movement journey in Mumbai and founded the "Bharatiya Kranti Sena" social organization.',
    },
    {
      year: "2004–2014",
      title: "Political Journey",
      description:
        "Served in various positions within the Indian National Congress.",
    },
    {
      year: "2009",
      title: "Lahujee Mahasangram",
      description:
        'Founded "Lahujee Mahasangram" to strengthen the organization and representation of the Matang and marginalized communities.',
    },
    {
      year: "2015–2016",
      title: "Janhit Lokshahi Party",
      description:
        'Undertook a tour across Maharashtra and founded the "Janhit Lokshahi Party" as a political platform focused on public welfare and social justice.',
    },
    {
      year: "2019",
      title: "Assembly Elections",
      description:
        "Fielded candidates in 88 Assembly constituencies across Maharashtra and contested the elections independently.",
    },
  ];

  const principles = [
    {
      icon: Heart,
      title: "Ideological Legacy",
      description:
        "The party follows the principles and ideals of Chhatrapati Shivaji Maharaj, Chhatrapati Shahu Maharaj, Mahatma Jyotiba Phule, Dr. Babasaheb Ambedkar, and Sahityaratna Annabhau Sathe.",
    },
    {
      icon: Users,
      title: "Equality & Secularism",
      description:
        "We believe in progressive values, respect for all religions, equality, and the overall development of marginalized, oppressed, Dalit, and Bahujan communities.",
    },
    {
      icon: Target,
      title: "Future Vision",
      description:
        "To strengthen the Janhit Lokshahi Party through local self-government institutions, Assembly, and Lok Sabha elections and promote transparent, accountable, and people-oriented governance.",
    },
  ];

  return (
    <section className="about-section">
      <div className="about-container">

        {/* ================= HEADER ================= */}
        <div className="about-header">
          <h1 className="main-title">
            Janhit Lokshahi Party
          </h1>

          <p className="header-desc">
            A democratic movement committed to public welfare and
            fighting for the rights and justice of the Bahujan community.
          </p>

          <div className="header-divider">
            <div className="divider-side" />
            <div className="divider-center" />
            <div className="divider-side" />
          </div>
        </div>


        {/* ================= PRESIDENT PROFILE ================= */}
        <div className="profile-card">
          <div className="profile-grid">

            {/* PHOTO / PROFILE SECTION */}
            <div className="profile-left">
              <div className="decor-circle-1" />
              <div className="decor-circle-2" />

              <div style={{ position: "relative", zIndex: 10, width: "100%" }}>
                <div className="profile-img-container">
                  <div className="img-glow" />

                  <img
                    src={ashokraoImage}
                    alt="Mr. Ashokrao Ramchandra Alhat"
                    className="profile-img"
                  />

                  <span className="president-badge">
                    Founder / National President
                  </span>
                </div>

                <h2 className="president-name">
                  Mr. Ashokrao Ramchandra Alhat
                </h2>

                <p className="president-title">
                  National President & Founder
                </p>

                <p className="president-party">
                  Janhit Lokshahi Party
                </p>

                {/* BASIC INFORMATION */}
                <div className="info-box">
                  <div className="info-grid">
                    
                    <div className="info-item">
                      <Calendar className="info-icon" />
                      <div>
                        <p className="info-label">Date of Birth</p>
                        <p className="info-value">2 April 1966</p>
                      </div>
                    </div>

                    <div className="info-item">
                      <BookOpen className="info-icon" />
                      <div>
                        <p className="info-label">Education</p>
                        <p className="info-value">B.A.</p>
                      </div>
                    </div>

                    <div className="info-item info-item-full">
                      <MapPin className="info-icon" />
                      <div>
                        <p className="info-label">Native Place</p>
                        <p className="info-value">
                          Dhandarfal Budruk, Taluka Sangamner / Rahata,
                          District Ahilyanagar, Maharashtra
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>


            {/* BIOGRAPHY & JOURNEY SECTION */}
            <div className="profile-right">
              <div className="bio-label-wrap">
                <div className="bio-icon-box">
                  <Award size={20} />
                </div>
                <span>Brief Introduction & Social Journey</span>
              </div>

              <h2 className="bio-heading">
                From a Farmer Family to Social Leadership...
              </h2>

              <div className="bio-text">
                <p>
                  Mr. Ashokrao Ramchandra Alhat was born on 2 April 1966
                  in Dhandarfal Budruk, Taluka Sangamner / Rahata,
                  District Ahilyanagar, Maharashtra. Coming from an ordinary
                  farming family, he completed his education through
                  struggle and hard work.
                </p>
                <p>
                  He actively participated in social movements and worked
                  for social justice, the rights of marginalized communities,
                  and the overall development of the Bahujan society.
                  His long social and political journey eventually led to
                  the establishment of the Janhit Lokshahi Party.
                </p>
              </div>

              {/* SOCIAL & POLITICAL JOURNEY TIMELINE */}
              <div className="timeline-section">
                <h3 className="timeline-heading">
                  Social & Political Journey
                </h3>

                <div className="timeline-container">
                  <div className="timeline-line" />
                  
                  <div className="timeline-items">
                    {journey.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-icon-wrap">
                          <ShieldCheck size={16} color="#ea580c" />
                        </div>

                        <div className="timeline-item-content">
                          <div className="timeline-meta">
                            <span className="timeline-year">{item.year}</span>
                            <h4 className="timeline-title">{item.title}</h4>
                          </div>
                          <p className="timeline-desc">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* QUOTE */}
              <div className="quote-box">
                <div className="quote-badge">
                  <span style={{ fontSize: "1.125rem", fontWeight: 700 }}>“</span>
                </div>
                <p className="quote-text">
                  "Democracy is not merely about voting once every five
                  years; our goal is to build an India where the voice of
                  the common citizen reaches the highest legislative
                  institutions."
                </p>
              </div>

            </div>

          </div>
        </div>


        {/* ================= IDEOLOGY HEADER ================= */}
        <div className="principles-header">
          <span className="badge">
            Our Ideology
          </span>

          <h2 className="principles-title">
            Our Principles & Values
          </h2>

          <p className="principles-desc">
            Our journey is based on the principles of public welfare,
            social justice, equality, and inclusive development.
          </p>
        </div>


        {/* ================= PRINCIPLE CARDS ================= */}
        <div className="principles-grid">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="principle-card">
                <div className="principle-icon-box">
                  <Icon size={28} />
                </div>

                <h3 className="principle-card-title">
                  {item.title}
                </h3>

                <p className="principle-card-desc">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>


        {/* ================= MOTTO ================= */}
        <div className="motto-banner">
          <div className="decor-circle-1" />
          <div className="decor-circle-2" />

          <div style={{ position: "relative", zIndex: 10 }}>
            <p className="motto-subtitle">
              Our Motto
            </p>

            <h2 className="motto-title">
              "For Public Welfare – For Public Happiness"
            </h2>

            <div className="motto-divider-wrap">
              <div className="motto-divider" />
            </div>

            <p className="motto-footer-text">
              "Committed to the Rights and Justice of the Bahujan Community"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;