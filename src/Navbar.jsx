import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyStartup</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      <button className="nav-cta">Get Started</button>
    </nav>
  );
}
