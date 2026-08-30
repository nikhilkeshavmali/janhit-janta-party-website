import React from "react";

const MediaTabs = ({
  activeMedia,
  setActiveMedia,
  setVisiblePhotos,
  setVisibleVideos,
}) => {
  return (
    <div className="media-tabs">

      <button
        className={
          activeMedia === "PHOTOS"
            ? "media-tab active-media-tab"
            : "media-tab"
        }
        onClick={() => {
          setActiveMedia("PHOTOS");
          setVisiblePhotos(4);
        }}
      >
        📷 Photos
      </button>

      <button
        className={
          activeMedia === "VIDEOS"
            ? "media-tab active-media-tab"
            : "media-tab"
        }
        onClick={() => {
          setActiveMedia("VIDEOS");
          setVisibleVideos(4);
        }}
      >
        ▶ Videos
      </button>

    </div>
  );
};

export default MediaTabs;