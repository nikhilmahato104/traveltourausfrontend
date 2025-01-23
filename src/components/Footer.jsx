import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css"; // Ensure styling supports dark/light themes

const Footer = () => {
  return (
    <footer className="footer">
      {/* Contact Us Section */}
      <div className="footer-section contact-us">
        <h2>Contact Us</h2>
        <p>123 Sydney Road, Melbourne, Australia</p>
        <p>Phone: +61 123 456 789</p>
        <p>Email: contact@traveltoursaus.com</p>
        <p>
          WhatsApp us:{" "}
          <a
            href="https://wa.me/919304260733"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 9304260733
          </a>
        </p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/919304260733"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* About the Company */}
      <div className="footer-section about-us">
        <h2>About Us</h2>
        <p>
          Welcome to Travel Tours Australia, your trusted partner for exploring
          the breathtaking beauty of Australia. From the rugged Outback to
          pristine beaches, we provide exceptional tour packages, reliable hotel
          bookings, and convenient transportation services.
        </p>
        <p>Experience the journey of a lifetime with us!</p>
      </div>

      {/* Our Services */}
      <div className="footer-section services">
        <h2>Our Services</h2>
        <ul>
          <li>Customized Tour Packages</li>
          <li>Hotel Bookings</li>
          <li>Car Rentals</li>
          <li>Room Bookings</li>
          <li>Group and Solo Travel Support</li>
          <li>24/7 Customer Assistance</li>
        </ul>
      </div>

      {/* Developers Section */}
      <div className="footer-section developers">
        <h2>Meet the Developers</h2>
        <p>
          Crafted with ❤️ by a passionate team of developers dedicated to
          delivering seamless web experiences.
        </p>
        <p>
          <strong>Nikhil Ma</strong> - Full Stack Developer (
          <a
            href="https://www.linkedin.com/in/nikhil-ma"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          )
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/nikhil-ma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nikhil-ma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:nikhil@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/nikhil_ma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Travel Tours Australia. All rights reserved.</p>
        <p>Designed with ❤️ by the Travel Tours Web Team.</p>
      </div>
    </footer>
  );
};

export default Footer;
