import { Link } from "react-router-dom";
function EducationBody() {
  return (
    <>
      <div className="home-container">
        <section className="section services" id="services">
          <div className="ai-headlinee">
            <p>AI’s Impact on Employment and Job Security</p>
          </div>
          <div className="section-title">
            <h2>
              Is AI Leading to Job Losses
              <span> in the Tech Industry?</span>
            </h2>
          </div>
          <article className="about-info">
            <p>
              The increasing adoption of AI in the workforce has sparked debates
              about whether automation is causing job losses or simply reshaping
              employment opportunities. According to Belle Lin in The Wall
              Street Journal, the unemployment rate in the IT sector has risen
              from 3.9% to 5.7% in a short period, with AI automating many
              routine tasks. As she explains,
              <a
                href="https://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1b"
                target="_blank"
                https
                rel="noopener noreferrer"
              >
                "Major companies like Meta and Workday have laid off employees
                as AI continues to streamline job functions, particularly in
                areas such as IT maintenance and repetitive coding."
              </a>
              This observation highlights the reality that while AI automates
              certain processes, it also forces the industry to evolve, with job
              descriptions shifting and new skills becoming critical. By
              handling routine tasks, AI enhances productivity and enables
              developers to prioritize creativity, system design, and
              optimization.
            </p>
          </article>
        </section>

        <section className="section" id="about">
          <div className="section-title">
            <h2>
              Are AI Adoption Rates
              <span>Slower Than Expected?</span>
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
                AI’s integration into <span>the workforce</span>
              </h3>
              <p>
                Despite fears of widespread job loss due to automation, AI’s
                integration into the workforce has been more gradual than many
                anticipated. Kaushik Viswanath from MIT Sloan Management Review
                notes that
                <a
                  href="https://sloanreview.mit.edu/article/reality-check-generative-ais-impact-on-work/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "automating bug detection and security testing, significantly
                  reducing the time engineers spend on error resolution."
                </a>{" "}
                suggesting that the immediate impact on employment may be
                overstated. He further observes that while certain sectors, like
                video game development, are quick to adopt AI, other industries
                such as enterprise software are more cautious. This uneven pace
                of adoption means that many traditional roles remain intact, at
                least for the time being, allowing companies to adjust their
                workforce gradually rather than experiencing abrupt
                displacement.
              </p>
            </article>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-title">
            <h2>
              How Can Software Engineers
              <span> Adapt to AI’s Influence?</span>
            </h2>
          </div>
          <article className="about-info">
            <h3>Will AI Replace Software Engineers?</h3>
            <p>
              Rather than eliminating jobs, AI is fundamentally reshaping the
              skills required for modern software engineers. Belle Lin
              emphasizes that
              <a
                href="https://sloanreview.mit.edu/article/reality-check-generative-ais-impact-on-work/"
                target="_blank"
                rel="noopener noreferrer"
              >
                "companies are not just cutting jobs; they are shifting
                requirements, prioritizing engineers with high-level
                problem-solving skills and expertise in AI integration."
              </a>
              In line with this, Viswanath highlights the adaptability of
              younger workers, stating that{" "}
              <a
                href="https://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1bhttps://www.forhttps://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1bbes.com/sites/forbes-engineering/2023/12/07/ais-impact-in-its-first-year-in-software-engineering/?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                "education and upskilling will be crucial for job security"
              </a>
              as the industry evolves. By embracing continuous learning and
              integrating AI-driven tools into their workflows, engineers can
              transition from routine coding tasks to more strategic roles
              focused on innovation and system design. This collaborative
              approach between AI and human expertise is set to drive the future
              of software development, ensuring that technology empowers
              engineers rather than replaces them.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}

export default EducationBody;
