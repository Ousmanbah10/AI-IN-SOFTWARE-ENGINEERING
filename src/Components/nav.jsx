import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="nav-wrapper">
      <div className="nav-image-container">
        <video
          src="./src/assets/BGVIDEO.mp4"
          className="nav-background-video"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="top-nav">
          <div className="logo top-logo">
            <Link to="/">
              <h2>AI</h2>
            </Link>
          </div>
          <ul className="nav-links top-nav-links">
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
        <div className="ai-headline">
          <h1>ARTIFICIAL INTELLIGENCE</h1>
          <h2>
            Understanding AI and <br />
            Its Role in Software Engineering
            <br />
            <h6>By Ousman Bah</h6>
          </h2>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
