import { Link } from "react-router-dom";
import "/src/Components/Investment.css";
function InvestmentBody() {
  return (
    <>
      <div className="home-container">
        <section className="section services" id="services">
          <div className="ai-headlinee">
            <p>Monetary Investment and Decisions on AI</p>
          </div>
          <div className="section-title">
            <h2>
              How Much Investment
              <span> Is Flowing Into AI?</span>
            </h2>
          </div>
          <article className="about-info">
            <p>
              AI’s growing role in software engineering has led to major
              financial investments. Gareth Jones stated that
              <a
                href="https://news.fintech.io/post/102jhfk/ai-powered-coding-pulls-in-almost-1b-of-funding-to-claim-killer-app-status"
                target="_blank"
                https
                rel="noopener noreferrer"
              >
                “$1 billion in funding has been raised for AI coding assistants
                since early 2023, demonstrating industry confidence in AI’s
                potential to enhance software development”
              </a>
              (Jones, 2023). He described AI-driven coding tools as “killer
              applications” that are “poised to revolutionize development
              workflows rather than replace human engineers.” This funding
              reflects the industry’s belief that AI will enhance, not replace,
              software engineers.
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
                How Are Companies and
                <span>Policymakers Reacting to AI</span>
              </h3>
              <p>
                As AI investment grows, businesses and policymakers are shaping
                its integration. Professor Spyros Makridakis explained that
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0016328717300046"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  “rather than simply reacting to automation-driven job losses,
                  companies are embracing AI to enhance workforce capabilities”
                </a>
                (Makridakis, 2023). He argued that AI should be viewed as As AI
                investment grows, businesses and policymakers are shaping its
                integration. Professor Spyros Makridakis explained that
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0016328717300046"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  “a means to enhance productivity and job efficiency”
                </a>
                rather than as a tool for replacing workers. Makridakis
                emphasized that companies strategically integrating AI will see
                gains in productivity and adaptability rather than workforce
                displacement.
              </p>
            </article>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-title">
            <h2>
              What Is the Practical Impact of AI
              <span> Investments on the Coding Workforce?</span>
            </h2>
          </div>
          <article className="about-info">
            <h3>Is already reshaping software engineering teams</h3>
            <p>
              Belle Lin, in The Wall Street Journal, noted that
              <a
                href="https://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1b"
                target="_blank"
                rel="noopener noreferrer"
              >
                “AI-assisted platforms such as GitHub Copilot are improving
                efficiency rather than eliminating jobs”
              </a>
              (Lin, 2023). She stated that
              <a
                href="https://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1b"
                target="_blank"
                rel="noopener noreferrer"
              >
                “companies are leveraging AI tools to automate repetitive coding
                tasks, allowing engineers to focus on higher-level
                problem-solving and design.”
              </a>
              Lin further explained that AI is
              <a
                href="https://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1b"
                target="_blank"
                rel="noopener noreferrer"
              >
                “streamlining software development while also requiring
                engineers to upskill and adapt.”
              </a>
            </p>
          </article>
        </section>
      </div>
    </>
  );
}

export default InvestmentBody;
