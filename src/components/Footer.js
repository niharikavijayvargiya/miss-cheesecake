import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="social-media">
        <a href="https://www.instagram.com/slice_of_joy_11/?igsh=aTRtY2V3aW9vdHpo"><FaInstagram /></a>
        <a href="https://www.whatsapp.com"><FaWhatsapp /></a>
        <a href="mailto:info@misscheesecake.com"><FaEnvelope /></a>
        <a href="tel:+91-9972967150"><FaPhone /></a>
      </div>
      <p>Contact us at: info@misscheesecake.com | +91-9972967150</p>
    </footer>
  );
}

export default Footer;
