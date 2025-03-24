import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
            <Link to="/" className="footer-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Software" className="footer-link">
              Software Engineering
            </Link>
          </li>
          <li>
            <Link to="/Employment" className="footer-link">
              Employment & Job Security
            </Link>
          </li>
          <li>
            <Link to="/Education" className="footer-link">
              CS Edu and Skills Dev
            </Link>
          </li>
          <li>
            <Link to="/Investment" className="footer-link">
              Monetary Investment
            </Link>
          </li>
          <li>
            <Link to="/References" className="footer-link">
              References
            </Link>
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
