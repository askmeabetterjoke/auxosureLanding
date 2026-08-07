import React from 'react';
import AnimatedLogo from './AnimatedLogo';

const Footer = ({ onRequestDemo }) => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <AnimatedLogo size="small" darkTheme />
          <p className="footer-copy">
            © {new Date().getFullYear()} Auxosure. All rights reserved.
          </p>
        </div>
        <div className="footer-links">
          <a href="#build">Build</a>
          <a href="#services">Services</a>
          <a href="#delivery">Delivery</a>
          <a href="#integrations">Integrations</a>
          <button type="button" className="footer-cta" onClick={onRequestDemo}>
            Book a call
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
