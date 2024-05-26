import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="social-media">
        <a href="https://www.instagram.com"><FaInstagram /></a>
        <a href="https://www.whatsapp.com"><FaWhatsapp /></a>
        <a href="mailto:info@misscheesecake.com"><FaEnvelope /></a>
        <a href="tel:+1234567890"><FaPhone /></a>
      </div>
      <p>Contact us at: info@misscheesecake.com | +1234567890</p>
    </footer>
  );
}

export default Footer;
