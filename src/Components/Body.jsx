function Body() {
  return (
    <>
      <div className="home-container">
        <section className="section services" id="services">
          <div className="section-title">
            <h2>
              What is AI and Why
              <span> Does It Matter?</span>
            </h2>
          </div>
          <article className="about-info">
            <p>
              Artificial Intelligence (AI) refers to the development of computer
              systems capable of performing tasks that traditionally require
              human intelligence, such as problem-solving, pattern recognition,
              and decision-making. In recent years, AI has advanced rapidly,
              becoming an essential tool in industries like healthcare, finance,
              and, most notably, software engineering. With AI-powered tools
              becoming more integrated into coding and development processes,
              there is an ongoing debate about whether AI will enhance or
              replace human engineers.
            </p>
            <p>
              Understanding its role in software engineering will help
              professionals navigate the evolving landscape and ensure they
              remain valuable in an increasingly AI-driven world.
            </p>
          </article>
        </section>

        <section className="section" id="about">
          <div className="section-title">
            <h2>
              More About <span>Artificial Intelligence</span>
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
                Why Am I Conducting <span>This Research?</span>
              </h3>
              <p>
                As a computer science student, understanding AI’s impact on the
                future of software engineering is critical for planning my
                career. AI is changing the way software is developed,
                introducing both opportunities and challenges. While some fear
                AI might replace software engineers, others argue it will
                enhance their productivity and create new roles. My goal is to
                analyze these perspectives, evaluate the changes in industry
                demand, and identify the essential skills that will keep
                software engineers competitive in an AI-driven job market.
              </p>
            </article>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-title">
            <h2>
              The Bigger Picture: AI’s Influence
              <span> on Education and Industry</span>
            </h2>
          </div>
          <article className="about-info">
            <h3>Preparing for the AI Revolution</h3>
            <p>
              This research is also important on a broader scale, as
              universities and companies must prepare for the AI revolution. By
              staying up to date, I aim to contribute to discussions about how
              computer science students and working professionals can adapt to
              this new era. AI can be leveraged for innovation rather than seen
              as a threat—it is shaping the future of technology and the
              workforce.
            </p>
            <p>
              Understanding its role in software engineering will help
              professionals navigate the evolving landscape and ensure they
              remain valuable in an increasingly AI-driven world.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}

export default Body;
