import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    // Set the current year in the date span
    const dateElement = document.getElementById("date");
    if (dateElement) {
      dateElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <a href="#about" className="footer-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Software Engineering
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Employment & Job Security
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              CS Edu and Skills Dev
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Monetary Investment
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              References
            </a>
          </li>
        </ul>

        <p className="copyright">
          copyright &copy; {new Date().getFullYear()} Ousman Bah Florida
          International University
          <span id="date"></span> all rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
