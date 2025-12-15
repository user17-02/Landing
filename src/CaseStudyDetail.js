import React from "react";
import { useParams, Link } from "react-router-dom";
import { caseStudies } from "./data/caseStudies";
import { FaArrowLeft } from "react-icons/fa";

function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) return <h2>Case study not found</h2>;

  return (
    <section style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link
          to="/case-studies"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            textDecoration: "none",
            color: "#76153c",
            marginBottom: "20px",
          }}
        >
          <FaArrowLeft />
          Back to all studies
        </Link>

        <h1 style={{ fontSize: "2.6rem", marginBottom: "10px" }}>
          {study.title}
        </h1>

        <p style={{ fontSize: "1.2rem", color: "#76153c", marginBottom: "20px" }}>
          {study.result}
        </p>

        <img
          src={study.cover}
          alt={study.title}
          style={{
            width: "100%",
            borderRadius: "16px",
            marginBottom: "30px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}
        />

        <div style={{ marginBottom: "40px" }}>
          {study.metrics.map((m, i) => (
            <div key={i} style={{ marginBottom: "6px" }}>
              <strong>{m.label}:</strong> {m.value}
            </div>
          ))}
        </div>

        {study.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: "36px" }}>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
              {sec.heading}
            </h3>
            <p style={{ lineHeight: "1.8", color: "#5e564e" }}>{sec.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudyDetail;
