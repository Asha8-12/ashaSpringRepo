import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>For any inquiries or support, please contact us:</p>
      <ul className="contact-list">
        <li>
          <strong>Email:</strong> <span className="contact-info"><a href="mailto:ashahamdan975@gmail.com">maryam.khamis@gmail.com</a></span>
        </li>
        <li>
          <strong>Instagram:</strong> <span className="contact-info"><a href="https://www.instagram.com/asmo25.12/" target="_blank" rel="noopener noreferrer">asmo25.12</a></span>
        </li>
        <li>
          <strong>Telegram:</strong> <span className="contact-info"><a href="https://t.me/AshaHamdan" target="_blank" rel="noopener noreferrer">Asha Hamdan</a></span>
        </li>
        <li>
          <strong>WhatsApp:</strong> <span className="contact-info"><a href="https://wa.me/0786625361" target="_blank" rel="noopener noreferrer">0776240227</a></span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
