import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import myPhoto from "../assets/images/myPhoto.jpg";

const Header = () => {
  return (
    <header className="header">
      {/* Left Section: Image and Name */}
      <div className="left-section">
        <img src={myPhoto} alt="Your Name" className="profile-photo" />
        <h1 className="name">Leonardo Dias</h1>
      </div>

      {/* Center Section: Navigation Links */}
      <nav className="center-section nav-links">
        <Link to="/about">About</Link>
        <a href="#projects">Projects</a>
        <a href="#experiences">Experiences</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Right Section: Social Icons */}
      <div className="right-section social-icons">
        <a
          href="https://instagram.com/leoperesd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com/in/leonardo-peres-dias"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Header;
