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
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* About Us Section with an id */}
      <div className="footer-section about-us" id="about-us">
        <h2>About Us</h2>
        <p className="large-text">
          Aviatours, Australia is your trusted partner for exploring Australia's beauty—from the rugged Outback to the pristine coastline. We offer exceptional tour packages, reliable hotel bookings, and seamless travel services.
          <br /><br />
          Whether you're seeking an adventurous getaway, a relaxing retreat, or a family holiday, Aviatours ensures every journey is tailored to your needs. Discover the Great Barrier Reef, experience the vibrant culture of Sydney, or unwind in the serene landscapes of Tasmania.
          <br /><br />
          With a commitment to excellence, personalized customer support, and a deep passion for travel, we bring your dream vacations to life. Let Aviatours, Australia guide you on an unforgettable journey through the Land Down Under!
        </p>
      </div>

      {/* What We Provide Section */}
      <div className="footer-section provide">
        <h2>What We Provide</h2>
        <ul>
          <li>Customized Tour Packages</li>
          <li>Hotel Bookings</li>
          <li>Car Rentals</li>
          <li>Group & Solo Travel Support</li>
          <li>24/7 Customer Assistance</li>
        </ul>
      </div>

      {/* Contact Us Section with an id */}
      <div className="footer-section contact-us" id="contact-us">
        <h2>Contact Us</h2>
        <p>123 Sydney Road, Melbourne, Australia</p>
        <p>Phone: +61 439 551 994</p>
        <p>Email: aviatours@gmail.com</p>
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
            href="https://wa.me/61439551994"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Aviatours Australia. All rights reserved.
        </p>
        <p>
          Developed By: <a href="https://freelancerpro.in/" target="_blank" rel="noopener noreferrer">FreelancerPro (INDIA)</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
