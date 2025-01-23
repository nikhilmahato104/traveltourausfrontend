import React from 'react';
import './WhatsAppButton.css'; // Updated CSS file name

const ContactButtons = () => {
  return (
    <div className="contact-buttons">
      <a href="tel:+919304260733" className="phone-button" target="_blank" rel="noopener noreferrer">
        📞
      </a>
      <a href="https://wa.me/919304260733" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        💬
      </a>
    </div>
  );
};

export default ContactButtons;
