import React from 'react';
import './Contact.css'; // Import CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>For any inquiries or support, please contact us:</p>
      <ul className="contact-list">
        <li>
          <strong>Email:</strong> <a href="mailto:ashahamdan975@gmail.com">ashahamdan975@gmail.com</a>
        </li>
        <li>
          <strong>Instagram:</strong> <a href="https://www.instagram.com/asmo25.12/" target="_blank" rel="noopener noreferrer">asmo25.12</a>
        </li>
        <li>
          <strong>Telegram:</strong> <a href="https://t.me/AshaHamdan" target="_blank" rel="noopener noreferrer">Asha Hamdan</a>
        </li>
        <li>
          <strong>WhatsApp:</strong> <a href="https://wa.me/0786625361" target="_blank" rel="noopener noreferrer">0776240227</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
