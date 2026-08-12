import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <NavLink to="/" className="footer-logo">
            <span>Edu</span>Sphere
          </NavLink>

          <p>
            Empowering students with modern skills, practical knowledge,
            and career-focused training.
          </p>

          <div className="footer-socials">
            <a href="#!" aria-label="Facebook">f</a>
            <a href="#!" aria-label="Instagram">◎</a>
            <a href="#!" aria-label="LinkedIn">in</a>
            <a href="#!" aria-label="Twitter">𝕏</a>
          </div>
        </div>


        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>

            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>

            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>


        {/* Courses */}
        <div className="footer-column">
          <h3>Popular Courses</h3>

          <ul>
            <li>
              <NavLink to="/courses">Web Development</NavLink>
            </li>

            <li>
              <NavLink to="/courses">React JS</NavLink>
            </li>

            <li>
              <NavLink to="/courses">JavaScript</NavLink>
            </li>

            <li>
              <NavLink to="/courses">UI / UX Design</NavLink>
            </li>

            <li>
              <NavLink to="/courses">Python</NavLink>
            </li>
          </ul>
        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>

          <div className="contact-item">
            <span>📍</span>
            <p>Karachi, Pakistan</p>
          </div>

          <div className="contact-item">
            <span>✉</span>
            <p>info@edusphere.com</p>
          </div>

          <div className="contact-item">
            <span>☎</span>
            <p>+92 300 1234567</p>
          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 <span>EduSphere</span>. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;