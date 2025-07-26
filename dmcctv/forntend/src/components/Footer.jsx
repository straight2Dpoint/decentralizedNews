import React from 'react';
import { BiLogoTwitter, BiLogoGithub, BiLogoDiscord, BiNews } from 'react-icons/bi';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">
            <BiNews /> Decentralized Marites News
          </h3>
          <p className="footer-about">
            Your trusted source for decentralized news and community-driven journalism.
          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Submit News</a></li>
            <li><a href="#" className="footer-link">Trending</a></li>
            <li><a href="#" className="footer-link">Categories</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Connect With Us</h3>
          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <BiLogoTwitter size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <BiLogoGithub size={24} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <BiLogoDiscord size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DMCCTV. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
