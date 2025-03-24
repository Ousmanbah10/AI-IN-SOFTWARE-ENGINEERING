import React from "react";
import { Link } from "react-router-dom";

function NavigationMain() {
  return (
    <header className="main-nav-container">
      <div className="main-nav-bar">
        <div className="main-nav-logo">
          <Link to="/">
            <h2>AI</h2>
          </Link>
        </div>
        <ul className="main-nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Software">Software Engineering</Link>
          </li>
          <li>
            <Link to="/Employment">Employment & Job Security</Link>
          </li>
          <li>
            <Link to="/Education">CS Edu and Skills Dev</Link>
          </li>
          <li>
            <Link to="/Investment">Monetary Investment</Link>
          </li>
          <li>
            <Link to="/References">References</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavigationMain;
