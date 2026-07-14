import FadeUp from "./FadeUp";

export const PROJECTS = [
  {
    title: "AI Resume Analyzer",
    desc: "An AI-powered platform that evaluates a user's resume and recommends relevant job opportunities based on their skills, qualifications, and experience.",
    tags: ["React.js", "Node.js", "REST API", "AI/ML"],
    github: "https://github.com/mirzaahsan004",
    image: "/images/project-1.png",
  },
  {
    title: "Attendance Management System",
    desc: "A system for recording, tracking, and managing employee or student attendance, built to replace manual sign-in sheets with something searchable and reliable.",
    tags: ["React.js", "Node.js", "MySQL"],
    github: "https://github.com/mirzaahsan004",
    image: "/images/project-2.png",
  },
  {
    title: "Cricket E-Commerce Store",
    desc: "A full e-commerce web app for selling cricket gear online — product browsing, shopping cart management, product detail pages, and order processing, end to end.",
    tags: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/mirzaahsan004",
    image: null, // add a screenshot when you have one — see note below
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">03 / Work</span>
        </div>
        <h2 className="section-title" style={{ marginBottom: "60px" }}>
          Selected projects.
        </h2>

        <div className="project-list">
          {PROJECTS.map((p, i) => (
            <FadeUp key={p.title}>
              <a
                className="project-item"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                data-cursor-text="View"
              >
                <div>
                  <div className="project-info-top">
                    <span className="project-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="project-link">View project →</span>
                </div>

                <div className="project-visual">
                  {p.image ? (
                    <img src={p.image} alt={p.title} />
                  ) : (
                    <div className="project-visual-placeholder">
                      Screenshot coming soon
                    </div>
                  )}
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
