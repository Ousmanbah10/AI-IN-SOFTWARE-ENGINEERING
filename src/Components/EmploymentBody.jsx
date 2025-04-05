import React from "react";
import { Link } from "react-router-dom";
import aiImage from "../assets/AIPhoto7.jpeg";
import "/src/Components/employmentbody.css";

function EmploymentBody() {
  return (
    <>
      <div className="main-content">
        <h1 className="page-title">AI'S IMPACT ON TECH EMPLOYMENT</h1>

        <p className="research-question">
          When evaluating whether AI affects jobs in tech, what does the
          research actually show?
        </p>

        <p className="content-paragraph">
          Artificial intelligence is steadily transforming the tech workforce
          but not through mass layoffs, but by redefining how value is created
          across technical roles. As automation becomes more integrated into
          software development and IT operations, new jobs are emerging in areas
          that require strategic thinking, domain knowledge, and systems-level
          expertise, while more repetitive, execution-focused tasks are
          beginning to decline. As highlighted in{" "}
          <a
            href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Impact of AI on Computer Science Education,
          </a>{" "}
          AI adoption is already reshaping industries by reducing demand for
          some traditional roles while increasing it for jobs that require
          advanced technical and analytical skills. For computer science
          students and recent graduates, staying ahead means understanding which
          areas are growing and preparing to contribute where automation can't.
        </p>

        <p className="content-paragraph">
          In early 2025, the IT unemployment rate{" "}
          <a
            href="https://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1b?utm_source"
            target="_blank"
            rel="noopener noreferrer"
          >
            spiked from 3.9% to 5.7% in just one month
          </a>
          , overtaking the national average. According to{" "}
          <a
            href="https://www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1b?utm_source"
            target="_blank"
            rel="noopener noreferrer"
          >
            Janco Associates
          </a>
          , a firm specializing in tech labor analytics, the jobs most affected
          were routine and mundane roles, such as administrative reporting and
          clerical support. Some companies are even scaling back software
          development teams, reallocating tasks to AI systems that can now
          generate, test, and revise code with increasing precision.
        </p>

        <p className="content-paragraph">
          However, this doesn't mean the tech workforce is shrinking. Instead,
          companies are shifting how they grow teams. Many are avoiding new
          hires by assigning AI to tasks that would have previously required
          expanding their staff this is a strategy known as cost avoidance.{" "}
          <a
            href="https://www.wsj.com/articles/how-did-companies-use-generative-ai-in-2023-heres-a-look-at-five-early-adopters-6e09c6b3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cory Stahle
          </a>
          , an economist at Indeed, explains that employer demand for
          "white-collar knowledge worker type jobs" has slowed, especially in
          generic office roles. Meanwhile, demand remains strong for hands-on
          technical positions, especially those involving infrastructure, cloud
          services, and applied data.
        </p>

        <div className="image-text-container">
          <div className="image-frame">
            <img src={aiImage} alt="AI robot hand" className="content-image" />
          </div>

          <div className="side-text">
            <p className="content-paragraph no-indent">
              That demand is visible in companies like Netskope-a global cloud
              security firm, are actively hiring in data engineering, analytics,
              and platform infrastructure. These are not roles that AI can fill
              alone they require human judgment, domain knowledge, and systems
              thinking. As Netskope's hiring strategy highlights: roles
              requiring{" "}
              <a
                href="https://www.netskope.com/company/news/press-release/netskope-hires-record-number-of-engineers-to-support-ai-expansion"
                target="_blank"
                rel="noopener noreferrer"
              >
                contextual understanding and infrastructure knowledge are still
                essential.
              </a>{" "}
              For computer science majors considering their future, this points
              to the rising value of specialization and cross-functional
              thinking.
            </p>
          </div>
        </div>

        <p className="content-paragraph">
          While public anxiety about automation continues, current data suggests
          that fears of full-scale replacement are overstated. As of June 2024,{" "}
          <a
            href="https://sloanreview.mit.edu/article/reality-check-generative-ais-impact-on-work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            only 5% of U.S. businesses
          </a>{" "}
          reported using AI to deliver products or services. Even in
          high-performing AI sectors like visual recognition, only{" "}
          <a
            href="https://sloanreview.mit.edu/article/reality-check-generative-ais-impact-on-work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            23% of related wages
          </a>{" "}
          could be cost-effectively automated. Roles that involve
          interpretation, collaboration, or decision-making still rely on human
          input and likely will for the foreseeable future.
        </p>

        <p className="content-paragraph">
          Wider global research reinforces this. A{" "}
          <a
            href="https://cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cognizant study
          </a>{" "}
          featured in Communications of the ACM estimates that 90% of jobs will
          be influenced by generative AI, but most will be reshaped rather than
          erased. The{" "}
          <a
            href="https://www.imf.org/en/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity"
            target="_blank"
            rel="noopener noreferrer"
          >
            International Monetary Fund
          </a>{" "}
          reports that 60% of jobs in advanced economies are already being
          affected by AI in some form. For educators and professionals, this
          means rethinking how technical training prepares students, not just to
          compete with AI, but to thrive by using it.
        </p>
      </div>
    </>
  );
}

export default EmploymentBody;
