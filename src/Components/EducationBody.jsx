import React from "react";
import "/src/Components/education.css";
import aiImage from "../assets/AIPhoto5.jpeg";

function EducationBody() {
  return (
    <>
      <div className="education-container">
        <section className="education-section" id="education-intro">
          <div className="education-headline">
            <p>AI's Influence on Computer Science Education</p>
          </div>

          <div className="education-question">
            <p>
              How are universities adapting their curricula to prepare students
              for an AI-driven future?
            </p>
          </div>

          <article className="education-info">
            <p>
              As artificial intelligence continues to reshape the tech industry,
              its influence is becoming especially clear in computer science
              classrooms.{" "}
              <a
                href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI is no longer just a topic to study,
              </a>{" "}
              It is changing how instructors teach, how students learn, and how
              future engineers are prepared. For computer science students and
              recent graduates, this shift affects what skills they will need to
              succeed in AI-integrated workplaces. As a professor from the
              National University of Singapore notes, the growing use of AI is
              already{" "}
              <a
                href="https://www.businessinsider.com/relax-college-kids-ai-will-not-kill-computer-science-degree-2024-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                "driving demand for computing professionals"
              </a>{" "}
              across fields, making AI literacy a competitive edge, not an
              optional skill.
            </p>
          </article>
        </section>

        <section className="education-section" id="education-literacy">
          <div className="literacy-container">
            <div className="literacy-image-side">
              <img
                src={aiImage}
                className="literacy-image"
                alt="AI in Computer Science"
              />
            </div>

            <div className="literacy-content-side">
              <p className="literacy-text">
                At the same time, educators are facing the challenge of
                balancing AI tool adoption with meaningful learning. In a recent
                study done by{" "}
                <a
                  href="https://news.slashdot.org/story/24/09/07/2148218/mit-cs-professor-tests-ais-impact-on-educating-programmers?utm_source"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MIT,
                </a>{" "}
                students using ChatGPT completed tasks faster, but they
                remembered nothing, and they all failed the follow-up test. The
                students who solved the problems without AI passed, showing
                stronger understanding. Professor Eric Klopfer, who led the
                study, explained that{" "}
                <a
                  href="https://news.slashdot.org/story/24/09/07/2148218/mit-cs-professor-tests-ais-impact-on-educating-programmers?utm_source"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "working hard and struggling"
                </a>{" "}
                is a crucial part of the learning process. For educators and
                institutions, this highlights the need to rethink how AI tools
                are used. They should support learning, not replace it.
              </p>

              <p className="literacy-text">
                Some universities are already adapting. At{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source"
                >
                  Carnegie Mellon University
                </a>
                , students are asked to use AI tools like ChatGPT or Copilot to
                explore how these systems work, rather than to complete
                assignments for them. This strategy will help future engineers
                develop critical thinking and responsible tech habits, skills
                that will be expected by employers. Julie York, a curriculum
                specialist with the Computer Science Teachers Association,
                stresses that digital literacy should start early, arguing that
                "{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://news.slashdot.org/story/24/09/07/2148218/mit-cs-professor-tests-ais-impact-on-educating-programmers?utm_source"
                >
                  if second graders can learn about safety
                </a>{" "}
                in a crosswalk, they can learn about safety online". These
                perspectives show how AI education is expanding from
                universities into K–12 environments, preparing future students
                earlier than ever.
              </p>
            </div>
          </div>
        </section>

        <section className="education-section" id="education-response">
          <article className="education-info">
            <p>
              As tools like GitHub Copilot become{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.forbes.com/sites/forbes-engineering/2023/12/07/ais-impact-in-its-first-year-in-software-engineering/?utm_source"
              >
                common in real-world development teams,
              </a>{" "}
              educators are reaffirming the importance of foundational computer
              science knowledge.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source"
              >
                Beena Ammanath
              </a>
              , executive director at Deloitte's Global AI Institute, puts it
              simply. Students "still need the foundation to be effective
              computer scientists and software engineers." In classrooms and
              bootcamps also, there is a push to strengthen understanding of
              algorithms, data structures, and system design. While AI can
              generate code, it still takes a human to know whether that code is
              correct, efficient, or even ethical.
            </p>

            <p>
              Universities are also developing new programs and concentrations
              tailored to the AI era. Topics like prompt engineering, machine
              learning ethics, and responsible AI development{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source"
              >
                are being introduced to equip students
              </a>{" "}
              with the knowledge they will need in tomorrow's jobs. These
              changes matter not just for students entering the field, but also
              for professionals looking to stay relevant. As one professor from
              Carnegie Mellon explains,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source"
              >
                "AI cannot be fully autonomous"
              </a>
              . Humans will continue to guide these systems, making decisions
              that require judgment, creativity, and ethical reflection.
            </p>

            <p>
              This shift is pushing schools to prioritize skills that AI cannot
              easily replicate. Creativity, ethical reasoning, and communication
              are becoming just as important as coding ability, especially for
              future developers expected to collaborate with AI systems in team
              environments. For students, that means learning to approach
              problems from multiple angles, not just follow patterns. For
              educators, it means building courses that prepare students for
              jobs that do not exist yet. And for professionals, it means
              continuous learning will be essential as AI tools become standard
              in software teams across industries.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}

export default EducationBody;
