import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { FaStar } from "react-icons/fa";
import heroImage from "./hero.jpg";


// Icons
import {
  FaBullhorn,
  FaPalette,
  FaBrain,
  FaBolt,
  FaCrown,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRocket,
  FaCompass,
  FaLightbulb,
  FaCogs,
  FaCommentDots,
} from "react-icons/fa";

import { FiTarget } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function LandingPage({ handleFormSubmit }) {
  const navigate = useNavigate(); //  Added

  useEffect(() => {
    const orbit = document.getElementById("hero-frame-orbit");
    if (!orbit) return;

    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      orbit.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div className="page-wrapper">

        {/* ======================= HERO SECTION ======================= */}
        <section className="hero-clean">
          <div className="hero-clean-inner">

            {/* LEFT SIDE */}
            <div className="hero-left">
              <h1>
                Build a Brand That Looks  
                <span className="highlight"> Premium </span>  
                and Performs.
              </h1>

              <p className="hero-sub">
                We help founders and fast-growing teams craft world-class brand
                identities, websites, and digital experiences that attract
                customers and strengthen trust.
              </p>

              {/*  Updated button */}
              <button
                className="hero-btn"
                onClick={() => navigate("/audit")}
              >
                Start Your Brand Transformation →
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="hero-right">
              <div className="hero-image-circle">
              <img
  src={heroImage}
  alt="Savrin brand visual"
/>

              </div>

              <div className="hero-testimonial">
                <div className="avatars">
                  <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Client 1" />
                  <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Client 2" />
                  <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Client 3" />
                </div>

                <div>
                  <p className="reviews">
                    1,542 reviews  
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                    <FaStar className="star-icon" />
                  </p>

                  <p className="quote">“Exceptional design, strategy and execution.”</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ======================= ABOUT SECTION ======================= */}
        <section className="about-section" id="about">
          <div className="section-header">
            <h2 className="section-eyebrow">ABOUT SAVRIN</h2>
            <h2 className="about-title">
              A Modern Branding Studio for Ambitious Businesses
            </h2>
            <div className="section-underline" />
          </div>

          <div className="about-grid">
            <div className="about-left">
              <h3 className="about-subtitle">
                We help you move from “looks okay” to “this feels like a real brand”.
              </h3>

              <p className="about-text">
                Savrin works with founders, service brands, and digital products...
              </p>

              <div className="about-tags">
                <span><FaBrain className="tag-icon" /> Strategy-Led</span>
                <span><BsStars className="tag-icon" /> Detail-Obsessed</span>
                <span><FaBolt className="tag-icon" /> Built to Last</span>
              </div>
            </div>

            <div className="about-right">
              <div className="about-card">
                <p className="about-card-label">Best fit for</p>
                <p className="about-card-number">
                  Service brands, agencies, coaches, B2B & digital products
                </p>
              </div>

              <div className="about-card">
                <p className="about-card-label">What we shape</p>
                <p className="about-card-number">
                  Brand strategy • Identity • Website • Launch & content assets
                </p>
              </div>

              <div className="about-card">
                <p className="about-card-label">Typical partnership</p>
                <p className="about-card-number">4–10 weeks</p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= SERVICES SECTION ======================= */}
        <section className="services-section" id="services">
          <div className="section-header">
            <h2 className="section-eyebrow">WHAT WE DO</h2>
            <h2 className="services-title">
              Branding Services Designed to Work Together
            </h2>
            <div className="section-underline" />
          </div>

          <div className="services-grid">
            {/* Strategy */}
            <div className="service-card">
              <div className="service-heading-row">
                <div className="service-icon-badge"><FaBrain className="icon" /></div>
                <h3 className="service-heading">Brand Strategy & Positioning</h3>
              </div>

              <ul className="service-list">
                <li>Brand foundations, values & personality</li>
                <li>Audience clarity & ideal client profiles</li>
                <li>Brand positioning & narrative</li>
                <li>Offer clarity & messaging angles</li>
                <li>Practical playbooks for your team</li>
              </ul>
            </div>

            {/* Identity */}
            <div className="service-card">
              <div className="service-heading-row">
                <div className="service-icon-badge"><FaPalette className="icon" /></div>
                <h3 className="service-heading">Visual Identity & Logo Design</h3>
              </div>

              <ul className="service-list">
                <li>Logo suite</li>
                <li>Color systems</li>
                <li>Iconography</li>
                <li>Brand guidelines</li>
                <li>Templates</li>
              </ul>
            </div>

            {/* Website */}
            <div className="service-card">
              <div className="service-heading-row">
                <div className="service-icon-badge"><FaCogs className="icon" /></div>
                <h3 className="service-heading">Website & Digital Experience</h3>
              </div>

              <ul className="service-list">
                <li>Landing pages</li>
                <li>Full website design</li>
                <li>UI components</li>
                <li>Copywriting</li>
                <li>Launch support</li>
              </ul>
            </div>

            {/* Launch */}
            <div className="service-card">
              <div className="service-heading-row">
                <div className="service-icon-badge"><FaBullhorn className="icon" /></div>
                <h3 className="service-heading">Launch & Brand Assets</h3>
              </div>

              <ul className="service-list">
                <li>Social launch kits</li>
                <li>Pitch decks</li>
                <li>Email & ad creatives</li>
                <li>Sales collateral</li>
                <li>Ongoing support</li>
              </ul>
            </div>
          </div>

          <Link to="/audit" className="services-btn hero-primary-btn">
            <FiTarget className="btn-icon" /> Start with a Free Brand Audit
          </Link>
        </section>

        {/* ======================= WHY SECTION ======================= */}
        <section className="why-section" id="why">
          <div className="section-header">
            <h2 className="section-eyebrow">WHY PARTNER WITH US</h2>
            <h2 className="why-title">
              Why Brands Stay With Savrin Beyond the First Project
            </h2>
            <div className="section-underline" />
          </div>

          <div className="why-grid">
            <div className="why-box">
              <FaCrown className="why-icon" />
              <h3>Premium, Not Template-Based</h3>
              <p>Your brand is built from strategy — not generic kits.</p>
            </div>

            <div className="why-box">
              <FaCompass className="why-icon" />
              <h3>Deep Discovery</h3>
              <p>We understand your audience and market deeply.</p>
            </div>

            <div className="why-box">
              <FaCommentDots className="why-icon" />
              <h3>Clear Process</h3>
              <p>No confusion — structured milestones & feedback.</p>
            </div>

            <div className="why-box">
              <FaBolt className="why-icon" />
              <h3>Designed for Use</h3>
              <p>Systems and assets your team can actually use.</p>
            </div>
          </div>
        </section>

        {/* ======================= PROCESS SECTION ======================= */}
        <section className="process" id="process">
          <div className="section-header">
            <h2 className="section-eyebrow">HOW WE WORK</h2>
            <h2 className="process-title">A Clear, Low-Stress Branding Process</h2>
            <div className="underline" />
          </div>

          <div className="process-steps">
            <div className="step">
              <div className="step-circle"><FaCompass /></div>
              <h3>Discover</h3>
              <p>We explore your brand, users, and market deeply.</p>
            </div>

            <div className="step">
              <div className="step-circle"><FaLightbulb /></div>
              <h3>Define</h3>
              <p>We create your positioning, story, and blueprint.</p>
            </div>

            <div className="step">
              <div className="step-circle"><FaPalette /></div>
              <h3>Design</h3>
              <p>We craft your full identity and website.</p>
            </div>

            <div className="step">
              <div className="step-circle"><FaRocket /></div>
              <h3>Launch</h3>
              <p>We help roll out your brand with confidence.</p>
            </div>
          </div>
        </section>

        {/* ======================= SECONDARY CTA ======================= */}
        <section className="secondary-hero">
          <div className="secondary-hero-inner">
            <div className="hero-content">
              <h1>Ready for Your Brand to Finally Match Your Work?</h1>

              <p className="hero-context">
                If your business has evolved but your brand hasn’t caught up,
                it’s time to build something intentional.
              </p>

              <Link to="/audit" className="cta-btn secondary-cta">
                <FaRocket className="btn-icon" /> Book a Free Brand Audit
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ======================= CONTACT SECTION ======================= */}
      <section className="contact-wrapper" id="contact">
        <div className="contact-container">

          {/* LEFT INFO */}
          <div className="contact-left">
            <h2 className="contact-title">Let’s Build a Brand You’re Proud to Show Off</h2>

            <p className="contact-sub">
              Share where you are today and what doesn’t feel aligned—
              we’ll respond with honest next steps.
            </p>

            <div className="contact-info">
              <div className="info-line"><FaEnvelope className="info-icon" /> hello@savrin.studio</div>
              <div className="info-line"><FaPhoneAlt className="info-icon" /> +91 98765 43210</div>
              <div className="info-line"><FaMapMarkerAlt className="info-icon" /> Remote — working worldwide</div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group two-col">
                <input type="text" placeholder="First Name *" required />
                <input type="text" placeholder="Last Name" />
              </div>

              <div className="form-group">
                <input type="email" placeholder="Work Email *" required />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Company / Website *" required />
              </div>

              <div className="form-group">
                <textarea placeholder="Tell us about your brand..." required></textarea>
              </div>

              <button className="send-btn">
                <FiTarget className="btn-icon" /> Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}

export default LandingPage;
