import { Link } from "react-router-dom";
import bgvideo from "../assets/BGVIDEO.mp4";
function Navigation() {
  return (
    <header className="nav-wrapper">
      <div className="nav-image-container">
        <video
          src={bgvideo}
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
              <Link to="/Education">AI In CS Edu and Skills Dev</Link>
            </li>
            <li>
              <Link to="/Software">AI In Software Engineering</Link>
            </li>
            <li>
              <Link to="/Employment">AI In Employment & Job Security</Link>
            </li>

            <li>
              <Link to="/References">References</Link>
            </li>
          </ul>
        </div>
        <div className="ai-headline">
          <h1>Beyond the Code</h1>
          <h2>
            What Every Computer Science Student and Tech Professional Should
            Know About AI’s Role in Software Engineering
          </h2>
          <h3>By Ousman Bah</h3>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
