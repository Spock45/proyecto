import React from 'react';
import instagramIcon from '../assets/ico-instagram.png';

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <div>
        <img src={instagramIcon} alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
