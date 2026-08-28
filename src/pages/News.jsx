import { useState } from "react";
import newsData from "../data/newsData";
import "../index.css";

function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  const featuredNews = [
    newsData[2],
    newsData[1],
    newsData[0],
  ];

  if (selectedNews) {
    return (
      <div className="news-detail-page">
        <div className="news-detail-container">

          <button
            className="back-button"
            onClick={() => setSelectedNews(null)}
          >
            ← Back to News
          </button>

          <img
            src={selectedNews.image}
            alt={selectedNews.title}
            className="detail-image"
          />

          <div className="detail-content">
            <span className="news-category">
              {selectedNews.category}
            </span>

            <h1>{selectedNews.title}</h1>

            <div className="detail-date">
              <span>📅</span>
              <span>{selectedNews.date}</span>
            
            </div>

            <p>{selectedNews.description}</p>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="news-page">

      {/* HEADER */}
      <section className="news-hero">
        <div>
          <span className="hero-label">JANHIT LOKSHAHI PARTY</span>
          <h1>News & Updates</h1>
          <p>
            Information about the social, organizational and
            political activities of Janhit Lokshahi Party.
          </p>
        </div>
      </section>

      {/* FEATURED NEWS */}
      <section className="featured-section">

        <div className="section-heading">
          <span>FEATURED</span>
          <h2>Featured News</h2>
        </div>

        <div className="featured-grid">

          {featuredNews.map((news) => (
            <article className="featured-card" key={news.id}>

              <div className="featured-image-wrapper">
                <img
                  src={news.image}
                  alt={news.title}
                />
              </div>

              <div className="featured-content">

                <span className="news-category">
                  {news.category}
                </span>

                <h3>{news.title}</h3>

                <div className="news-date">
                    <span>📅</span>
                    <span>{news.date}</span>
                </div>

                <p className="short-description">
                  {news.description}
                </p>

                <button
                  onClick={() => setSelectedNews(news)}
                >
                  READ MORE →
                </button>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="latest-section">

        <div className="section-heading">
          <span>LATEST UPDATES</span>
          <h2>News & Updates</h2>
        </div>

        <div className="news-grid">

          {newsData.map((news) => (
            <article className="news-card" key={news.id}>

              <div className="news-image-wrapper">
                <img
                  src={news.image}
                  alt={news.title}
                />
              </div>

              <div className="news-content">

                <span className="news-category">
                  {news.category}
                </span>

                <h3>{news.title}</h3>

                <div className="news-date">
                  <span>📅</span>
                  <span>{news.date}</span>
                </div>

                <p className="short-description">
                  {news.description}
                </p>

                <button
                  onClick={() => setSelectedNews(news)}
                >
                  READ MORE →
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>

    </div>
  );
}

export default News;