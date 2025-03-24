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
              According to Caleb King, AI "has significantly reduced debugging
              time and increased software quality, making engineers more
              efficient without replacing their expertise." By handling routine
              tasks, AI enhances productivity and enables developers to
              prioritize creativity, system design, and optimization.
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
                Rudolf Ramler highlights AI’s role in "automating bug detection
                and security testing, significantly reducing the time engineers
                spend on error resolution." AI-driven testing frameworks enhance
                software quality by generating test cases, identifying
                vulnerabilities, and optimizing reliability before deployment,
                reducing post-launch failures.
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
              King states, AI is "best used as a tool to complement the work of
              engineers, allowing them to focus on higher-level design and
              decision-making." The future of software engineering depends on a
              collaborative balance between AI-driven efficiency and human
              ingenuity, ensuring that AI serves as an asset rather than a
              replacement in the industry.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}

export default SoftwareBody;
