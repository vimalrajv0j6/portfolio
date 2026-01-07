import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Vimalraj. All rights reserved.</p>
        <p>Designed & Developed with ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;