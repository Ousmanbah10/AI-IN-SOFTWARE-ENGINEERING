import { Link } from "react-router-dom";
import "/src/Components/Investment.css";
import aiImage from "../assets/AIPhoto4.jpeg";

function InvestmentBody() {
  return (
    <>
      <div className="investment-container">
        <div className="investment-headline">
          <h1>MONETARY INVESTMENT AND DECISIONS ON AI</h1>
        </div>

        <div className="investment-question">
          <p>
            How are financial investments shaping the future of AI in software
            engineering?
          </p>
        </div>

        <section className="investment-section">
          <div className="section-title">
            <h2>How Much Investment Is Flowing Into AI?</h2>
          </div>
          <div className="investment-content">
            <p>
              The software engineering world has witnessed an unprecedented
              surge in AI funding recently. According to industry reports,
              investors have poured over $1 billion into AI coding assistant
              technologies since early 2023 (
              <a
                href="https://news.fintech.io/post/102jhfk/ai-powered-coding-pulls-in-almost-1b-of-funding-to-claim-killer-app-status"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI Funding Report, 2023
              </a>
              ). Why such massive investment? These tools are proving to thebe
              true in development workflows, enhancing rather than replacing
              human engineers. Take GitHub Copilot from its 2022 launch, it's
              attracted nearly 2 million paying subscribers. When a tool grows
              this rapidly, it signals something significant about market
              demand. Developers are voting with their wallets, integrating
              these AI assistants into their daily coding routines despite
              initial skepticism.
            </p>
          </div>
        </section>

        <section className="investment-section">
          <div className="section-title">
            <h2>How Are Companies Reacting to AI Investments?</h2>
          </div>
          <div className="investment-content">
            <div className="investment-image-container">
              <img src={aiImage} alt="AI Investment" />
            </div>
            <p>
              Companies aren't just reacting to AI, but proactively remaking
              their processes with it.
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0016328717300046"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Futures journal
              </a>{" "}
              research shows a telling shift: visionary companies now see AI as
              a productivity booster, rather than as a worker-replacement
              strategy. This approach reverses the way companies adopt, shifting
              toward augmentation instead of automation. The numbers tell the
              story, GitHub's 45% year-over-year revenue growth and $2 billion
              annual run rate didn't happen by chance. With over 40% of this
              growth being driven by AI tools, software companies are taking
              notice. These aren't just remarkable numbers, they're proof that
              strategic AI integration delivers bottom-line ROI.
            </p>
          </div>
        </section>

        <section className="investment-section">
          <div className="section-title">
            <h2>Investment Statistics</h2>
          </div>
          <div className="investment-stats-container">
            <div className="investment-stat-card">
              <div className="investment-stat-value">$1B</div>
              <div className="investment-stat-label">
                <a
                  href="https://news.fintech.io/post/102jhfk/ai-powered-coding-pulls-in-almost-1b-of-funding-to-claim-killer-app-status"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  In funding raised for AI coding assistants since early 2023
                </a>
              </div>
            </div>
            <div className="investment-stat-card">
              <div className="investment-stat-value">45%</div>
              <div className="investment-stat-label">
                <a
                  href="https://news.fintech.io/post/102jhfk/ai-powered-coding-pulls-in-almost-1b-of-funding-to-claim-killer-app-status"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Year-over-year revenue growth for GitHub following AI
                  integration
                </a>
              </div>
            </div>
            <div className="investment-stat-card">
              <div className="investment-stat-value">40%+</div>
              <div className="investment-stat-label">
                <a
                  href="https://news.fintech.io/post/102jhfk/ai-powered-coding-pulls-in-almost-1b-of-funding-to-claim-killer-app-status"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Of GitHub's revenue growth driven by Copilot AI
                </a>
              </div>
            </div>
          </div>
          <div className="investment-content">
            <p>
              The money flowing into AI development tools reveals market
              confidence better than any analyst prediction could. The roughly
              <a
                href="https://news.fintech.io/post/102jhfk/ai-powered-coding-pulls-in-almost-1b-of-funding-to-claim-killer-app-status"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                $1 billion invested in AI coding assistants
              </a>{" "}
              since early 2023 represents more than just venture capital, it's a
              bet on how software will be built in the future. GitHub's
              remarkable
              <a
                href="https://github.blog/2023-06-20-github-copilot-enterprise-is-generally-available/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                45% revenue growth
              </a>{" "}
              following their AI integration effort provides real-world
              validation. Most telling is that
              <a
                href="https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                40% of GitHub's recent growth comes directly from Copilot
              </a>
              , their AI assistant. When a tool contributes this significantly
              to a platform's bottom line, it's crossing from interesting
              technology to essential business infrastructure.
            </p>
          </div>
        </section>

        <section className="investment-section">
          <div className="section-title">
            <h2>
              What Is the Practical Impact of AI Investments on the Coding
              Workforce?
            </h2>
          </div>
          <div className="investment-content">
            <p>
              Rather than replacing developers, AI tools are transforming their
              daily work.
              <a
                href="https://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1b"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                The Wall Street Journal
              </a>{" "}
              found that teams using AI assistants are redirecting their energy
              toward complex design challenges while automating repetitive
              coding tasks. This shift doesn't eliminate jobs, it redefines
              them, elevating human contributions to focus on areas requiring
              creativity and judgment.
            </p>
            <p>
              Microsoft's substantial backing of GitHub's AI initiatives isn't
              surprising given these trends. Their investment strategy provides
              a blueprint for other companies contemplating similar moves. The
              rapidly expanding market for AI-enhanced development tools
              suggests we're just seeing the beginning of how AI will reshape
              software creation. Far from replacing developers, these
              investments are creating new possibilities for what engineers can
              accomplish when augmented by intelligent assistants.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default InvestmentBody;
