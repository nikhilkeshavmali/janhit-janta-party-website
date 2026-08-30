import React from "react";

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const GalleryCard = ({ item, mediaType }) => {
  return (
    <div className="gallery-card">

      <div className="image-container">

        <img
          src={item.image}
          alt={item.title}
        />

        <span className="category-badge">
          {item.category}
        </span>

        {mediaType === "PHOTOS" ? (
          <div className="view-overlay">
            <span className="view-icon">
              👁️
            </span>
          </div>
        ) : (
          <>
            <div className="play-overlay">
              <div className="play-button">
                ▶
              </div>
            </div>

            <span className="duration">
              {item.duration}
            </span>
          </>
        )}

      </div>

      <div className="card-content">

        <p className="date">
          📅 {formatDate(item.date)}
        </p>

        <h3>
          {item.title}
        </h3>

        <div className="card-bottom">
          <span>
            Public Awareness
          </span>

          <span className="arrow-icon">
            →
          </span>
        </div>

      </div>

    </div>
  );
};

export default GalleryCard;