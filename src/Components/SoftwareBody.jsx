import { Link } from "react-router-dom";
import "/src/Components/softwarebody.css";
import aiImage from "../assets/AIINCS.jpeg";
import aiImagetwo from "../assets/AIPhoto2.jpeg";

function SoftwareBody() {
  return (
    <>
      <div className="container">
        <section className="sections">
          <h2 className="title">AI's IMPACT ON SOFTWARE ENGINEERING</h2>

          <div className="content-paragraph">
            <p className="mini-question">
              When evaluating whether AI should replace software engineers, This
              is a close look at how AI is actually enhancing software
              development.
            </p>
          </div>

          <div className="content-paragraph">
            <p className="body-text">
              Artificial intelligence is rapidly changing how software is
              developed, maintained, and tested. Across classrooms and industry,
              AI is no longer a futuristic concept. It is a practical tool that
              developers use daily. From automating repetitive tasks to
              detecting bugs before they reach production, AI tools are
              streamlining workflows and improving software quality. GitHub's
              CEO Thomas Dohmke highlighted the moment they discovered GPT-3's
              potential, saying it was{" "}
              <a
                href="https://www.wsj.com/articles/how-did-companies-use-generative-ai-in-2023-heres-a-look-at-five-early-adopters-6e09c6b3"
                target="_blank"
                rel="noopener noreferrer"
              >
                "so good at writing code"
              </a>{" "}
              that it inspired the creation of GitHub Copilot showing how
              quickly AI tools are becoming essential for real-world
              development, especially for professionals working in fast-paced
              environments. This product now serves more than{" "}
              <a
                href="https://news.fintech.io/post/102jhfk/ai-powered-coding-pulls-in-almost-1b-of-funding-to-claim-killer-app-status"
                target="_blank"
                rel="noopener noreferrer"
              >
                one million paying users
              </a>{" "}
              across thousands of companies, including Microsoft and Amazon,
              offering suggestions as developers type and completing boilerplate
              code in seconds. As of April 2024,{" "}
              <a
                href="https://news.fintech.io/post/102jhfk/ai-powered-coding-pulls-in-almost-1b-of-funding-to-claim-killer-app-status"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub’s revenue had grown by 45% year over year,
              </a>{" "}
              with Copilot responsible for over 40% of that growth.This level of
              growth highlights how AI is becoming a foundational part of modern
              software development.
            </p>
          </div>
        </section>
        <section className="sections">
          <div className="content-paragraph">
            <p className="body-text">
              AI tools are becoming especially valuable during the early phases
              of development. Developers can describe what they want in plain
              language, and Copilot will generate the code needed to get
              started. As noted in an{" "}
              <a
                href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9734243"
                target="_blank"
                rel="noopener noreferrer"
              >
                IEEE research report
              </a>
              , AI still relies on human input to guide structure and intent.
              The report explains that "humans still{" "}
              <a
                href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9734243"
                target="_blank"
                rel="noopener noreferrer"
              >
                make the key decisions about what the software
              </a>{" "}
              should do and how it should behave," underscoring the importance
              of strong conceptual understanding. For students and junior
              engineers, this means that while AI can help with syntax and
              speed, critical thinking and design logic remain core skills.
            </p>

            <p className="body-text">
              AI is also reshaping software testing and debugging-fixing wrong
              code. Modern systems use AI to recognize patterns from{" "}
              <a
                href="https://www.computer.org/csdl/magazine/so/2024/06/10705649/20LUIFN90m4"
                target="_blank"
                rel="noopener noreferrer"
              >
                previous builds and automatically flag errors
              </a>
              . As one AWS blog post describes, these tools can "
              <a
                href="https://dev.to/aws/ai-assisted-software-development-lifecycle-289k?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                identify and repair buggy code
              </a>
              " before it's even committed to version control where it is
              tested. Code Intelligence, a cybersecurity company that
              specializes in automating software security testing, has developed
              systems that combine AI with{" "}
              <a
                href="https://www.code-intelligence.com/blog/ai-testing-tools?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                dynamic fuzz testing
              </a>
              , allowing software to be stress-tested in unpredictable ways.
              These approaches are already improving code reliability and
              reducing costs for large-scale engineering teams.
            </p>
          </div>
        </section>
        <section className="sections">
          <div className="software-img">
            <img src={aiImage} alt="AI in Computer Science" className="image" />
            <img
              src={aiImagetwo}
              alt="AI in Computer Science"
              className="image"
            />
          </div>
        </section>
        <section className="sections">
          <div className="content-paragraph">
            <p className="body-text">
              In large organizations, AI is also playing a growing role in
              project management and design. According to a Communication of ACM
              report, "AI can support developers by organizing knowledge across
              teams and even{" "}
              <a
                href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                recognizing recurring design patterns
              </a>{" "}
              in codebases". This kind of pattern recognition is helping
              software architects avoid redundant work and spot inefficiencies
              earlier in the process. For professionals managing complex
              systems, it means faster turnaround and fewer bugs reaching
              production. Whether working in testing, development, or systems
              design, today's engineers are learning how to integrate AI into
              their workflows without losing sight of their role. For computer
              science students and recent graduates, this means becoming fluent
              not just in programming languages, but in how to collaborate with
              intelligent tools. As AI continues to evolve, the most effective
              engineers will be those who can combine speed and scale with
              strategy and understanding.
            </p>
          </div>
        </section>
        e{" "}
      </div>
    </>
  );
}

export default SoftwareBody;
