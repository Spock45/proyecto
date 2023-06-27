import React from 'react';
import facebookIcon from '../assets/ico-Facebook.png';
import './index.css';

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <div>
        <img src={facebookIcon} alt="Fac" />
       
      </div>
    
    </footer>
  );
};

export default Footer;
