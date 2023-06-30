import React from 'react';
import '../index.css';
import DH from '../assets/DH.png';
import icoinstagram from '../assets/ico-instagram.png';

const Footer = () => {
  return (
    <footer >
  

      <div>
        <img className="footer-img" src={DH} alt="Digital" style= {{width:'10%'}} />
        <p className="footer-p"> Digital House 2023</p>
        <img className="footer >img" src={icoinstagram} alt="ico-Instagram" style= {{width:'10%'}} />
      </div>
    </footer>
  );
};

export default Footer;

