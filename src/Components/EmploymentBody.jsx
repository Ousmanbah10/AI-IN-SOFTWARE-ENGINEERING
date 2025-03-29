import { Link } from "react-router-dom";
import "/src/Components/employmentbody.css";
import aiImage from "../assets/AIPhoto7.png";

function EmploymentBody() {
  return (
    <>
      <div className="employment-container">
        <section className="employment-section" id="employment-intro">
          <div className="employment-headline">
            <p>AI's Impact on Employment and Job Security</p>
          </div>
          <div className="mini-question">
            <p>
              When evaluating whether AI affects jobs in tech, what does the
              research actually show?
            </p>
          </div>
          <div className="employment-title">
            <h2>
              Is AI Leading to Job Losses
              <span> in the Tech Industry?</span>
            </h2>
          </div>
          <article className="employment-info">
            <p>
              Artificial Intelligence is reshaping the tech world in ways nobody
              expected. It's not just about robots taking jobs, the reality is
              much more complicated. Tech workers are finding themselves in a
              rapidly evolving environment where skills matter more than ever.
              This section explores how AI is influencing job opportunities in
              tech, especially for software engineers and future computer
              science professionals.
            </p>
          </article>
        </section>

        <section className="employment-section" id="employment-adoption">
          <div className="employment-title">
            <h2>Changing Job Numbers in IT</h2>
          </div>

          <div className="employment-content">
            <div className="employment-img">
              <img
                src={aiImage}
                className="employment-photo"
                alt="AI in Computer Science"
              />
            </div>
            <article className="employment-info">
              <p>
                In early 2025, the unemployment rate in the information
                technology sector rose from 3.9 percent to 5.7 percent in just
                one month (
                <a
                  href="https://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wall Street Journal
                </a>
                ). This change has raised concerns about the future of tech
                employment. Many experts believe that some of these job losses
                are due to AI automating tasks that were once done by people.
                Routine jobs like data entry or clerical support are especially
                vulnerable. However, the same article explains that companies
                are also investing heavily in AI tools, not just to replace
                workers, but to improve efficiency. Some companies are cutting
                back on hiring and calling it "cost avoidance." a term used by
                tech leaders to describe their strategy of using AI to automate
                tasks instead of expanding staff Instead of creating new jobs,
                they're using AI to do more with fewer people (
                <a
                  href="https://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wall Street Journal, 2025
                </a>
                ). This rise in unemployment doesn't mean software engineers are
                becoming obsolete, but it does signal a shift in the types of
                roles and skills that will be most in demand moving forward.
              </p>
            </article>
          </div>
        </section>

        <section className="employment-section" id="employment-adapt">
          <div className="employment-title">
            <h2>The Real State of Employment</h2>
          </div>
          <article className="employment-info">
            <p>
              A report from{" "}
              <a
                href="https://sloanreview.mit.edu/article/reality-check-generative-ais-impact-on-work/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT Sloan Management Review
              </a>{" "}
              revealed a surprising fact: only 5 percent of U.S. businesses are
              actually using AI to produce goods or services. Most companies are
              still figuring out what AI can really do. This means the AI job
              apocalypse everyone's worried about? It's not happening, at least
              not yet. Tech professionals who can adapt, learn, and work
              alongside AI tools are the ones who will thrive in this new
              landscape.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}

export default EmploymentBody;
