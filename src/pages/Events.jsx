import React, { useState } from "react";

import ambadMeeting from "../assets/event-images/ambad_jalna_meeting (2).png";
import janhitActivity from "../assets/event-images/janhit_lokshahi_activity_navi_mumbai.png";
import marathaDistrictMeet from "../assets/event-images/maratha_district_meet_shrirampur.png";
import mulundDiscussion from "../assets/event-images/mulund_political_discussion.jpg";
import mumbaiPressConference from "../assets/event-images/mumbai_marathi_press_conference.png";
import appointmentCeremony from "../assets/event-images/navi_mumbai_appointment_ceremony.jpg";
import statewideCampaign from "../assets/event-images/statewide_campaign_pune.png";
import thanePoliticalDiscussion from "../assets/event-images/thane_political_discussion_obc_movement.jpg";
import womensMeet from "../assets/event-images/womens_meet_nashik.png";
import workerDay from "../assets/event-images/worker_day_katora_daud_mumbai.jpg";
function Events() {
  const [showAllPastEvents, setShowAllPastEvents] = useState(false);

  const pastEvents = [
  {
    title: "Workers' Day Awareness March",
    description:
      "A programme was organized from August Kranti Maidan to Azad Maidan to raise the issues of workers and unemployed people.",
    date: "16 May 2004",
    location: "Mumbai, Maharashtra",
    icon: "🇮🇳",
    image: workerDay,
  },

  {
    title: "District-Wide Maratha Community Gathering",
    description:
      "A gathering was organized to address and discuss various issues concerning the Maratha community.",
    date: "9 July 2006",
    location: "Shrirampur, Ahmednagar, Maharashtra",
    icon: "🤝",
    image: marathaDistrictMeet,
  },

  {
    title: "Public Awareness and Activist Programme",
    description:
      "A public awareness and activist-oriented programme was organized through the Bharatiya Kranti Sena and associated organizations.",
    date: "14 June 2008",
    location: "Navi Mumbai, Maharashtra",
    icon: "📢",
    image: janhitActivity,
  },

  {
    title: "District Women's Gathering",
    description:
      "A women's gathering was organized by the Janhit Lokshahi Party, attended by the party president and other office bearers.",
    date: "9 May 2018",
    location: "Nashik, Maharashtra",
    icon: "👩",
    image: womensMeet,
  },

  {
    title: "Launch of Statewide Campaign",
    description:
      "The statewide campaign organized by the Janhit Lokshahi Party was officially launched from Pune.",
    date: "7 July 2019",
    location: "Pune, Maharashtra",
    icon: "🇮🇳",
    image: statewideCampaign,
  },

  {
    title: "Appointment Ceremony of New Office Bearers",
    description:
      "A ceremony was organized to appoint newly selected office bearers, attended by the party president and other dignitaries.",
    date: "2019",
    location: "Navi Mumbai, Maharashtra",
    icon: "🤝",
    image: appointmentCeremony,
  },

  {
    title: "Marathwada Divisional-Level Meeting",
    description:
      "A divisional-level meeting was organized at the Government Rest House in Ambad Taluka to discuss important organizational and regional matters.",
    date: "22 June 2022",
    location: "Ambad, Jalna, Maharashtra",
    icon: "📋",
    image: ambadMeeting,
  },

  {
    title: "Political Discussion Session",
    description:
      "A joint discussion involving several political parties and organizations was held to explore alternatives on the political landscape of Maharashtra.",
    date: "7 June 2022",
    location: "Mulund, Mumbai, Maharashtra",
    icon: "🗣️",
    image: mulundDiscussion,
  },

  {
    title: "Grand Press Conference",
    description:
      "A major press conference was organized with the participation of the Janhit Lokshahi Party and around 20 other political parties and organizations.",
    date: "8 June 2022, 4:00 PM",
    location: "Mumbai Marathi Patrakar Sangh, Mumbai",
    icon: "🎤",
    image: mumbaiPressConference,
  },

  {
    title: "District Political Discussion Seminar",
    description:
      "A discussion seminar was organized in Thane district to discuss important political issues and developments.",
    date: "December 2022",
    location: "Thane, Maharashtra",
    icon: "📢",
    image: thanePoliticalDiscussion,
  },
];


  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fff8f1 0%, #ffffff 45%, #f3fff7 100%)",
        fontFamily: "Arial, sans-serif",
        color: "#172033",
      }}
    >
      {/* HERO SECTION */}

      <div
        style={{
          position: "relative",
          padding: "75px 25px 85px",
          textAlign: "center",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #ff9933 0%, #ffffff 48%, #138808 100%)",
        }}
      >
        {/* Soft overlay */}

        <div
          style={{
            position: "absolute",
            inset: "0",
            backgroundColor: "rgba(255,255,255,0.68)",
          }}
        ></div>

        {/* Ashoka Chakra */}

        <div
          style={{
            position: "absolute",
            width: "260px",
            height: "260px",
            border: "8px solid rgba(0,0,128,0.08)",
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: "2",
          }}
        >
          <div
            style={{
              fontSize: "58px",
              marginBottom: "12px",
            }}
          >
            
          </div>

          <h1
            style={{
              fontSize: "75px",
              margin: "0",
              fontWeight: "800",
              color: "#172033",
            }}
          >
            EVENTS
          </h1>

          {/* Tricolour line */}

          <div
            style={{
              width: "110px",
              height: "6px",
              margin: "20px auto",
              borderRadius: "20px",
              background:
                "linear-gradient(90deg, #ff9933 33%, #000080 33%, #000080 66%, #138808 66%)",
            }}
          ></div>

          <p
            style={{
              fontSize: "25px",
              maxWidth: "700px",
              margin: "0 auto",
              color: "#4b5563",
              lineHeight: "1.7",
            }}
          >
            Explore Our Events, Initiatives and Journey
          </p>

          <p
            style={{
              marginTop: "20px",
              fontSize: "30px",
              fontWeight: "700",
              color: "#000080",
            }}
          >
            सेवा • एकता • विकास
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "60px 25px",
        }}
      >
        {/* PAST EVENTS */}

        <section>
          <div style={{ marginBottom: "35px" }}>
            <p
              style={{
                margin: "0 0 8px",
                color: "#138808",
                fontWeight: "700",
                fontSize: "50px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Our Journey
            </p>

            <h2
              style={{
                margin: "0",
                fontSize: "34px",
                fontWeight: "800",
                color: "#172033",
              }}
            >

            </h2>

            <div
              style={{
                marginTop: "12px",
                width: "75px",
                height: "5px",
                borderRadius: "10px",
                background:
                  "linear-gradient(90deg, #138808 50%, #ff9933 50%)",
              }}
            ></div>
          </div>

          {/* PAST EVENT CARDS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {(showAllPastEvents
              ? pastEvents
              : pastEvents.slice(0, 4)
            ).map((event, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid #e7e7e7",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.07)",
                }}
              >
                {/* Indian Tricolour Image Frame */}

                <div
                  style={{
                    padding: "6px",
                    background:
                      "linear-gradient(90deg, #ff9933 0%, #ffffff 50%, #138808 100%)",
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "195px",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: "12px",
                      border: "2px solid white",
                    }}
                  />
                </div>

                {/* Card Content */}

                <div style={{ padding: "25px" }}>
                  {/* Completed + Icon */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "15px",
                    }}
                  >
                    <span
                      style={{
                        padding: "7px 13px",
                        borderRadius: "20px",
                        backgroundColor: "#eaf7ee",
                        color: "#138808",
                        fontSize: "11px",
                        fontWeight: "800",
                      }}
                    >
                      ✓ COMPLETED
                    </span>

                    <span style={{ fontSize: "27px" }}>
                      {event.icon}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    style={{
                      margin: "0 0 18px",
                      fontSize: "21px",
                      color: "#172033",
                      lineHeight: "1.3",
                    }}
                  >
                    {event.title}
                  </h3>

                  {/* DATE */}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "10px",
                      color: "#555",
                      fontSize: "14px",
                    }}
                  >
                    <span>📅</span>
                    <span>{event.date}</span>
                  </div>

                  {/* LOCATION */}

<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#555",
    fontSize: "14px",
  }}
>
  <span>📍</span>
  <span>{event.location}</span>
</div>

{/* DESCRIPTION */}

<div
  style={{
    marginTop: "12px",
    color: "#555",
    fontSize: "14px",
    lineHeight: "1.6",
  }}
>
  <span style={{ fontWeight: "600", color: "#172033" }}>
    Description:{" "}
  </span>
  <span>{event.description}</span>
</div>

</div>
</div>
))}
</div>
          {/* VIEW MORE EVENTS */}

          <div
            style={{
              textAlign: "center",
              marginTop: "45px",
            }}
          >
            <button
              onClick={() =>
                setShowAllPastEvents(!showAllPastEvents)
              }
              style={{
                padding: "14px 32px",
                borderRadius: "30px",
                border: "2px solid #138808",
                backgroundColor: "white",
                color: "#138808",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
              }}
            >
              {showAllPastEvents
                ? "Show Less ↑"
                : "View More Events →"}
            </button>
          </div>
        </section>

        
{/* BOTTOM SLOGAN SECTION */}

<div
  style={{
    position: "relative",
    marginTop: "80px",
    padding: "55px 25px",
    textAlign: "center",
    borderRadius: "24px",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #fff1df 0%, #ffffff 48%, #e8f7eb 100%)",
    border: "1px solid #e2e2e2",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  }}
>
  {/* Decorative Ashoka Chakra */}

  <div
    style={{
      position: "absolute",
      width: "220px",
      height: "220px",
      border: "7px solid rgba(0,0,128,0.06)",
      borderRadius: "50%",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
    }}
  ></div>

  {/* Tricolour top line */}

  <div
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "7px",
      background:
        "linear-gradient(90deg, #ff9933 0%, #ffffff 50%, #138808 100%)",
    }}
  ></div>

  {/* Content */}

  <div
    style={{
      position: "relative",
      zIndex: "2",
    }}
  >
    <div
      style={{
        fontSize: "48px",
        marginBottom: "15px",
      }}
    >
      
    </div>

    <h2
      style={{
        margin: "0",
        fontSize: "32px",
        fontWeight: "800",
        color: "#172033",
        lineHeight: "1.3",
      }}
    >
      Together We Make a Better Tomorrow
    </h2>

    {/* Tricolour underline */}

    <div
      style={{
        width: "100px",
        height: "5px",
        margin: "18px auto",
        borderRadius: "10px",
        background:
          "linear-gradient(90deg, #ff9933 33%, #000080 33%, #000080 66%, #138808 66%)",
      }}
    ></div>

    <p
      style={{
        margin: "0 auto",
        maxWidth: "650px",
        color: "#555",
        fontSize: "20px",
        lineHeight: "1.8",
      }}
    >
      Together, we can build a stronger community through unity,
      service and meaningful initiatives for a better India.
    </p>

    <div
      style={{
        marginTop: "25px",
        fontSize: "25px",
        fontWeight: "800",
        color: "#000080",
        letterSpacing: "1px",
      }}
    >
       &nbsp; सेवा &nbsp; • &nbsp; एकता &nbsp; • &nbsp; विकास &nbsp; 
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default Events;


