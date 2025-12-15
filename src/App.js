import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "./Footer.css";
import Logo from "./logo.png";

import LandingPage from "./LandingPage";
import AuditWizard from "./AuditWizard";
import CaseStudies from "./CaseStudies";
import CaseStudyDetail from "./CaseStudyDetail";

import { FaRocket } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const [email, setEmail] = useState("");
  const [subMsg, setSubMsg] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubMsg("Please enter a valid email.");
      return;
    }

    setSubMsg("✓ Subscribed successfully!");
    setEmail("");

    setTimeout(() => setSubMsg(""), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully. We’ll be in touch soon. ✨", {
      position: "top-right",
      autoClose: 2500,
      theme: "dark",
      transition: Bounce,
      icon: "🚀",
    });
  };

  return (
    <>
      <ToastContainer />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          {/* LOGO */}
          <Link to="/" className="nav-logo">
            <img src={Logo} alt="Savrin Logo" />
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="nav-links">
            <li><a href="/#about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#why">Why Us</a></li>
            <li><a href="/#process">Process</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>

          {/* DESKTOP CTA */}
          <Link to="/audit" className="nav-cta">
            <FaRocket className="btn-icon" />
            Get Audit
          </Link>

          {/* HAMBURGER */}
          <div
            className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </div>

        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={toggleMenu}
      />

      {/* MOBILE DRAWER MENU */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><a href="/#about" onClick={toggleMenu}>About</a></li>
          <li><a href="/#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="/#why" onClick={toggleMenu}>Why Us</a></li>
          <li><a href="/#process" onClick={toggleMenu}>Process</a></li>
          <li><a href="/#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>

        <Link to="/audit" className="mobile-menu-cta" onClick={toggleMenu}>
          <FaRocket className="btn-icon" />
          Get Audit
        </Link>
      </div>

      {/* ROUTES */}
      <Routes>
        <Route
          path="/"
          element={<LandingPage handleFormSubmit={handleFormSubmit} />}
        />
        <Route path="/audit" element={<AuditWizard />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
      </Routes>

      {/* FOOTER */}
     
<footer className="footer">
  <div className="footer-container">

    {/* Column 1 — Brand */}
    <div className="footer-col">
      <h2 className="footer-title">Savrin</h2>

      <p className="footer-text">
        A modern brand & performance studio — engineered growth,
        powered by design and AI.
      </p>

      <a className="footer-cta" href="/audit">
        <i className="fa fa-rocket"></i> Start a Free Audit
      </a>
    </div>

    {/* Column 2 — About */}
    <div className="footer-col">
      <h3 className="footer-heading">About</h3>
      <ul className="footer-links">
        <li><a href="/#about">About Us</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#why">Why Us</a></li>
        <li><a href="/#process">Process</a></li>
      </ul>
    </div>

    {/* Column 3 — Contact */}
    <div className="footer-col">
      <h3 className="footer-heading">Contact</h3>
      <p className="footer-text">savrin@gmail.com</p>
      <p className="footer-text">+1 (555) 123-4567</p>
      <p className="footer-text">Manila, Philippines</p>
    </div>

    {/* Column 4 — Newsletter */}
    <div className="footer-col">
      <h3 className="footer-heading">Stay Updated</h3>

      <form className="footer-newsletter" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>

      {subMsg && <p className="success-msg">{subMsg}</p>}
    </div>

  </div>

  <p className="footer-bottom">© 2025 Savrin. All rights reserved.</p>
</footer>

    </>
  );
}

export default App;
