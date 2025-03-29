import React from "react";
import "./Body.css";
import aiImage from "../assets/AIPhoto1.png";

function Body() {
  return (
    // Hey Ousman Bah
    <div className="container">
      <section className="section" id="section-buttom">
        <h2 className="title">
          Will Artificial Intelligence Replace Software Engineers in the
          Technology Industry?
        </h2>

        <div className="content-paragraph">
          <p className="body-text">
            In the last few years, the introduction of Artificial Intelligence
            (AI) has not only emerged as a tool, but as a revolutionary force in
            the world of technology. From assisting in automating repetitive
            coding tasks to being utilized in creating large-scale systems, AI
            is increasingly getting integrated into software engineering. Some
            welcome this new trend as an age of greater efficiency and
            innovation, while others worry it's the start of the end for the
            conventional software engineer. Yet as the technology improves and
            becomes ever more pervasive, we're confronted with a difficult and
            urgent question: Will AI to take the place of software engineers in
            the tech sector?
          </p>
          <p className="body-text">
            The response is not as straightforward as a yes or no. It takes a
            close, analytical examination of AI's role in coding, its promise in
            the real world, the future and present needs of the job market for
            software, and the uniquely human abilities that machines have yet to
            replicate. As a prospective computer science major who hopes to join
            this rapidly changing field, this research is aimed at helping
            current and future computer science students, recent graduates, and
            educators understand how AI is reshaping software engineering. By
            exploring both the potential and the limits of AI in software
            engineering, this site attempts to discern how software engineers of
            the future will succeed in a field where humans and computers are
            collaborating with one another and why the job of the software
            engineer is anything but obsolete.
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
