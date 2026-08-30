import React from "react";

const GalleryFilters = ({
  searchInput,
  setSearchInput,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  handleSearch,
}) => {
  return (
    <div className="filter-box">

      <div className="search-field">
        <label>Search by Hashtag or Keyword</label>

        <div className="input-wrapper">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="# Search by Hashtag or Keyword"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
      </div>

      <div className="date-field">
        <label>From Date</label>

        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>

      <div className="date-field">
        <label>To Date</label>

        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      <button
        className="search-button"
        onClick={handleSearch}
      >
        🔍 Search
      </button>

    </div>
  );
};

export default GalleryFilters;