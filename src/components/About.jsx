import SplitReveal from "./SplitReveal";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">01 / About</span>
        </div>
        <h2 className="section-title" style={{ marginBottom: "70px" }}>
          <SplitReveal text="From coursework to code" />
          <br />
          <SplitReveal text="that runs in production." delay={0.1} />
        </h2>

        <div className="about-grid">
          <FadeUp>
            <div className="about-text">
              <p>
                I'm a final-year <strong>Software Engineering</strong>{" "}
                student who spends more time in VS Code than in lecture
                halls. My final year project, an{" "}
                <strong>AI-powered resume analyzer</strong>, pushed me to
                connect a real recommendation system to a usable front end —
                not just get it working, but make it make sense to a user.
              </p>
              <p>
                I interned at <strong>Inotech Solutions</strong>, working
                across the stack on an internal system used to manage real
                employee records — my first taste of writing code other
                people actually depend on.
              </p>
              <p>
                I'm currently looking for an{" "}
                <strong>entry-level software development role</strong> in
                Islamabad/Rawalpindi where I can keep building full-stack
                products and learn from engineers ahead of me.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <ul className="edu-list">
              <li className="edu-item">
                <div className="edu-school">PMAS Arid Agriculture University</div>
                <div className="edu-degree">Bachelor of Software Engineering</div>
                <div className="edu-year">2022 — 2026</div>
              </li>
              <li className="edu-item">
                <div className="edu-school">FG Sir Syed College</div>
                <div className="edu-degree">Higher Secondary Education</div>
                <div className="edu-year">2020 — 2022</div>
              </li>
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
