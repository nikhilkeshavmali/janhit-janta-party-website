import React from "react";

function Events() {
  const upcomingEvents = [
    {
      title: "Youth Awareness Program",
      date: "15 September 2026",
      location: "Nashik, Maharashtra",
      icon: "🇮🇳",
      image:
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8",
    },
    {
      title: "Farmers' Meetup",
      date: "22 September 2026",
      location: "Dhule, Maharashtra",
      icon: "🌾",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    },
    {
      title: "Digital India Seminar",
      date: "5 October 2026",
      location: "Mumbai, Maharashtra",
      icon: "💻",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    },
  ];

  const pastEvents = [
    {
      title: "Clean City Initiative",
      date: "20 July 2026",
      location: "Nashik, Maharashtra",
      icon: "🌱",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    },
    {
      title: "Women Empowerment Summit",
      date: "10 June 2026",
      location: "Pune, Maharashtra",
      icon: "👩‍💼",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    },
    {
      title: "Rural Education Drive",
      date: "15 May 2026",
      location: "Dhule, Maharashtra",
      icon: "📚",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7",
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

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

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
            🇮🇳
          </div>

          <h1
            style={{
              fontSize: "50px",
              margin: "0",
              fontWeight: "800",
              color: "#172033",
            }}
          >
            Events & Initiatives
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
              fontSize: "19px",
              maxWidth: "700px",
              margin: "0 auto",
              color: "#4b5563",
              lineHeight: "1.7",
            }}
          >
            Stay Connected With Our Activities, Initiatives and Events
          </p>

          <p
            style={{
              marginTop: "20px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#000080",
            }}
          >
            सेवा • एकता • विकास
          </p>

        </div>
      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "60px 25px",
        }}
      >

        {/* =====================================================
            UPCOMING EVENTS
        ===================================================== */}

        <section style={{ marginBottom: "75px" }}>

          <div style={{ marginBottom: "35px" }}>

            <p
              style={{
                margin: "0 0 8px",
                color: "#ff7a00",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Participate With Us
            </p>

            <h2
              style={{
                margin: "0",
                fontSize: "34px",
                fontWeight: "800",
                color: "#172033",
              }}
            >
              Upcoming Events
            </h2>

            <div
              style={{
                marginTop: "12px",
                width: "75px",
                height: "5px",
                borderRadius: "10px",
                background:
                  "linear-gradient(90deg, #ff9933 50%, #138808 50%)",
              }}
            ></div>

          </div>


          {/* EVENT CARDS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >

            {upcomingEvents.map((event, index) => (

              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid #e7e7e7",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >

                {/* =================================================
                    IMAGE WITH INDIAN FLAG BORDER
                ================================================= */}

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
                      height: "210px",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: "12px",
                      border: "2px solid white",
                    }}
                  />

                </div>


                {/* Card Content */}

                <div style={{ padding: "25px" }}>

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
                      UPCOMING
                    </span>

                    <span
                      style={{
                        fontSize: "27px",
                      }}
                    >
                      {event.icon}
                    </span>

                  </div>


                  <h3
                    style={{
                      fontSize: "22px",
                      margin: "0 0 18px",
                      color: "#172033",
                      lineHeight: "1.3",
                    }}
                  >
                    {event.title}
                  </h3>


                  {/* Date */}

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


                  {/* Location */}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "22px",
                      color: "#555",
                      fontSize: "14px",
                    }}
                  >
                    <span>📍</span>
                    <span>{event.location}</span>
                  </div>


                  {/* Button */}

                  <button
                    style={{
                      width: "100%",
                      padding: "13px",
                      border: "none",
                      borderRadius: "9px",
                      background:
                        "linear-gradient(90deg, #ff9933, #ff7a00)",
                      color: "white",
                      fontWeight: "700",
                      fontSize: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Join Event →
                  </button>

                </div>
              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            ASHOKA CHAKRA DIVIDER
        ===================================================== */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            margin: "20px 0 70px",
          }}
        >

          <div
            style={{
              flex: "1",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #ff9933)",
            }}
          ></div>

          <div
            style={{
              width: "45px",
              height: "45px",
              border: "3px solid #000080",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000080",
              fontSize: "25px",
            }}
          >
            ☸
          </div>

          <div
            style={{
              flex: "1",
              height: "2px",
              background:
                "linear-gradient(90deg, #138808, transparent)",
            }}
          ></div>

        </div>


        {/* =====================================================
            PAST EVENTS
        ===================================================== */}

        <section>

          <div style={{ marginBottom: "35px" }}>

            <p
              style={{
                margin: "0 0 8px",
                color: "#138808",
                fontWeight: "700",
                fontSize: "14px",
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
              Past Events
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

            {pastEvents.map((event, index) => (

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

                </div>

              </div>

            ))}

          </div>


          {/* =================================================
              VIEW MORE EVENTS
          ================================================= */}

          <div
            style={{
              textAlign: "center",
              marginTop: "45px",
            }}
          >

            <button
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
              View More Events →
            </button>

          </div>

        </section>


        {/* =====================================================
            BOTTOM SECTION
        ===================================================== */}

        <div
          style={{
            marginTop: "80px",
            padding: "45px 25px",
            textAlign: "center",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, #fff4e8, #ffffff, #edf8f0)",
            border: "1px solid #e6e6e6",
            boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
          }}
        >

          <div
            style={{
              fontSize: "42px",
              marginBottom: "12px",
            }}
          >
            🇮🇳
          </div>

          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "27px",
              color: "#172033",
            }}
          >
            Together for a Better Tomorrow
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "600px",
              color: "#666",
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          >
            Participate, connect and contribute to meaningful community
            initiatives for a stronger and better India.
          </p>

          <div
            style={{
              marginTop: "22px",
              fontSize: "14px",
              fontWeight: "700",
              color: "#000080",
            }}
          >
            🇮🇳 सेवा &nbsp; • &nbsp; एकता &nbsp; • &nbsp; विकास 🇮🇳
          </div>

        </div>

      </div>
    </div>
  );
}

export default Events;
