import React from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "./data/caseStudies";
import { FaArrowRight, FaBullhorn, FaChartLine } from "react-icons/fa";

function getIcon(name) {
  if (name === "megaphone") return <FaBullhorn />;
  return <FaChartLine />;
}

function CaseStudies() {
  return (
    <section style={{ padding: "120px 40px", background: "#faf7f2" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2.8rem",
            marginBottom: "10px",
            color: "#26221e",
            fontWeight: "800",
          }}
        >
          Case Studies
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            maxWidth: "700px",
            marginBottom: "50px",
            lineHeight: "1.7",
            color: "#6e665a",
          }}
        >
          Real brands. Real systems. Real results.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
            gap: "32px",
          }}
        >
          {caseStudies.map((s) => (
            <Link
              key={s.id}
              to={`/case-studies/${s.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid rgba(215,192,151,0.55)",
                  transition: "0.25s ease",
                  cursor: "pointer",
                  boxShadow: "0 12px 26px rgba(0,0,0,0.08)",
                }}
                className="case-card"
              >
                {/* Image */}
                <div style={{ overflow: "hidden", height: "200px" }}>
                  <img
                    src={s.cover}
                    alt={s.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    className="case-image"
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      color: "#b8945e",
                      marginBottom: "10px",
                    }}
                  >
                    {getIcon(s.icon)}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      marginBottom: "8px",
                      color: "#292520",
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    style={{
                      fontWeight: "600",
                      color: "#76153c",
                      marginBottom: "8px",
                    }}
                  >
                    {s.result}
                  </p>

                  <p style={{ color: "#6e665a", lineHeight: "1.7" }}>
                    {s.description}
                  </p>

                  <p
                    style={{
                      marginTop: "18px",
                      fontWeight: "600",
                      color: "#76153c",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    Read Case Study <FaArrowRight />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
