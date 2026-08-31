
function FeaturedNews({ news, onReadMore, variant = "large" }) {
  return (
    <article
      className={`featured-news-card ${
        variant === "compact" ? "featured-compact" : "featured-large"
      }`}
    >

      {/* =====================================================
          IMAGE SECTION
      ====================================================== */}

      <div className="featured-image-wrapper">

        <img
          src={news.image}
          alt={news.title}
        />

        {/* Date badge फक्त compact card मध्ये */}
        {variant === "compact" && (
          <div className="featured-date-badge">

            <span className="featured-day">
              {news.date.split(" ")[0]}
            </span>

            <span className="featured-month">
              {news.date.split(" ")[1]}
            </span>

            <span className="featured-year">
              {news.date.split(" ")[2]}
            </span>

          </div>
        )}

      </div>


      {/* =====================================================
          CONTENT SECTION
      ====================================================== */}

      <div className="featured-news-content">

        {/* Category */}

        <span className="featured-category">
          {news.category}
        </span>


        {/* Title */}

        <h2>
          {news.title}
        </h2>


        {/* Date */}

        <div className="featured-date">
          📅 {news.date}
        </div>


        {/* Description */}

        <p>
          {news.description}
        </p>


        {/* Read More Button */}

        <button
          className="featured-read-more"
          onClick={() => onReadMore(news)}
        >
          वाचा पुढे →
        </button>

      </div>

    </article>
  );
}

export default FeaturedNews;