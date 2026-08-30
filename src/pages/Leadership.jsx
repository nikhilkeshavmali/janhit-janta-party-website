import React, { useMemo, useState } from "react";
import "./leadership.css";

import image01 from "../assets/images/image01.png";
import image02 from "../assets/images/image02.png";
import image03 from "../assets/images/image03.png";
import image04 from "../assets/images/image04.png";
import image05 from "../assets/images/image05.png";
import image06 from "../assets/images/image06.png";
import image07 from "../assets/images/image07.png";
import image08 from "../assets/images/image08.png";
import image09 from "../assets/images/image09.png";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import image13 from "../assets/images/image13.png";
import image14 from "../assets/images/image14.png";
import image15 from "../assets/images/image15.png";
import image16 from "../assets/images/image16.png";
import image17 from "../assets/images/image17.png";
import image18 from "../assets/images/image18.png";
import image19 from "../assets/images/image19.png";
import image20 from "../assets/images/image20.png";

const leaders = [
  {
    id: "01",
    name: "श्री. अशोकराव रामचंद्र अल्हाट",
    position: "राष्ट्रीय अध्यक्ष",
    category: "राष्ट्रीय नेतृत्व",
    type: "National",
    image: image01,
    featured: true,
  },
  {
    id: "02",
    name: "डॉ. विनोद्राव मोरे",
    position: "प्रदेशाध्यक्ष",
    category: "प्रदेश नेतृत्व",
    type: "State",
    image: image02,
  },
  {
    id: "03",
    name: "मा. श्री. संतोषदादा चौधरी",
    position: "राष्ट्रीय उपाध्यक्ष",
    category: "राष्ट्रीय नेतृत्व",
    type: "National",
    image: image03,
  },
  {
    id: "04",
    name: "श्री. रामगामहाराज भाटोंबकर",
    position: "सल्लागार",
    category: "सल्लागार मंडळ",
    type: "Advisory",
    image: image04,
  },
  {
    id: "05",
    name: "सौ. अनिता जाधव",
    position: "खजिनदार",
    category: "पक्ष संघटन",
    type: "Organization",
    image: image05,
  },
  {
    id: "06",
    name: "श्री. अशोकराव धनामावकर",
    position: "महाराष्ट्र उपाध्यक्ष",
    category: "प्रदेश नेतृत्व",
    type: "State",
    image: image06,
  },
  {
    id: "07",
    name: "श्री. बाळासाहेब पाटले",
    position: "प्रदेश नेते",
    category: "प्रदेश नेतृत्व",
    type: "State",
    image: image07,
  },
  {
    id: "08",
    name: "श्री. महेश थोरात",
    position: "संघटक",
    category: "संघटन",
    type: "Organization",
    image: image08,
  },
  {
    id: "09",
    name: "श्री. संतोष नाडेकर",
    position: "जिल्हाध्यक्ष",
    category: "जिल्हा नेतृत्व",
    type: "District",
    image: image09,
  },
  {
    id: "10",
    name: "श्री. अजित सरोज",
    position: "सल्लागार",
    category: "सल्लागार मंडळ",
    type: "Advisory",
    image: image10,
  },
  {
    id: "11",
    name: "श्री. राजकुमार चंदन साहू",
    position: "अध्यक्ष",
    category: "नवी मुंबई",
    type: "District",
    image: image11,
  },
  {
    id: "12",
    name: "श्री. कचरू पाटील वाघ",
    position: "अध्यक्ष",
    category: "अहमदनगर विभाग",
    type: "District",
    image: image12,
  },
  {
    id: "13",
    name: "श्री. सचिन अल्हाट",
    position: "संघटक",
    category: "नवी मुंबई",
    type: "Organization",
    image: image13,
  },
  {
    id: "14",
    name: "श्री. विलास कदम",
    position: "जिल्हाध्यक्ष",
    category: "अहमदनगर",
    type: "District",
    image: image14,
  },
  {
    id: "15",
    name: "श्री. रविंद्र कांबळे",
    position: "युवा अध्यक्ष",
    category: "अहमदनगर",
    type: "Organization",
    image: image15,
  },
  {
    id: "16",
    name: "श्री. सत्यप्रकाश जैस्वार",
    position: "संघटक",
    category: "महाराष्ट्र",
    type: "Organization",
    image: image16,
  },
  {
    id: "17",
    name: "श्री. मंगळाव सलुंके",
    position: "प्रदेशाध्यक्ष",
    category: "महाराष्ट्र",
    type: "State",
    image: image17,
  },
  {
    id: "18",
    name: "श्री. कैलास जैस्वार",
    position: "संघटक",
    category: "मुंबई",
    type: "Organization",
    image: image18,
  },
  {
    id: "19",
    name: "श्री. संदिप पवार",
    position: "संघटक",
    category: "मुंबई",
    type: "Organization",
    image: image19,
  },
  {
    id: "20",
    name: "श्री. अरुण पवार",
    position: "अध्यक्ष",
    category: "नवी मुंबई",
    type: "District",
    image: image20,
  },
];

function LeaderCard({ leader }) {
  return (
    <article className="lp-card">
      <div className="lp-card-photo">
        <img src={leader.image} alt={leader.name} />

        <div className="lp-card-number">
          {leader.id}
        </div>

        <div className="lp-photo-bottom">
          <span>{leader.category}</span>
        </div>
      </div>

      <div className="lp-card-content">
        <div className="lp-card-position">
          <span></span>
          {leader.position}
        </div>

        <h3>{leader.name}</h3>

        <div className="lp-card-footer">
          <span>JANHIT LOKSHAHI PARTY</span>
          <b>→</b>
        </div>
      </div>
    </article>
  );
}

export default function Leadership() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = [
    { key: "All", label: "सर्व नेतृत्व" },
    { key: "National", label: "राष्ट्रीय" },
    { key: "State", label: "प्रदेश" },
    { key: "District", label: "जिल्हा" },
    { key: "Organization", label: "संघटन" },
    { key: "Advisory", label: "सल्लागार" },
  ];

  const president = leaders[0];

  const filteredLeaders = useMemo(() => {
    return leaders.filter((leader) => {
      const matchesFilter =
        activeFilter === "All" || leader.type === activeFilter;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        leader.name.toLowerCase().includes(searchText) ||
        leader.position.toLowerCase().includes(searchText) ||
        leader.category.toLowerCase().includes(searchText);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <main className="leadership-page">

      {/* =========================
          PAGE HERO
      ========================= */}
      <section className="lp-hero">

        <div className="lp-hero-bg"></div>

        <div className="lp-container lp-hero-inner">

          <div className="lp-breadcrumb">
            <span>मुख्यपृष्ठ</span>
            <b>/</b>
            <strong>नेतृत्व</strong>
          </div>

          <div className="lp-hero-content">

            <div className="lp-hero-tag">
              <span></span>
              JANHIT LOKSHAHI PARTY
            </div>

            <h1>
              आमचे <strong>नेतृत्व</strong>
            </h1>

            <p>
              जनहित, लोकशाही आणि जनसेवेच्या मूल्यांना
              केंद्रस्थानी ठेवून कार्य करणारे पक्षाचे सक्षम नेतृत्व.
            </p>

          </div>

          <div className="lp-hero-side">
            <div className="lp-vertical-text">
              LEADERSHIP
            </div>

            <div className="lp-hero-line"></div>
          </div>

        </div>
      </section>


      {/* =========================
          PRESIDENT
      ========================= */}
      <section className="lp-president-section">

        <div className="lp-container">

          <div className="lp-section-heading">
            <div>
              <span className="lp-eyebrow">
                NATIONAL LEADERSHIP
              </span>

              <h2>
                पक्षाचे <strong>राष्ट्रीय नेतृत्व</strong>
              </h2>
            </div>

            <p>
              पक्षाच्या विचारधारेचे प्रतिनिधित्व करणारे
              आणि संघटनेला दिशा देणारे नेतृत्व.
            </p>
          </div>


          <div className="lp-president">

            <div className="lp-president-image">

              <img
                src={president.image}
                alt={president.name}
              />

              <div className="lp-president-badge">
                <span>NATIONAL</span>
                <strong>01</strong>
              </div>

              <div className="lp-president-accent"></div>

            </div>


            <div className="lp-president-info">

              <span className="lp-president-label">
                NATIONAL PRESIDENT
              </span>

              <h2>{president.name}</h2>

              <div className="lp-title-line"></div>

              <h3>{president.position}</h3>

              <p>
                जनहित लोकशाही पार्टीच्या राष्ट्रीय नेतृत्वाची
                जबाबदारी सांभाळत पक्षाच्या संघटनात्मक
                वाटचालीस आणि जनहिताच्या कार्याला दिशा देणारे
                नेतृत्व.
              </p>

              <div className="lp-president-details">

                <div>
                  <span>पद</span>
                  <strong>राष्ट्रीय अध्यक्ष</strong>
                </div>

                <div>
                  <span>संघटना</span>
                  <strong>जनहित लोकशाही पार्टी</strong>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          LEADERS DIRECTORY
      ========================= */}
      <section className="lp-directory">

        <div className="lp-container">

          <div className="lp-directory-header">

            <div>
              <span className="lp-eyebrow">
                PARTY ORGANIZATION
              </span>

              <h2>
                आमचे <strong>पदाधिकारी</strong>
              </h2>
            </div>

            <div className="lp-member-count">
              <strong>{filteredLeaders.length}</strong>
              <span>पदाधिकारी</span>
            </div>

          </div>


          {/* SEARCH */}
          <div className="lp-tools">

            <div className="lp-search">

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />
                <path d="m20 20-4-4" />
              </svg>

              <input
                type="text"
                placeholder="पदाधिकारी शोधा..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>


            {/* FILTERS */}
            <div className="lp-filters">

              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={
                    activeFilter === filter.key
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveFilter(filter.key)
                  }
                >
                  {filter.label}
                </button>
              ))}

            </div>

          </div>


          {/* GRID */}
          {filteredLeaders.length > 0 ? (
            <div className="lp-grid">

              {filteredLeaders
                .filter((leader) => leader.id !== "01")
                .map((leader) => (
                  <LeaderCard
                    key={leader.id}
                    leader={leader}
                  />
                ))}

            </div>
          ) : (
            <div className="lp-no-results">
              <div>⌕</div>
              <h3>पदाधिकारी सापडला नाही</h3>
              <p>
                कृपया दुसरे नाव किंवा पद शोधून पहा.
              </p>
            </div>
          )}

        </div>
      </section>


      {/* =========================
          STATEMENT
      ========================= */}
      <section className="lp-statement">

        <div className="lp-statement-pattern"></div>

        <div className="lp-container">

          <span className="lp-statement-label">
            JANHIT LOKSHAHI PARTY
          </span>

          <h2>
            जनहित हेच <strong>ध्येय</strong>,
            <br />
            जनसेवा हीच <strong>दिशा.</strong>
          </h2>

          <div className="lp-statement-line"></div>

        </div>

      </section>

    </main>
  );
}