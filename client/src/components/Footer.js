import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Made by Dimitriy.</p>
    </footer>
  );
};

export default Footer;
