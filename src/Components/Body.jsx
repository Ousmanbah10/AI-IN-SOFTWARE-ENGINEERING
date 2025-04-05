import React from "react";
import "./Body.css";
import aiImage from "../assets/AIPhoto1.jpeg";

function Body() {
  return (
    <div className="container">
      <section className="section" id="section-buttom">
        <h2 className="title">
          What is AI and Its Future in Software Engineering?
        </h2>

        <div className="content-paragraph">
          <p className="body-text">
            In late 2022,{" "}
            <a
              href="https://chat.openai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ChatGPT
            </a>{" "}
            burst onto the technology scene, followed quickly by GitHub, Copilot
            , and other AI coding assistants that fundamentally changed the
            field of software engineering. The rapid adoption of these tools
            sparked new debates about the future of human developers in an
            increasingly automated landscape. This analysis examines three key
            areas: AI's impact on software engineering practices, its influence
            on computer science education, and its effects on employment in the
            technology industry.
          </p>
          <p className="body-text">
            This wave of{" "}
            <a
              href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              generative AI
            </a>{" "}
            tools: systems designed to create new content rather than simply
            analyze existing data, have revolutionized software development,
            handling everything from routine coding tasks to suggesting
            solutions for complex systems. The technology can now complete code
            blocks, debug programs, and generate functions based on natural
            language descriptions. For computer science students, recent
            graduates, educators at schools and universities, and experienced
            professionals, the looming question of job security has become
            unavoidable. As these AI systems grow increasingly sophisticated,
            understanding their impact on the software engineering profession
            becomes critical.
          </p>
          <p className="body-text">
            One example proves the point: I used AI to generate{" "}
            <a
              href="https://vocal-wisp-4cb7f8.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              this website
            </a>{" "}
            , after I gave it all the content I used to build this page and the
            result clearly lacks thoughtful design, structure, and visual
            appeal. Without human input, even the most advanced tools fall
            short. This reinforces the idea that AI can assist—but not
            replace—skilled engineers and designers.
          </p>
          <p className="body-text">
            Research from McKinsey & Company indicates that generative AI could
            automate up to{" "}
            <a
              href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              30% of software development tasks
            </a>
            , though full replacement of human engineers remains unlikely. By
            exploring these three dimensions of AI's influence, we can better
            prepare for a future where software engineers will need to adapt to
            new skill sets and also remain indispensable contributors to
            technological progress in ways that automated systems cannot achieve
            alone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="image-container">
          <img src={aiImage} alt="AI in Computer Science" className="image" />
        </div>
      </section>
    </div>
  );
}

export default Body;
