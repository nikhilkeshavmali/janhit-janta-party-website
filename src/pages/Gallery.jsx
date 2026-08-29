
import React, { useState } from "react";

// GALLERY DATA
const galleryData = [
  // EVENTS
  {
    id: 1,
    title: "Community Awareness Drive",
    date: "2024-10-24",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=1",
  },
  {
    id: 2,
    title: "Educational Workshop",
    date: "2025-01-05",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=2",
  },
  {
    id: 3,
    title: "Youth Mobilization Camp",
    date: "2025-03-02",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=3",
  },
  {
    id: 4,
    title: "Public Awareness Campaign",
    date: "2025-05-20",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=4",
  },
  {
    id: 5,
    title: "Community Meeting",
    date: "2025-06-15",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=5",
  },
  {
    id: 6,
    title: "Village Awareness Program",
    date: "2025-07-10",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=6",
  },
  {
    id: 7,
    title: "Youth Development Event",
    date: "2025-08-12",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=7",
  },
  {
    id: 8,
    title: "Social Awareness Event",
    date: "2025-08-20",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=8",
  },
  {
    id: 9,
    title: "Public Gathering",
    date: "2025-09-02",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=9",
  },
  {
    id: 10,
    title: "Community Development Program",
    date: "2025-09-15",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=10",
  },

  // FOUNDERS
  {
    id: 11,
    title: "Founder Community Interaction",
    date: "2024-11-18",
    category: "FOUNDERS",
    image: "https://picsum.photos/600/450?random=11",
  },
  {
    id: 12,
    title: "Founder Village Visit",
    date: "2025-01-20",
    category: "FOUNDERS",
    image: "https://picsum.photos/600/450?random=12",
  },
  {
    id: 13,
    title: "Founder Public Meeting",
    date: "2025-03-15",
    category: "FOUNDERS",
    image: "https://picsum.photos/600/450?random=13",
  },
  {
    id: 14,
    title: "Founder Development Initiative",
    date: "2025-05-12",
    category: "FOUNDERS",
    image: "https://picsum.photos/600/450?random=14",
  },
  {
    id: 15,
    title: "Founder Youth Interaction",
    date: "2025-07-08",
    category: "FOUNDERS",
    image: "https://picsum.photos/600/450?random=15",
  },
  {
    id: 16,
    title: "Founder Community Program",
    date: "2025-08-22",
    category: "FOUNDERS",
    image: "https://picsum.photos/600/450?random=16",
  },

  // CARTOONS
  {
    id: 17,
    title: "Social Awareness Cartoon",
    date: "2025-01-10",
    category: "CARTOONS",
    image: "https://picsum.photos/600/450?random=17",
  },
  {
    id: 18,
    title: "Public Awareness Illustration",
    date: "2025-02-12",
    category: "CARTOONS",
    image: "https://picsum.photos/600/450?random=18",
  },
  {
    id: 19,
    title: "Youth Awareness Cartoon",
    date: "2025-04-18",
    category: "CARTOONS",
    image: "https://picsum.photos/600/450?random=19",
  },
  {
    id: 20,
    title: "Community Message Illustration",
    date: "2025-06-25",
    category: "CARTOONS",
    image: "https://picsum.photos/600/450?random=20",
  },
  {
    id: 21,
    title: "Awareness Campaign Cartoon",
    date: "2025-08-05",
    category: "CARTOONS",
    image: "https://picsum.photos/600/450?random=21",
  },
  {
    id: 22,
    title: "Social Message Artwork",
    date: "2025-08-25",
    category: "CARTOONS",
    image: "https://picsum.photos/600/450?random=22",
  },

  // 3D TEMPLE WALL
  {
    id: 23,
    title: "Traditional Temple Wall",
    date: "2025-01-15",
    category: "3D TEMPLE WALL",
    image: "https://picsum.photos/600/450?random=23",
  },
  {
    id: 24,
    title: "Temple Heritage Design",
    date: "2025-03-20",
    category: "3D TEMPLE WALL",
    image: "https://picsum.photos/600/450?random=24",
  },
  {
    id: 25,
    title: "Cultural Wall Artwork",
    date: "2025-05-18",
    category: "3D TEMPLE WALL",
    image: "https://picsum.photos/600/450?random=25",
  },
  {
    id: 26,
    title: "Heritage Temple Artwork",
    date: "2025-07-22",
    category: "3D TEMPLE WALL",
    image: "https://picsum.photos/600/450?random=26",
  },
  {
    id: 27,
    title: "Traditional Architecture",
    date: "2025-08-18",
    category: "3D TEMPLE WALL",
    image: "https://picsum.photos/600/450?random=27",
  },
  {
    id: 28,
    title: "Cultural Heritage Wall",
    date: "2025-09-10",
    category: "3D TEMPLE WALL",
    image: "https://picsum.photos/600/450?random=28",
  },

  // FAN ZONE
  {
    id: 29,
    title: "Fan Zone Celebration",
    date: "2025-01-26",
    category: "FAN ZONE",
    image: "https://picsum.photos/600/450?random=29",
  },
  {
    id: 30,
    title: "Youth Fan Gathering",
    date: "2025-03-10",
    category: "FAN ZONE",
    image: "https://picsum.photos/600/450?random=30",
  },
  {
    id: 31,
    title: "Community Celebration",
    date: "2025-05-25",
    category: "FAN ZONE",
    image: "https://picsum.photos/600/450?random=31",
  },
  {
    id: 32,
    title: "Youth Support Event",
    date: "2025-07-15",
    category: "FAN ZONE",
    image: "https://picsum.photos/600/450?random=32",
  },
  {
    id: 33,
    title: "Public Celebration",
    date: "2025-08-15",
    category: "FAN ZONE",
    image: "https://picsum.photos/600/450?random=33",
  },
  {
    id: 34,
    title: "Community Fan Meet",
    date: "2025-09-20",
    category: "FAN ZONE",
    image: "https://picsum.photos/600/450?random=34",
  },
];

// VIDEO DATA
const videoData = [
  {
    id: 1,
    title: "Community Awareness Campaign",
    date: "2025-05-20",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=40",
    duration: "02:45",
  },
  {
    id: 2,
    title: "Youth Awareness Program",
    date: "2025-06-12",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=41",
    duration: "04:20",
  },
  {
    id: 3,
    title: "Public Development Event",
    date: "2025-07-18",
    category: "FOUNDERS",
    image: "https://picsum.photos/600/450?random=42",
    duration: "03:15",
  },
  {
    id: 4,
    title: "Community Celebration",
    date: "2025-08-10",
    category: "FAN ZONE",
    image: "https://picsum.photos/600/450?random=43",
    duration: "05:30",
  },
  {
    id: 5,
    title: "Social Awareness Program",
    date: "2025-08-20",
    category: "EVENTS",
    image: "https://picsum.photos/600/450?random=44",
    duration: "03:50",
  },
];

// CATEGORY LIST
const categories = [
  "EVENTS",
  "FOUNDERS",
  "CARTOONS",
  "3D TEMPLE WALL",
  "FAN ZONE",
];

// GALLERY COMPONENT
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("EVENTS");
  const [activeMedia, setActiveMedia] = useState("PHOTOS");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [visiblePhotos, setVisiblePhotos] = useState(4);
  const [visibleVideos, setVisibleVideos] = useState(4);

  // SEARCH
  const handleSearch = () => {
    setSearchTerm(searchInput);
    setVisiblePhotos(4);
    setVisibleVideos(4);
  };

  // FILTER PHOTOS
  const filteredPhotos = galleryData.filter((item) => {
    const matchesCategory = item.category === activeCategory;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFromDate =
      fromDate === "" || item.date >= fromDate;

    const matchesToDate =
      toDate === "" || item.date <= toDate;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesFromDate &&
      matchesToDate
    );
  });

  // FILTER VIDEOS
  const filteredVideos = videoData.filter((item) => {
    const matchesCategory = item.category === activeCategory;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // DATE FILTER ADDED FOR VIDEOS
    const matchesFromDate =
      fromDate === "" || item.date >= fromDate;

    const matchesToDate =
      toDate === "" || item.date <= toDate;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesFromDate &&
      matchesToDate
    );
  });

  // FORMAT DATE
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // CATEGORY CHANGE
  const changeCategory = (category) => {
    setActiveCategory(category);
    setSearchInput("");
    setSearchTerm("");
    setFromDate("");
    setToDate("");
    setVisiblePhotos(4);
    setVisibleVideos(4);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        .gallery-page {
          min-height: 100vh;
          background: linear-gradient(
            180deg,
            #fffaf5 0%,
            #ffffff 35%,
            #f6fbf5 100%
          );
          font-family: Arial, Helvetica, sans-serif;
          color: #222;
        }

        .tricolor-line {
          display: flex;
          width: 100%;
          height: 5px;
        }

        .saffron-line {
          flex: 1;
          background: #f39a35;
        }

        .white-line {
          flex: 1;
          background: #ffffff;
        }

        .green-line {
          flex: 1;
          background: #2f8f46;
        }

        .gallery-container {
          width: 100%;
          max-width: 1250px;
          margin: auto;
          padding: 25px 25px 60px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          font-size: 12px;
          color: #777;
          margin-bottom: 20px;
        }

        .breadcrumb-home {
          color: #172b70;
          font-weight: 700;
        }

        .breadcrumb-active {
          color: #d97719;
          font-weight: 700;
        }

        .breadcrumb-arrow {
          color: #aaa;
          font-size: 17px;
        }

        .gallery-hero {
          position: relative;
          overflow: hidden;
          min-height: 245px;
          border-radius: 20px;
          padding: 42px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          background: linear-gradient(
            120deg,
            #fff3e3,
            #ffffff 50%,
            #f0f8f1
          );
          border: 1px solid #eeeeee;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }

        .gallery-hero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 5px;
          background: linear-gradient(
            to right,
            #f39a35 0%,
            #f39a35 33%,
            #ffffff 33%,
            #ffffff 66%,
            #2f8f46 66%,
            #2f8f46 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 5;
          max-width: 700px;
        }

        .hero-badge {
          display: inline-block;
          padding: 7px 13px;
          border-radius: 30px;
          background: rgba(243,154,53,0.10);
          color: #d97719;
          border: 1px solid rgba(243,154,53,0.25);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.6px;
          margin-bottom: 13px;
        }

        .gallery-hero h1 {
          margin: 0;
          font-size: 42px;
          line-height: 1.15;
          color: #172b70;
          font-weight: 800;
        }

        .gallery-hero h1 span {
          color: #d97719;
        }

        .gallery-hero p {
          margin: 13px 0 0;
          color: #62676d;
          font-size: 14px;
          line-height: 1.7;
        }

        .hero-circle-one {
          position: absolute;
          width: 240px;
          height: 240px;
          right: -75px;
          top: -95px;
          border-radius: 50%;
          background: rgba(243,154,53,0.12);
        }

        .hero-circle-two {
          position: absolute;
          width: 180px;
          height: 180px;
          right: 110px;
          bottom: -115px;
          border-radius: 50%;
          background: rgba(47,143,70,0.10);
        }

        .filter-box {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: flex-end;
          padding: 25px 20px 20px;
          margin-bottom: 28px;
          background: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 15px;
          box-shadow: 0 5px 18px rgba(0,0,0,0.045);
        }

        .filter-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: 25px;
          right: 25px;
          height: 3px;
          border-radius: 0 0 5px 5px;
          background: linear-gradient(
            to right,
            #f39a35 0%,
            #f39a35 33%,
            #ffffff 33%,
            #ffffff 66%,
            #2f8f46 66%
          );
        }

        .search-field {
          flex: 1 1 300px;
        }

        .date-field {
          flex: 0 1 170px;
        }

        .filter-box label {
          display: block;
          font-size: 10px;
          font-weight: 700;
          color: #172b70;
          margin-bottom: 6px;
        }

        .input-wrapper {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 13px;
          top: 50%;
          transform: translateY(-50%);
          color: #d97719;
        }

        .input-wrapper input {
          width: 100%;
          padding: 12px 12px 12px 38px;
          border: 1px solid #dddddd;
          border-radius: 8px;
          background: #fafafa;
          outline: none;
          font-size: 12px;
          transition: 0.2s;
        }

        .date-field input {
          width: 100%;
          padding: 11px;
          border: 1px solid #dddddd;
          border-radius: 8px;
          background: #fafafa;
          outline: none;
          font-size: 12px;
          transition: 0.2s;
        }

        .input-wrapper input:focus,
        .date-field input:focus {
          border-color: #d97719;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(243,154,53,0.10);
        }

        .search-button {
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #e58b2c, #d97719);
          color: white;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s;
          box-shadow: 0 5px 13px rgba(217,119,25,0.18);
        }

        .search-button:hover {
          transform: translateY(-2px);
        }

        .category-wrapper {
          background: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 13px;
          padding: 5px;
          margin-bottom: 25px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.035);
        }

        .category-scroll {
          display: flex;
          gap: 3px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .category-scroll::-webkit-scrollbar {
          display: none;
        }

        .category-button {
          background: transparent;
          border: none;
          padding: 12px 17px;
          color: #777;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
          cursor: pointer;
          border-radius: 8px;
          transition: 0.25s;
        }

        .category-button:hover {
          background: #fff4e6;
          color: #d97719;
        }

        .active-category {
          background: linear-gradient(135deg, #fff1df, #fff8f0);
          color: #d97719;
          box-shadow: inset 0 -3px 0 #e58b2c;
        }

        .media-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: 28px 0;
        }

        .media-tab {
          padding: 10px 27px;
          border: 1px solid #dddddd;
          border-radius: 30px;
          background: white;
          color: #555;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s;
        }

        .active-media-tab {
          background: linear-gradient(135deg, #172b70, #263f91);
          color: white;
          border-color: #172b70;
          box-shadow: 0 5px 14px rgba(23,43,112,0.18);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section-header h2 {
          margin: 0;
          font-size: 21px;
          color: #172b70;
        }

        .section-header p {
          margin: 5px 0 0;
          color: #999;
          font-size: 10px;
        }

        .count-badge {
          padding: 7px 13px;
          border-radius: 30px;
          background: #f1f7f2;
          color: #2f7d41;
          border: 1px solid #dcecdf;
          font-size: 10px;
          font-weight: 700;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .gallery-card {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 15px;
          box-shadow: 0 5px 18px rgba(0,0,0,0.055);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .gallery-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, #f39a35, #ffffff, #2f8f46);
          z-index: 10;
        }

        .gallery-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 32px rgba(0,0,0,0.11);
        }

        .image-container {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: #eeeeee;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s;
        }

        .gallery-card:hover .image-container img {
          transform: scale(1.07);
        }

        .image-container::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.40),
            transparent 55%
          );
          pointer-events: none;
        }

        .category-badge {
          position: absolute;
          top: 13px;
          right: 13px;
          z-index: 8;
          padding: 5px 9px;
          border-radius: 20px;
          background: rgba(255,255,255,0.95);
          color: #d97719;
          font-size: 8px;
          font-weight: 800;
          box-shadow: 0 3px 8px rgba(0,0,0,0.12);
        }

        .view-overlay {
          position: absolute;
          inset: 0;
          z-index: 7;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(23,43,112,0.42);
          opacity: 0;
          transition: 0.3s;
        }

        .gallery-card:hover .view-overlay {
          opacity: 1;
        }

        .view-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.20);
        }

        .card-content {
          padding: 15px;
        }

        .card-content .date {
          margin: 0 0 7px;
          color: #3b8750;
          font-size: 10px;
          font-weight: 700;
        }

        .card-content h3 {
          margin: 0;
          color: #282828;
          font-size: 14px;
          line-height: 1.45;
          min-height: 40px;
        }

        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 13px;
          padding-top: 10px;
          border-top: 1px solid #eeeeee;
        }

        .card-bottom span:first-child {
          color: #999;
          font-size: 9px;
        }

        .arrow-icon {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          background: #fff4e6;
          color: #d97719;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: 0.25s;
        }

        .gallery-card:hover .arrow-icon {
          background: #e58b2c;
          color: #ffffff;
        }

        .play-overlay {
          position: absolute;
          inset: 0;
          z-index: 7;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(23,43,112,0.20);
        }

        .play-button {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e58b2c, #d97719);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          padding-left: 3px;
          box-shadow: 0 7px 20px rgba(0,0,0,0.22);
          transition: 0.3s;
        }

        .gallery-card:hover .play-button {
          transform: scale(1.12);
        }

        .duration {
          position: absolute;
          right: 10px;
          bottom: 10px;
          z-index: 9;
          padding: 4px 7px;
          border-radius: 5px;
          background: rgba(0,0,0,0.78);
          color: #ffffff;
          font-size: 9px;
          font-weight: 700;
        }

        .no-result {
          grid-column: 1 / -1;
          text-align: center;
          padding: 65px 20px;
          background: #ffffff;
          border: 1px dashed #dddddd;
          border-radius: 15px;
        }

        .no-result-icon {
          font-size: 42px;
          margin-bottom: 10px;
        }

        .no-result h3 {
          margin: 0 0 5px;
          color: #172b70;
        }

        .no-result p {
          margin: 0;
          color: #888;
          font-size: 12px;
        }

        .load-more-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .load-more-button {
          padding: 12px 30px;
          border: none;
          border-radius: 30px;
          background: linear-gradient(135deg, #2f8f46, #277a3b);
          color: white;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 6px 17px rgba(47,143,70,0.20);
          transition: 0.25s;
        }

        .load-more-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 9px 22px rgba(47,143,70,0.28);
        }

        @media (max-width: 1000px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .gallery-container {
            padding: 18px 14px 45px;
          }

          .gallery-hero {
            padding: 30px 24px;
            min-height: 210px;
            border-radius: 16px;
          }

          .gallery-hero h1 {
            font-size: 31px;
          }

          .gallery-hero p {
            font-size: 12px;
          }

          .filter-box {
            flex-direction: column;
            align-items: stretch;
          }

          .search-field,
          .date-field {
            width: 100%;
            flex: 1 1 auto;
          }

          .search-button {
            width: 100%;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .image-container {
            height: 220px;
          }

          .section-header h2 {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="gallery-page">
        <div className="tricolor-line">
          <div className="saffron-line"></div>
          <div className="white-line"></div>
          <div className="green-line"></div>
        </div>

        <div className="gallery-container">
          <div className="breadcrumb">
            <span className="breadcrumb-home">Home</span>
            <span className="breadcrumb-arrow">›</span>
            <span>Gallery</span>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-active">
              {activeCategory}
            </span>
          </div>

          <div className="gallery-hero">
            <div className="hero-content">
              <span className="hero-badge">
                🇮🇳 OUR JOURNEY • OUR MEMORIES
              </span>

              <h1>
                Photo <span>Gallery</span>
              </h1>

              <p>
                Explore moments from our initiatives,
                public events, community programs,
                cultural activities and awareness campaigns.
              </p>
            </div>

            <div className="hero-circle-one"></div>
            <div className="hero-circle-two"></div>
          </div>

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

          <div className="category-wrapper">
            <div className="category-scroll">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "category-button active-category"
                      : "category-button"
                  }
                  onClick={() => changeCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

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

          <div className="section-header">
            <div>
              <h2>
                {activeMedia === "PHOTOS"
                  ? "Latest Photos"
                  : "Latest Videos"}
              </h2>

              <p>
                {activeCategory} {" • "} {activeMedia}
              </p>
            </div>

            <span className="count-badge">
              {activeMedia === "PHOTOS"
                ? filteredPhotos.length
                : filteredVideos.length}{" "}
              items
            </span>
          </div>

          {activeMedia === "PHOTOS" && (
            <div className="gallery-grid">
              {filteredPhotos.length > 0 ? (
                filteredPhotos
                  .slice(0, visiblePhotos)
                  .map((photo) => (
                    <div
                      className="gallery-card"
                      key={photo.id}
                    >
                      <div className="image-container">
                        <img
                          src={photo.image}
                          alt={photo.title}
                        />

                        <span className="category-badge">
                          {photo.category}
                        </span>

                        <div className="view-overlay">
                          <span className="view-icon">
                            👁️
                          </span>
                        </div>
                      </div>

                      <div className="card-content">
                        <p className="date">
                          📅 {formatDate(photo.date)}
                        </p>

                        <h3>{photo.title}</h3>

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
                  ))
              ) : (
                <div className="no-result">
                  <div className="no-result-icon">
                    📷
                  </div>

                  <h3>No Photos Found</h3>

                  <p>
                    No photos found for this category.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeMedia === "VIDEOS" && (
            <div className="gallery-grid">
              {filteredVideos.length > 0 ? (
                filteredVideos
                  .slice(0, visibleVideos)
                  .map((video) => (
                    <div
                      className="gallery-card"
                      key={video.id}
                    >
                      <div className="image-container">
                        <img
                          src={video.image}
                          alt={video.title}
                        />

                        <span className="category-badge">
                          {video.category}
                        </span>

                        <div className="play-overlay">
                          <div className="play-button">
                            ▶
                          </div>
                        </div>

                        <span className="duration">
                          {video.duration}
                        </span>
                      </div>

                      <div className="card-content">
                        <p className="date">
                          📅 {formatDate(video.date)}
                        </p>

                        <h3>{video.title}</h3>

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
                  ))
              ) : (
                <div className="no-result">
                  <div className="no-result-icon">
                    ▶️
                  </div>

                  <h3>No Videos Found</h3>

                  <p>
                    No videos found for this category.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeMedia === "PHOTOS" &&
            visiblePhotos < filteredPhotos.length && (
              <div className="load-more-wrapper">
                <button
                  className="load-more-button"
                  onClick={() => {
                    setVisiblePhotos((prev) => prev + 4);
                  }}
                >
                  ↻ &nbsp; Load More Photos
                </button>
              </div>
            )}

          {activeMedia === "VIDEOS" &&
            visibleVideos < filteredVideos.length && (
              <div className="load-more-wrapper">
                <button
                  className="load-more-button"
                  onClick={() => {
                    setVisibleVideos((prev) => prev + 4);
                  }}
                >
                  ↻ &nbsp; Load More Videos
                </button>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
