import FadeUp from "./FadeUp";

const GROUPS = [
  { label: "Languages", items: ["Urdu", "English"] },
  { label: "Frameworks", items: ["React.js", "Node.js"] },
  { label: "Core", items: ["REST APIs", "OOP", "SDLC", "Software Testing"] },
  { label: "Databases", items: ["MySQL", "MongoDB"] },
  { label: "Tools", items: ["Git", "GitHub"] },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">04 / Skills</span>
        </div>
        <h2 className="section-title" style={{ marginBottom: "60px" }}>
          What I work with.
        </h2>

        <FadeUp>
          <div className="skills-wrap">
            {GROUPS.map((g) => (
              <div className="skills-row" key={g.label}>
                <span className="skills-label">{g.label}</span>
                <div className="skills-items">
                  {g.items.map((item) => (
                    <span className="sk" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
