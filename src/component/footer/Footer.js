import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
            <div className="footer-container">
        <span className="footer-item">
          <strong>Location</strong><br/>
          GK Motors <br/>
          Tiruvannamalai <br/>
          Pin 606601
        </span>
        <span className="footer-item">
          <strong>Contact</strong>
          <br/>
          R.Kumaran - 6380077877 <br/>
          P.Suresh - 9791106001
        </span>
        <span className="footer-item">
          <strong>Other</strong>
        </span>
      </div>
    </div>
  )
};

export default Footer;