import SplitReveal from "./SplitReveal";
import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-eyebrow">
          <span className="dot" />
          Software Engineer — Rawalpindi, Pakistan
        </div>

        <h1 className="hero-name">
          <SplitReveal as="span" text="Ahsan" className="reveal-line" />
          <br />
          <SplitReveal as="span" text="Shabbir." className="reveal-line" delay={0.1} />
        </h1>

        <div className="hero-lower">
          <FadeUp delay={0.3}>
            <p className="hero-desc">
              <strong>Software Engineering</strong> graduate building
              full-stack products with <strong>React.js and Node.js</strong>.
              Currently open to entry-level developer roles.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="hero-photo">
              <img src="/images/profile.png" alt="Ahsan Shabbir" />
            </div>
          </FadeUp>
        </div>

        <div className="hero-scroll">
          <span className="hero-scroll-line" />
          Scroll
        </div>
      </div>
    </header>
  );
}
