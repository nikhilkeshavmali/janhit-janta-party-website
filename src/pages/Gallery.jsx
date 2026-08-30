import React, { useState } from "react";
import GalleryHero from "../components/gallery/GalleryHero";
import GalleryFilters from "../components/gallery/GalleryFilters";
import GalleryCategories from "../components/gallery/GalleryCategories";
import MediaTabs from "../components/gallery/MediaTabs";
import GalleryGrid from "../components/gallery/GalleryGrid";
import "../components/gallery/Gallery.css";

import ambadMeeting from "../assets/gallery_images/ambad_jalna_meeting (2).png";
import janhitActivity from "../assets/gallery_images/janhit_lokshahi_activity_navi_mumbai - Copy.png";
import marathaDistrictMeet from "../assets/gallery_images/maratha_district_meet_shrirampur - Copy.png";
import mulundDiscussion from "../assets/gallery_images/mulund_political_discussion.jpeg";
import mumbaiPressConference from "../assets/gallery_images/mumbai_marathi_press_conference.png";
import appointmentCeremony from "../assets/gallery_images/navi_mumbai_appointment_ceremony.jpeg";
import statewideCampaign from "../assets/gallery_images/statewide_campaign_pune.png";
import thanePoliticalDiscussion from "../assets/gallery_images/thane_political_discussion_obc_movement.jpeg";
import womensMeet from "../assets/gallery_images/womens_meet_nashik.png";
import workerDay from "../assets/gallery_images/worker_day_katora_daud_mumbai.jpeg";

// EVENTS
const galleryData = [
  {
    id: 1,
    title: "Ambad Jalna Meeting",
    date: "2025-01-15",
    category: "EVENTS",
    image: ambadMeeting,
  },
  {
    id: 2,
    title: "Janhit Lokshahi Activity",
    date: "2025-02-10",
    category: "EVENTS",
    image: janhitActivity,
  },
  {
    id: 3,
    title: "Maratha District Meet",
    date: "2025-03-15",
    category: "EVENTS",
    image: marathaDistrictMeet,
  },
  {
    id: 4,
    title: "Mulund Political Discussion",
    date: "2025-04-12",
    category: "EVENTS",
    image: mulundDiscussion,
  },
  {
    id: 5,
    title: "Mumbai Marathi Press Conference",
    date: "2025-05-20",
    category: "EVENTS",
    image: mumbaiPressConference,
  },
  {
    id: 6,
    title: "Navi Mumbai Appointment Ceremony",
    date: "2025-06-15",
    category: "EVENTS",
    image: appointmentCeremony,
  },
  {
    id: 7,
    title: "Statewide Campaign Pune",
    date: "2025-07-10",
    category: "EVENTS",
    image: statewideCampaign,
  },
  {
    id: 8,
    title: "Thane Political Discussion",
    date: "2025-08-12",
    category: "EVENTS",
    image: thanePoliticalDiscussion,
  },
  {
    id: 9,
    title: "Women's Meet Nashik",
    date: "2025-08-20",
    category: "EVENTS",
    image: womensMeet,
  },
  {
    id: 10,
    title: "Worker Day Katora Daud Mumbai",
    date: "2025-09-02",
    category: "EVENTS",
    image: workerDay,
  },

  // FOUNDERS
  {
    id: 11,
    title: "Ashokrao Ramchandra Alhat",
    date: "2024-11-18",
    category: "FOUNDERS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhaZXcQ-OyKPX6G2-SIpKKEYTBgmxTR0-m5ifN2tgPwfcpI81zNP0jPw&s=10",
  },
  {
    id: 12,
    title: "Founder – World Population Day Awareness",
    date: "2025-07-11",
    category: "FOUNDERS",
    image:
      "https://scontent.fisk3-1.fna.fbcdn.net/v/t39.30808-6/469080270_1607295166540846_7688544824051079469_n.jpg?stp=dst-jpg_tt6&cstp=mx720x721&ctp=p526x296&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uCkmhQ4kLKAQ7kNvwEm2msl&_nc_oc=Adpu1pn6nJbkznUl_jKjQeFQXG5NcTXEChwvLf_cnJ1sY3v61SWM7TBBALQ8vL3g-dqiC_qyL3aA3fKgYsVOxa8a&_nc_zt=23&_nc_ht=scontent.fisk3-1.fna&_nc_gid=vNMlSxOOWb7QS0D1CbZMag&_nc_ss=7b289&oh=00_AQLvEG4hgl83LU5bOXOQ3ILahvgZWXD-F8E1FWQJ8t-ZaQ&oe=6A98E246",
  },
  {
  id: 13,
  title: "Founder Awareness – Baba Amte Tribute",
  date: "2025-12-26",
  category: "FOUNDERS",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdi3ZrGC3LSWnp53F4KqhvgcGwwNOyvVKR9EBNYKcIig&s=10",
},
 {
  id: 14,
  title: "Founder Social Awareness Message",
  date: "2025-01-01",
  category: "FOUNDERS",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkv8aj5gURuZa7C2UBXNwYqKteeRkNI3fIa6whR2qJig&s",
},
{
  id: 15,
  title: "Founder Social Awareness Message",
  date: "2025-01-15",
  category: "FOUNDERS",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZoIrjc6NHEDuQ6CFlyI5m-V2jTp-3qamcQlyYhlXl4_Oz4r6lVFxF01A&s=10",
}, 
{
  id: 16,
  title: "Founder Awareness Message",
  date: "2025-01-20",
  category: "FOUNDERS",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawmCHtBspXc2IOZ_FCemXbGEawkkIZ7q1IFdWdcTfeA&s",
},

  // CARTOONS
{
  id: 17,
  title: "Social Message Artwork",
  date: "2025-08-25",
  category: "CARTOONS",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lkFfVPqiQJifnDxpZ8NNk47xwhnHOU6whhDn8xZQgg&s=10",
},
{
  id: 18,
  title: "Awareness Campaign Cartoon",
  date: "2025-08-05",
  category: "CARTOONS",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oJxBRUd8f9jbegS_qPuswTQixKOXqkJlW_ZhzA038A&s=10",
},
 {
  id: 19,
  title: "Public Awareness Cartoon",
  date: "2025-02-12",
  category: "CARTOONS",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRZuof6rYB7tAn_xi_Jf5p6isYbyeDrB7NdOuEDY8rZz9B6inxyZazoE&s=10",
}, 
  {
  id: 20,
  title: "Awareness Caricature",
  date: "2025-06-25",
  category: "CARTOONS",
  image: "https://www.bjp.org/files/photo-gallery/caricature-2-20180728-1341364061_1.jpg",
},
 {
  id: 21,
  title: "Awareness Campaign Cartoon",
  date: "2025-08-05",
  category: "CARTOONS",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvO3KbvdmeAweJQYieSadRwn_DW4u61R_Z3CNvD_zzpH2vrz_ihPeJsLWk&s=10",
},
 {
  id: 22,
  title: "Social Message Artwork",
  date: "2025-08-25",
  category: "CARTOONS",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbHoIV_G5TDdTiDtKebUZjL2EMRQweeA5B3YsRUIUPBAZtlT7b2wH99c5&s=10",
},

  // 3D TEMPLE WALL
  {
  id: 23,
  title: "Traditional Temple Wall",
  date: "2025-01-15",
  category: "3D TEMPLE WALL",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKnoWK8shf4S9MjGbjS7DOeVt5536-CfB1o3UU6lyD5ow4h50LY6rT50&s=10",
},
 {
  id: 24,
  title: "Temple Heritage Design",
  date: "2025-03-20",
  category: "3D TEMPLE WALL",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTpJJk51gpWjrbN-OACjJRy_izhbP91qyIh_Oeqhk5iONlkadSWPIELF4&s=10",
},
 {
  id: 25,
  title: "Cultural Wall Artwork",
  date: "2025-05-18",
  category: "3D TEMPLE WALL",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zFcNd8VV-G7xge4E03lvb5jzmlUN7-ReYIe1Qy7mbtqplr8GUhuvyWCw&s=10",
},
 {
  id: 26,
  title: "Heritage Temple Artwork",
  date: "2025-07-22",
  category: "3D TEMPLE WALL",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZzPLBxAcPupMRbjn1OMozqaZnShjN33Jb429TbdeCA&s",
},
  {
    id: 27,
    title: "Traditional Architecture",
    date: "2025-08-18",
    category: "3D TEMPLE WALL",
    image: "",
  },
  {
    id: 28,
    title: "Cultural Heritage Wall",
    date: "2025-09-10",
    category: "3D TEMPLE WALL",
    image: "",
  },

  // FAN ZONE
  {
  id: 29,
  title: "Youth Fan Gathering",
  date: "2025-03-10",
  category: "FAN ZONE",
  image: "https://i.ytimg.com/vi/WFG6cq8CTgQ/maxresdefault.jpg",
},
  {
  id: 30,
  title: "Community Celebration",
  date: "2025-05-25",
  category: "FAN ZONE",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxDzBWR4zbB_sDhyXGMYHXkEtF7rl2cnhtU1bobknBP0lohDBRhNC_1K2&s=10",
},
 {
  id: 31,
  title: "Youth Support Event",
  date: "2025-07-15",
  category: "FAN ZONE",
  image: "https://static.mygov.in/indiancc/2021/02/mygov-999999999790672125.jpg",
},
  {
  id: 32,
  title: "Public Celebration",
  date: "2025-08-15",
  category: "FAN ZONE",
  image: "https://i.ytimg.com/vi/BzvzWK8mrnU/maxresdefault.jpg",
},
  {
    id: 33,
    title: "Public Celebration",
    date: "2025-08-15",
    category: "FAN ZONE",
    image: "",
  },
  {
    id: 34,
    title: "Community Fan Meet",
    date: "2025-09-20",
    category: "FAN ZONE",
    image: "",
  },
];

// VIDEO DATA
const videoData = [
  {
    id: 1,
    title: "Community Awareness Campaign",
    date: "2025-05-20",
    category: "EVENTS",
    image: "",
    duration: "02:45",
  },
  {
    id: 2,
    title: "Youth Awareness Program",
    date: "2025-06-12",
    category: "EVENTS",
    image: "",
    duration: "04:20",
  },
  {
    id: 3,
    title: "Public Development Event",
    date: "2025-07-18",
    category: "FOUNDERS",
    image: "",
    duration: "03:15",
  },
  {
    id: 4,
    title: "Community Celebration",
    date: "2025-08-10",
    category: "FAN ZONE",
    image: "",
    duration: "05:30",
  },
  {
    id: 5,
    title: "Social Awareness Program",
    date: "2025-08-20",
    category: "EVENTS",
    image: "",
    duration: "03:50",
  },
];

const categories = [
  "EVENTS",
  "FOUNDERS",
  "CARTOONS",
  "3D TEMPLE WALL",
  "FAN ZONE",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("EVENTS");
  const [activeMedia, setActiveMedia] = useState("PHOTOS");

  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [showUploadForm, setShowUploadForm] = useState(false);

  const [visiblePhotos, setVisiblePhotos] = useState(4);
  const [visibleVideos, setVisibleVideos] = useState(4);

  const handleSearch = () => {
    setSearchTerm(searchInput);
    setVisiblePhotos(4);
    setVisibleVideos(4);
  };

  const filteredPhotos = galleryData.filter((item) => {
    return (
      item.category === activeCategory &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (fromDate === "" || item.date >= fromDate) &&
      (toDate === "" || item.date <= toDate)
    );
  });

  const filteredVideos = videoData.filter((item) => {
    return (
      item.category === activeCategory &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (fromDate === "" || item.date >= fromDate) &&
      (toDate === "" || item.date <= toDate)
    );
  });

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
    <div className="gallery-page">

      <div className="tricolor-line">
        <div className="saffron-line"></div>
        <div className="white-line"></div>
        <div className="green-line"></div>
      </div>

      <main className="gallery-container">

        <div className="breadcrumb">
          <span className="breadcrumb-home">Home</span>
          <span className="breadcrumb-arrow">›</span>
          <span>Gallery</span>
          <span className="breadcrumb-arrow">›</span>
          <span className="breadcrumb-active">
            {activeCategory}
          </span>
        </div>

        <GalleryHero />

        <GalleryFilters
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          handleSearch={handleSearch}
        />

        <GalleryCategories
          categories={categories}
          activeCategory={activeCategory}
          changeCategory={changeCategory}
        />

        <MediaTabs
          activeMedia={activeMedia}
          setActiveMedia={setActiveMedia}
          setVisiblePhotos={setVisiblePhotos}
          setVisibleVideos={setVisibleVideos}
        />

        <div className="section-header">
          <div>
            <h2>
              {activeMedia === "PHOTOS"
                ? "Latest Photos"
                : "Latest Videos"}
            </h2>

            <p>
              {activeCategory} • {activeMedia}
            </p>
          </div>

          <span className="count-badge">
            {activeMedia === "PHOTOS"
              ? filteredPhotos.length
              : filteredVideos.length}{" "}
            items
          </span>
        </div>

        {activeCategory === "FAN ZONE" && (
          <div className="fan-submit-box">

            <div className="fan-submit-content">

              <div className="fan-submit-icon">
                📤
              </div>

              <div>
                <h3>Share Your Moment</h3>

                <p>
                  Have a photo or video from our Fan Zone?
                  Submit it for review and it may appear in
                  our gallery.
                </p>
              </div>

            </div>

            <button
              className="submit-media-button"
              onClick={() => setShowUploadForm(true)}
            >
              📤 Submit Media
            </button>

          </div>
        )}

        <GalleryGrid
          items={
            activeMedia === "PHOTOS"
              ? filteredPhotos.slice(0, visiblePhotos)
              : filteredVideos.slice(0, visibleVideos)
          }
          mediaType={activeMedia}
        />

        {activeMedia === "PHOTOS" &&
          visiblePhotos < filteredPhotos.length && (
            <div className="load-more-wrapper">

              <button
                className="load-more-button"
                onClick={() =>
                  setVisiblePhotos((prev) => prev + 4)
                }
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
                onClick={() =>
                  setVisibleVideos((prev) => prev + 4)
                }
              >
                ↻ &nbsp; Load More Videos
              </button>

            </div>
          )}

        {/* Gallery Closing Banner */}

        <div className="gallery-footer-banner">

          <div className="footer-banner-content">

            <span className="footer-banner-badge">
              IN COMMUNITY • UNITY • DEVELOPMENT
            </span>

            <h3>
              Together We Build a Stronger Community
            </h3>

            <p>
              Explore our memorable moments, community initiatives,
              and public awareness campaigns working towards a better future.
            </p>

            <div className="footer-tags">
              <span>सेवा</span>
              <span>एकता</span>
              <span>विकास</span>
            </div>

          </div>

          <div className="footer-banner-symbol">
            🤝
          </div>

        </div>

      </main>

      {showUploadForm && activeCategory === "FAN ZONE" && (
        <div className="upload-modal">

          <div className="upload-modal-box">

            <button
              className="close-upload"
              onClick={() => setShowUploadForm(false)}
            >
              ✕
            </button>

            <h2>📤 Submit Your Media</h2>

            <p className="upload-info">
              Share your Fan Zone photo or video with us.
            </p>

            <label>Your Name</label>

            <input
              type="text"
              placeholder="Enter your name"
            />

            <label>Category</label>

            <input
              type="text"
              value="FAN ZONE"
              readOnly
            />

            <label>Upload Photo / Video</label>

            <input
              type="file"
              accept="image/*,video/*"
            />

            <label>Caption</label>

            <textarea
              placeholder="Write something about this media..."
            />

            <p className="approval-note">
              ⏳ Your media will be reviewed by admin before
              appearing in the Gallery.
            </p>

            <button className="upload-submit-button">
              Submit for Review
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Gallery;
