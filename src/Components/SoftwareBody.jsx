import { Link } from "react-router-dom";
function SoftwareBody() {
  return (
    <>
      <div className="home-container">
        <section className="section services" id="services">
          <div className="ai-headlinee">
            <p>AI as a Tool for Enhancing Software Engineering Work</p>
          </div>
          <div className="section-title">
            <h2>
              How Is AI Improving Software
              <span> Development Efficiency?</span>
            </h2>
          </div>
          <article className="about-info">
            <p>
              Artificial Intelligence (AI) is transforming software engineering
              by serving as an advanced assistant rather than a replacement for
              developers. AI-powered tools such as GitHub Copilot and OpenAI’s
              Codex automate repetitive coding tasks, suggest improvements,
              detect inefficiencies, and streamline workflows. This allows
              engineers to focus on higher-level problem-solving and innovation.
              According to Caleb King,AI:
              <a
                href="https://www.forbes.com/sites/forbes-engineering/2023/12/07/ais-impact-in-its-first-year-in-software-engineering/?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                "has significantly reduced debugging time and increased software
                quality, making engineers more efficient without replacing their
                expertise."
              </a>
              By handling routine tasks, AI enhances productivity and enables
              developers to prioritize creativity, system design, and
              optimization.
            </p>
          </article>
        </section>

        <section className="section" id="about">
          <div className="section-title">
            <h2>
              What Role Does AI Play in{" "}
              <span>Debugging and Software Testing?</span>
            </h2>
          </div>

          <div className="section-center about-center">
            <div className="about-img">
              <img
                src="./src/assets/AIINCS.jpeg"
                className="about-photo"
                alt="AI in Computer Science"
              />
            </div>
            <article className="about-info">
              <h3>
                Revolutionizing Debugging <span>This Research?</span>
              </h3>
              <p>
                AI is also revolutionizing debugging and software testing,
                making the development process more reliable and efficient.
                Traditionally, debugging required engineers to manually inspect
                thousands of lines of code, but AI-driven tools now analyze
                patterns, predict errors, and recommend fixes in real time.
                Research by Atif Mashkoor, Tim Menzies, Alexander Egyed, and
                Rudolf Ramler highlights AI’s role in
                <a
                  href="https://fiu-flvc.primo.exlibrisgroup.com/discovery/openurl?institution=01FALSC_FIU&vid=01FALSC_FIU:FIU&date=20220301&issue=3&isbn=&spage=24&title=Computer%20(00189162)&atitle=Artificial%20Intelligence%20and%20Software%20Engineering:%20Are%20We%20Ready%3F&sid=EBSCO:Academic%20Search%20Complete:155866960&volume=55&pages=24-28&issn=00189162&au=Mashkoor,%20Atif&genre=article&ID=doi:10.1109%2FMC.2022.3144805://www.forbes.com/sites/forbes-engineering/2023/12/07/ais-impact-in-its-first-year-in-software-engineering/?utm_source"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "automating bug detection and security testing, significantly
                  reducing the time engineers spend on error resolution."
                </a>{" "}
                AI-driven testing frameworks enhance software quality by
                generating test cases, identifying vulnerabilities, and
                optimizing reliability before deployment, reducing post-launch
                failures.
              </p>
            </article>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-title">
            <h2>
              The Bigger Picture: AI’s Influence
              <span> on Education and Industry</span>
            </h2>
          </div>
          <article className="about-info">
            <h3>Will AI Replace Software Engineers?</h3>
            <p>
              Despite AI’s advancements, it is not a substitute for human
              expertise but a collaborative partner. While AI automates routine
              tasks, it lacks creativity, problem-solving intuition, and an
              understanding of user needs. Engineers remain essential for
              strategic decisions, software architecture, and innovation. As
              King states, AI is
              <a
                href="https://www.forbes.com/sites/forbes-engineering/2023/12/07/ais-impact-in-its-first-year-in-software-engineering/?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                "best used as a tool to complement the work of engineers,
                allowing them to focus on higher-level design and
                decision-making."
              </a>{" "}
              The future of software engineering depends on a collaborative
              balance between AI-driven efficiency and human ingenuity, ensuring
              that AI serves as an asset rather than a replacement in the
              industry.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}

export default SoftwareBody;
