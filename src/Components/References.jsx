import { Link } from "react-router-dom";
import "/src/Components/references.css";

import React from "react";

function References() {
  const references = [
    {
      id: 1,
      author: "Esther Shein",
      title: "The Impact of AI on Computer Science Education",
      publication: "Communications of the ACM",
      publisher: "",
      date: "5 Aug. 2024",
      url: "cacm.acm.org/news/the-impact-of-ai-on-computer-science-education/?utm_source",
      accessed: "5 Apr. 2025",
    },
    {
      id: 2,
      author: "Kwan Wei Kevin Tan",
      title: "AI won't kill your computer science degree, professors say",
      publication: "Business Insider",
      publisher: "",
      date: "2024",
      url: "www.businessinsider.com/relax-college-kids-ai-will-not-kill-computer-science-degree-2024-8",
      accessed: "5 Apr. 2025",
    },
    {
      id: 3,
      author: "EditorDavid",
      title: "MIT CS Professor Tests AI's Impact on Educating Programmers",
      publication: "Slashdot",
      publisher: "",
      date: "7 Sept. 2024",
      url: "news.slashdot.org/story/24/09/07/2148218/mit-cs-professor-tests-ais-impact-on-educating-programmers?utm_source",
      accessed: "5 Apr. 2025",
    },
    {
      id: 4,
      author: "Caleb King",
      title: "A.I.'s Impact In Its First Year In Software Engineering",
      publication: "Forbes",
      publisher: "",
      date: "7 Dec. 2023",
      url: "www.forbes.com/sites/forbes-engineering/2023/12/07/ais-impact-in-its-first-year-in-software-engineering/?utm_source",
      accessed: "5 Apr. 2025",
    },
    {
      id: 5,
      author: "World Economic Forum",
      title: "The Future of Jobs Report 2025",
      publication: "World Economic Forum",
      publisher: "",
      date: "7 Jan. 2025",
      url: "www.weforum.org/publications/the-future-of-jobs-report-2025/digest/?utm_source",
      accessed: "5 Apr. 2025",
    },
    {
      id: 6,
      author: "Belle Lin",
      title: "IT Unemployment Rises to 5.7% as AI Hits Tech Jobs",
      publication: "The Wall Street Journal",
      publisher: "",
      date: "7 Feb. 2025",
      url: "www.wsj.com/articles/it-unemployment-rises-to-5-7-as-ai-hits-tech-jobs-7726bb1b?utm_source",
      accessed: "5 Apr. 2025",
    },
    {
      id: 7,
      author: "Belle Lin",
      title:
        "How Did Companies Use Generative AI in 2023? Here's a Look at Five Early Adopters",
      publication: "The Wall Street Journal",
      publisher: "",
      date: "29 Dec. 2023",
      url: "www.wsj.com/articles/how-did-companies-use-generative-ai-in-2023-heres-a-look-at-five-early-adopters-6e09c6b3",
      accessed: "5 Apr. 2025",
    },
    {
      id: 8,
      author: "Kaushik Viswanath",
      title: "Reality Check: Generative AI's Impact on Work",
      publication: "MIT Sloan Management Review",
      publisher: "",
      date: "9 Sept. 2024",
      url: "sloanreview.mit.edu/article/reality-check-generative-ais-impact-on-work/",
      accessed: "5 Apr. 2025",
    },
    {
      id: 9,
      author: "OpenAI",
      title: "ChatGPT",
      publication: "OpenAI",
      publisher: "",
      date: "30 Nov. 2022",
      url: "openai.com/index/chatgpt/",
      accessed: "5 Apr. 2025",
    },
    {
      id: 10,
      author: "McKinsey & Company",
      title: "What is Generative AI?",
      publication: "McKinsey & Company",
      publisher: "",
      date: "2 Apr. 2024",
      url: "www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai",
      accessed: "5 Apr. 2025",
    },
    {
      id: 11,
      author: "Atif Mashkoor",
      title: "Artificial Intelligence and Software Engineering: Are We Ready?",
      publication: "IEEE Explore",
      publisher: "",
      date: "11 Mar. 2022",
      url: "ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9734243",
      accessed: "5 Apr. 2025",
    },
    {
      id: 12,
      author: "Anita Carleton",
      title: "Generative AI: Redefining the Future of Software Engineering",
      publication: "IEEE Computer Society",
      publisher: "",
      date: "Nov.–Dec. 2024",
      url: "www.computer.org/csdl/magazine/so/2024/06/10705649/20LUIFN90m4",
      accessed: "5 Apr. 2025",
    },
    {
      id: 13,
      author: "Danilo Poccia",
      title: "AI-assisted software development lifecycle",
      publication: "dev.to",
      publisher: "",
      date: "25 Sept. 2024",
      url: "dev.to/aws/ai-assisted-software-development-lifecycle-289k?utm_source",
      accessed: "5 Apr. 2025",
    },
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="page-title">REFRENCES</h1>

        <div className="content-section">
          <div className="reference-container">
            {references.map((reference) => (
              <div key={reference.id} className="reference-item">
                <p className="reference-text">
                  {reference.author && (
                    <span className="reference-author">
                      {reference.author}.{" "}
                    </span>
                  )}
                  {reference.title && (
                    <span className="reference-title">
                      "{reference.title}."{" "}
                    </span>
                  )}
                  {reference.publication && (
                    <span className="reference-publication">
                      <em>{reference.publication}</em>,{" "}
                    </span>
                  )}
                  {reference.publisher && (
                    <span className="reference-publisher">
                      {reference.publisher},{" "}
                    </span>
                  )}
                  {reference.date && (
                    <span className="reference-date">{reference.date}, </span>
                  )}
                  {reference.url && (
                    <span className="reference-url">{reference.url}. </span>
                  )}
                  {reference.accessed && (
                    <span className="reference-accessed">
                      Accessed {reference.accessed}.
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;
