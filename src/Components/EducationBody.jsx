import { Link } from "react-router-dom";
import "/src/Components/education.css";
function EducationBody() {
  return (
    <>
      <div className="home-container">
        <section className="section services" id="services">
          <div className="ai-headlinee">
            <p>
              AI’s Influence on Computer Science Education and Skills
              Development
            </p>
          </div>
          <div className="section-title">
            <h2>
              How Is AI Reshaping
              <span> Computer Science Education?</span>
            </h2>
          </div>
          <article className="about-info">
            <p>
              Artificial Intelligence is transforming the way computer science
              is taught, with universities adapting curricula to incorporate AI
              literacy. Esther Shein highlights how institutions are integrating
              AI courses to prepare students for an AI-driven workforce, stating
              that
              <a
                href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source=chatgpt.com"
                target="_blank"
                https
                rel="noopener noreferrer"
              >
                "universities are recognizing the necessity of AI education and
                reshaping curricula accordingly"
              </a>
              (Shein). This shift ensures that graduates possess relevant skills
              in AI application, automation, and ethical considerations. As AI
              technology evolves, educational institutions are focusing on
              equipping students with the ability to work alongside AI rather
              than be displaced by it.
            </p>
          </article>
        </section>

        <section className="section" id="about">
          <div className="section-title">
            <h2>
              Will AI Literacy Become Essential
              <span>for Future Software Engineers?</span>
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
                AI’s integration into <span>the Software Engineering</span>
              </h3>
              <p>
                The increasing role of AI in software engineering has sparked
                debates about whether AI literacy should be an elective or a
                core requirement. Kwan Kevin Tan, in an article for Business
                Insider, reassures students that AI will not replace computer
                science degrees but instead enhance them. He notes that
                <a
                  href="https://www.businessinsider.com/relax-college-kids-ai-will-not-kill-computer-science-degree-2024-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "AI tools like GitHub Copilot are improving software
                  engineers’ efficiency rather than rendering their skills
                  obsolete"
                </a>
                (Tan). His findings suggest that AI literacy will become a
                required skill, similar to how programming fundamentals are
                essential today. Instead of making software engineers redundant,
                AI is pushing for a shift in skill development, emphasizing
                adaptability and problem-solving.
              </p>
            </article>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-title">
            <h2>
              How Are Industry Experts
              <span> and Educators Responding?</span>
            </h2>
          </div>
          <article className="about-info">
            <h3>Will AI Replace Software Engineers?</h3>
            <p>
              Both industry leaders and educators agree that AI literacy is
              becoming a crucial competency. Shein emphasizes that
              <a
                href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source=chatgpt.com"
                target="_blank"
                https
                rel="noopener noreferrer"
              >
                "preparing students for an AI-integrated workforce requires a
                balance of technical knowledge and ethical AI training,"
              </a>
              highlighting the importance of responsible AI usage in real-world
              applications (Shein). Similarly, Tan’s report indicates that
              professors see AI as a tool that enhances learning, making
              software development more accessible and efficient. As AI
              continues to shape the job market, universities and industry
              professionals are aligning efforts to ensure that future software
              engineers are equipped with the skills necessary to navigate an
              AI-powered landscape.
            </p>
            <h3>Conclusion</h3>
            <p>
              AI is not replacing computer science education; instead, it is
              redefining it. The future of software engineering will require AI
              literacy as an integral part of learning, ensuring that students
              are prepared for a collaborative future with AI. Universities and
              industry leaders are actively working to integrate AI-focused
              education, reinforcing that AI is not a threat to aspiring
              software engineers but a tool that will shape their careers.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}

export default EducationBody;
