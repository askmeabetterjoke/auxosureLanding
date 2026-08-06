import React from 'react';
import AnimatedLogo from './AnimatedLogo';

const Footer = ({ onRequestDemo }) => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <AnimatedLogo size="small" darkTheme />
          <p className="footer-copy" style={{ marginTop: 12 }}>
            © {new Date().getFullYear()} Auxosure. All rights reserved.
          </p>
        </div>
        <div className="footer-links">
          <a href="#why-auxosure">Why Auxosure</a>
          <a href="#voice-demo">Voice Demo</a>
          <a href="#integrations">Integrations</a>
          <button
            onClick={onRequestDemo}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--signal-coral)',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Request a Demo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
