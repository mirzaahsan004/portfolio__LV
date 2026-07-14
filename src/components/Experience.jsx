import FadeUp from "./FadeUp";

const EXPERIENCE = [
  {
    date: "Sep 2023 — Nov 2023",
    role: "Software Engineering Intern",
    company: "Inotech Solutions",
    desc: "Contributed to the InnoTech Internship Management System, building both front-end and back-end functionality for tracking intern and employee records, attendance, and related data used by the team day-to-day.",
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">02 / Experience</span>
        </div>
        <h2 className="section-title" style={{ marginBottom: "60px" }}>
          Where I've worked.
        </h2>

        <div className="exp-list">
          {EXPERIENCE.map((job) => (
            <FadeUp key={job.company}>
              <div className="exp-item">
                <div className="exp-date">{job.date}</div>
                <div>
                  <div className="exp-role">{job.role}</div>
                  <div className="exp-company">{job.company}</div>
                  <div className="exp-desc">{job.desc}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
