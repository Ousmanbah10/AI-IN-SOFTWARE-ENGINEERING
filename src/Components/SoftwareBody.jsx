import { Link } from "react-router-dom";
import "/src/Components/softwarebody.css";
import aiImage from "../assets/AIINCS.jpeg";
import aiImage2 from "../assets/AIPhoto2.jpeg";

function SoftwareBody() {
  return (
    <>
      <div className="container">
        <section className="sections">
          <h2 className="title">SOFTWARE ENGINEERING</h2>

          <div className="content-paragraph">
            <p className="mini-question">
              When evaluating whether AI should replace software engineers, a
              closer look at how AI is actually enhancing software development
              makes the answer clear: It Will Not.
            </p>
          </div>
          <h2 className="title">
            How is AI changing the way code gets written?
          </h2>
          <div className="content-paragraph">
            <p className="body-text">
              Artificial intelligence has increasingly become a standard tool in
              software development. Rather than replacing human engineers, it is
              designed to enhance their workflow by reducing repetitive tasks
              and improving code precision. Developers report that tools like
              <a
                href="https://github.com/features/copilot"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                GitHub Copilot
              </a>{" "}
              and{" "}
              <a
                href="https://aws.amazon.com/codewhisperer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon Code Whisperer
              </a>{" "}
              help them concentrate on complex problem-solving by handling
              routine coding suggestions.
              <a
                href="https://www.forbes.com/sites/forbes-engineering/2023/12/07/ais-impact-in-its-first-year-in-software-engineering/?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                "AI in this space has been most effective when it acts as a
                partner…not a replacement…for developers"
              </a>{" "}
              (Forbes 2023). These tools function by generating code suggestions
              based on prompts entered by the developer, but they still rely
              heavily on human judgment, contextual understanding, and
              validation. While AI can save time on syntax writing, it is the
              developer who must make decisions regarding logic, structure, and
              intent. Engineers continue to lead the decision-making process and
              remain responsible for ensuring quality and meeting project goals
              (Forbes 2023).
            </p>
          </div>
        </section>
        <section className="sections">
          <h2 className="title">
            How is AI supporting the workflow on software engineering?
          </h2>
          <div className="content-paragraph">
            <p className="body-text">
              AI is used for more than just writing code. According to{" "}
              <a
                href="https://ieeexplore.ieee.org/ielx7/2/9734242/09734243.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                research published in the IEEE Computer Society journal
              </a>
              , AI is involved across nearly every stage of the software
              engineering lifecycle, including planning, design, testing, and
              maintenance (IEEE Computer Society 2022). During project planning,
              AI can aid development teams with task prioritization, identifying
              areas of risk, and sprint planning. In regard to the design phase,{" "}
              <a
                href="https://ieeexplore.ieee.org/ielx7/2/9734242/09734243.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                "AI can identify and recognize design patterns in software
                through source code and user interface layouts"
              </a>{" "}
              (IEEE Computer Society 2022). AI has also made testing and
              debugging much easier through automation.{" "}
              <a
                href="https://ieeexplore.ieee.org/ielx7/2/9734242/09734243.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                "AI tools can automatically find and repair bugs in code"
              </a>{" "}
              by recognizing recurring code patterns based on patterns in
              previous builds and test results (IEEE Computer Society 2022).
              These functions streamline the development cycle, offering
              real-time feedback and reducing the need for repetitive manual
              corrections.
            </p>
          </div>
        </section>
        <section className="sections">
          <div className="software-img">
            <img src={aiImage} alt="AI in Computer Science" className="image" />

            <img
              src={aiImage2}
              alt="AI in Computer Science"
              className="image"
            />
          </div>
        </section>

        <h2 className="title">Why are software engineers still necessary? </h2>

        <div className="content-paragraph">
          <p className="body-text">
            Though artificial intelligence aids the development process, it will
            never substitute for engineers. These tools are not creative, do not
            have contextual knowledge, nor can they make ethical choices with
            sound judgment. As Forbes is noted to say,{" "}
            <a
              href="https://www.forbes.com/sites/forbes-engineering/2023/12/07/ais-impact-in-its-first-year-in-software-engineering/?utm_source"
              target="_blank"
              rel="noopener noreferrer"
            >
              "The models cannot build applications from scratch, nor can they
              operate without a software engineer's input"
            </a>{" "}
            (Forbes 2023) Evidence confirms this difference, presenting
            artificial intelligence at its most useful within a development
            framework incorporating human supervision and deliberate planning.
            Mashkoor stress that{" "}
            <a
              href="https://ieeexplore.ieee.org/ielx7/2/9734242/09734243.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              "the judgment, experience, and decision-making capabilities of
              human engineers"
            </a>{" "}
            are still vital for guiding and interpreting AI suggestions (IEEE
            Computer Society 2022).
          </p>
        </div>
      </div>
    </>
  );
}

export default SoftwareBody;
