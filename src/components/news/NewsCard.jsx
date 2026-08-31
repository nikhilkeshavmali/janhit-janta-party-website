
// NEWS CARD COMPONENT


function NewsCard({ news, onReadMore }) {
  return (
    <article className="news-card">

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="news-image-wrapper">

        <img
          src={news.image}
          alt={news.title}
        />


        {/* Date badge */}

        <div className="news-date-box">

          <span className="date-day">
            {news.date.split(" ")[0]}
          </span>

          <span className="date-month">
            {news.date.split(" ")[1]}
          </span>

          <span className="date-year">
            {news.date.split(" ")[2]}
          </span>

        </div>

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="news-card-content">

        {/* Category */}

        <span className="news-category">
          {news.category}
        </span>


        {/* Title */}

        <h3>
          {news.title}
        </h3>


        {/* Description */}

        <p className="news-description">
          {news.description}
        </p>


        {/* Read More */}

        <button
          className="read-more-btn"
          onClick={() => onReadMore(news)}
        >
          वाचा पुढे →
        </button>

      </div>

    </article>
  );
}

export default NewsCard;