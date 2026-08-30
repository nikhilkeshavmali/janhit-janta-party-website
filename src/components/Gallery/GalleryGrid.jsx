import React from "react";
import GalleryCard from "./GalleryCard";

const GalleryGrid = ({ items, mediaType }) => {
  if (items.length === 0) {
    return (
      <div className="gallery-grid">

        <div className="no-result">

          <div className="no-result-icon">
            {mediaType === "PHOTOS" ? "📷" : "▶️"}
          </div>

          <h3>
            No {mediaType === "PHOTOS" ? "Photos" : "Videos"} Found
          </h3>

          <p>
            No {mediaType === "PHOTOS" ? "photos" : "videos"} found
            for this category.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="gallery-grid">

      {items.map((item) => (
        <GalleryCard
          key={item.id}
          item={item}
          mediaType={mediaType}
        />
      ))}

    </div>
  );
};

export default GalleryGrid;