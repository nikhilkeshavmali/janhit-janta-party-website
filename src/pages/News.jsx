import partyLogo from "../assets/images/logo.png";
import { useState } from "react";
import newsData from "../data/newsData";
import NewsCard from "../components/news/NewsCard";
import FeaturedNews from "../components/news/FeaturedNews";
import "../assets/News.css";

function News() {
  const [selectedNews, setSelectedNews] = useState(null);
  const mainFeaturedNews = newsData[0];
  const sideFeaturedNews = [
    newsData[1],
    newsData[2],
  ];

  if (selectedNews) {

    return (
      <main className="news-detail-page">

        <div className="news-detail-container">

          {/* ===============================================
              BACK BUTTON
          ================================================ */}

          <button
            className="back-button"
            onClick={() => setSelectedNews(null)}
          >
            ← Back to News
          </button>


          {/* ===============================================
              NEWS IMAGE
          ================================================ */}

          <img
            src={selectedNews.image}
            alt={selectedNews.title}
            className="detail-image"
          />


          {/* ===============================================
              DETAIL CONTENT
          ================================================ */}

          <div className="detail-content">

            {/* Category */}

            <span className="news-category">
              {selectedNews.category}
            </span>


            {/* Title */}

            <h1>
              {selectedNews.title}
            </h1>


            {/* =============================================
                META INFORMATION
            ============================================== */}

            <div className="detail-meta">

              {/* Date */}

              <span>
                📅 {selectedNews.date}
              </span>


              {/* Location */}

              {selectedNews.location && (
                <span>
                  📍 {selectedNews.location}
                </span>
              )}


              {/* Reading Time */}

              {selectedNews.readTime && (
                <span>
                  ⏱ {selectedNews.readTime}
                </span>
              )}

            </div>


            {/* =============================================
                FULL NEWS CONTENT
            ============================================== */}

            <p>
              {selectedNews.content ||
                selectedNews.description}
            </p>


            {/* =============================================
                SOURCE
                Source available असल्यास दाखवतो.
            ============================================== */}

            {selectedNews.source && (
              <div className="news-source">
                Source: {selectedNews.source}
              </div>
            )}

          </div>

        </div>

      </main>
    );
  }


  // =======================================================
  // MAIN NEWS PAGE
  // =======================================================

  return (

    <main className="news-page">


      {/* ===================================================
          HERO SECTION
      ==================================================== */}

      <section className="news-hero">

        <div className="news-hero-content">

  {/* =====================================================
      PARTY BRANDING
  ====================================================== */}

  <div className="news-brand">

    {/* Actual Party Logo */}

    <img
      src={partyLogo}
      alt="जनहित लोकशाही पार्टी"
      className="news-logo"
    />


    {/* Party Name */}

    <span className="hero-label">
      JANHIT LOKSHAHI PARTY
    </span>

  </div>


  {/* =====================================================
      MAIN NEWS TITLE
  ====================================================== */}

  <h1>
    NEWS <span>&</span> UPDATES
  </h1>


  {/* =====================================================
      DESCRIPTION
  ====================================================== */}

  <p>
    जनहित लोकशाही पार्टीच्या सामाजिक,
    संघटनात्मक आणि राजकीय उपक्रमांची
    अधिकृत माहिती.
  </p>

</div>


        {/* =================================================
            DECORATIVE SHAPES
        ================================================== */}

        <div className="hero-decoration hero-orange"></div>

        <div className="hero-decoration hero-green"></div>

      </section>



      {/* ===================================================
          FEATURED NEWS SECTION
      ==================================================== */}

      <section className="featured-section">


        {/* Section Heading */}

        <div className="section-heading">

          <span>
            FEATURED NEWS
          </span>

          <h2>
            प्रमुख बातम्या
          </h2>

        </div>


        {/* =================================================
            MAGAZINE LAYOUT
        ================================================== */}

        <div className="featured-magazine">


          {/* ===============================================
              MAIN FEATURED NEWS
          ================================================ */}

          <div className="featured-main">

            <FeaturedNews
              news={mainFeaturedNews}
              onReadMore={setSelectedNews}
              variant="large"
            />

          </div>


          {/* ===============================================
              SIDE FEATURED NEWS
          ================================================ */}

          <div className="featured-side">

            {sideFeaturedNews.map((news) => (

              <FeaturedNews
                key={news.id}
                news={news}
                onReadMore={setSelectedNews}
                variant="compact"
              />

            ))}

          </div>

        </div>

      </section>



      {/* ===================================================
          LATEST NEWS SECTION
      ==================================================== */}

      <section className="latest-section">


        {/* Section Heading */}

        <div className="section-heading">

          <span>
            LATEST NEWS & UPDATES
          </span>

          <h2>
            नवीनतम बातम्या आणि अपडेट्स
          </h2>

        </div>


        {/* =================================================
            NEWS GRID
        ================================================== */}

        <div className="news-grid">

          {newsData.slice(3).map((news) => (

            <NewsCard
              key={news.id}
              news={news}
              onReadMore={setSelectedNews}
            />

          ))}

        </div>

      </section>

    </main>
  );
}


// =========================================================
// EXPORT
// =========================================================

export default News;