import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">Securenexa Technologies</p>
          <p className="footer-text">
            CCTV installation, repair, and maintenance services in Hazaribagh.
          </p>
          <p className="footer-text">
            We work with trusted brands like <strong>CP Plus</strong> to deliver
            high-quality surveillance solutions.
          </p>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Securenexa Technologies</span>
          <span>All rights reserved.</span>
        </div>
      </div>
      <div className="container footer-developer">
        <div className="developer-section">
          <p className="developer-label">Developed by</p>
          <p className="developer-name">Sudhanshu Kumar</p>
          <div className="developer-links">
            
            <a
              href="https://www.linkedin.com/in/sudhanshu-kumar-a3ba18281"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/k_sudhanshu04"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              Instagram: @k_sudhanshu04
            </a>
            <a
              href="mailto:sudhanshukumarhzb04@gmail.com"
              className="developer-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


