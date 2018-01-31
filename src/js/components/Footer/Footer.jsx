import React from 'react';
import currentYear from '../../utils/currentYear';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content container">
      <p>Copyright &copy; {currentYear} - Adam Hawkin - All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
