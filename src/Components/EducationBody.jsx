import React from "react";
import "/src/Components/education.css";
import aiImage from "../assets/AIPhoto5.jpeg";

function EducationBody() {
  return (
    <>
      <div className="education-container">
        <section className="education-section" id="education-intro">
          <div className="education-headline">
            <p>
              AI's Influence on Computer Science Education and Skills
              Development
            </p>
          </div>

          <div className="education-question">
            <p>
              How are universities adapting their curricula to prepare students
              for an AI-driven future?
            </p>
          </div>

          <div className="education-title">
            <h2>
              How Is AI Reshaping
              <span> Computer Science Education?</span>
            </h2>
          </div>

          <article className="education-info">
            <p>
              Artificial Intelligence is transforming how computer science is
              taught. Universities are adapting curricula to incorporate AI
              literacy as it becomes integrated into most job sectors, according
              to research from the{" "}
              <a href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source">
                Communications of the ACM
              </a>
              . Computer science professors emphasize that earning a degree
              remains valuable in the age of AI. As Kan Min Yen from the
              National University of Singapore notes in the{" "}
              <a href="https://www.businessinsider.com/relax-college-kids-ai-will-not-kill-computer-science-degree-2024-8">
                Business Insider
              </a>{" "}
              article, "The AI wave is actually driving demand for computing
              professionals in general, because maturing AI is transformative
              and needs to be integrated into many facets of life." While AI
              tools increasingly assist with coding, foundational knowledge of
              computer science principles, problem-solving methodologies, and
              system design remains crucial. Educational institutions are
              preparing students for environments where tools like GitHub
              Copilot and ChatGPT are standard.
            </p>
          </article>
        </section>

        <section className="education-section" id="education-literacy">
          <div className="education-title">
            <h2>
              Will AI Literacy Become Essential
              <span> for Future Software Engineers?</span>
            </h2>
          </div>

          <div className="literacy-container">
            <div className="literacy-image-side">
              <img
                src={aiImage}
                className="literacy-image"
                alt="AI in Computer Science"
              />
              <div className="literacy-caption">Future Skills</div>
            </div>

            <div className="literacy-content-side">
              <p className="literacy-text">
                The role of AI in software engineering has sparked debates about
                whether AI literacy should be a core requirement. Professors
                reassure students that AI will enhance rather than replace
                computer science degrees, as reported in
                <a href="https://www.businessinsider.com/relax-college-kids-ai-will-not-kill-computer-science-degree-2024-8">
                  Business Insider
                </a>
                .
              </p>

              <div className="literacy-quote">
                "AI tools like GitHub Copilot are improving software engineers'
                efficiency rather than rendering their skills obsolete"
                <span className="quote-source">— Kwan Kevin Tan</span>
              </div>

              <p className="literacy-text">
                An MIT experiment divided students into three groups to solve a
                programming task using ChatGPT, Code Llama, or just Google. The
                ChatGPT group finished first but later "remembered nothing, and
                they all failed" when tested on understanding. The Google group,
                who had to struggle through solutions, all passed, demonstrating
                that learning requires effort.
              </p>

              <p className="literacy-text">
                Despite AI's code generation capabilities, educators emphasize
                that computer science teaches problem-solving approaches, not
                just coding. AI is shifting skill development toward
                adaptability and critical thinking.
              </p>
            </div>
          </div>

          <div className="edu-stats-container">
            <div className="edu-stat-card">
              <div className="edu-stat-value">90%</div>
              <div className="edu-stat-label">
                of jobs will be disrupted by generative AI according to
                Cognizant study cited in
                <a href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source">
                  Communications of the ACM
                </a>
              </div>
            </div>
            <div className="edu-stat-card">
              <div className="edu-stat-value">60%</div>
              <div className="edu-stat-label">
                of jobs in advanced economies are being impacted by AI according
                to IMF analysis
              </div>
            </div>
            <div className="edu-stat-card">
              <div className="edu-stat-value">23%</div>
              <div className="edu-stat-label">
                of wages linked to vision-related tasks could be
                cost-effectively replaced by AI
              </div>
            </div>
          </div>
        </section>

        <section className="education-section" id="education-response">
          <div className="education-title">
            <h2>
              How Are Industry Experts
              <span> and Educators Responding?</span>
            </h2>
          </div>
          <article className="education-info">
            <p>
              Industry leaders and educators agree that AI literacy is becoming
              crucial.
              <a href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source">
                Beena Ammanath
              </a>{" "}
              from
              <a href="https://www2.deloitte.com/us/en/pages/consulting/topics/artificial-intelligence.html">
                Deloitte
              </a>{" "}
              states, "You still need the foundation to be effective computer
              scientists and software engineers," emphasizing understanding of
              software principles, data management, and security. Universities
              are rethinking how to incorporate AI tools into teaching.
              <a href="https://www.cmu.edu/ai/">
                Carnegie Mellon University
              </a>{" "}
              is "embracing the technology" by requiring students to use it to
              learn about the technology itself. Programs are introducing
              specializations in data science, machine learning, and user
              experience.
              <a href="https://www.ri.cmu.edu/ri-faculty/reid-simmons/">
                Reid Gordon Simmons
              </a>{" "}
              from Carnegie Mellon notes, "AI won't take away jobs but will
              change the nature of jobs." Software engineers will likely focus
              more on requirements and specifications rather than coding. "I
              firmly believe AI cannot be fully autonomous... there's always
              going to be humans and machines working together and the machine
              is augmenting the human's capabilities." This collaboration is
              creating new specialization opportunities within computer science
              education.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}

export default EducationBody;
