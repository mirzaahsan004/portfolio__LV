import SplitReveal from "./SplitReveal";
import FadeUp from "./FadeUp";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="section-index">05 / Contact</span>
        </div>

        <h2 className="contact-title">
          <SplitReveal text="Let's build" />
          <br />
          <SplitReveal text="something." delay={0.1} className="outline-line" />
        </h2>

        <FadeUp delay={0.2}>
          <p className="contact-sub">
            I'm actively interviewing for entry-level software development
            roles in Islamabad/Rawalpindi. Reach out — I reply quickly.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="contact-links">
            <Magnetic>
              <a href="mailto:mirzahanan556@gmail.com" className="btn btn-primary" data-cursor="hover">
                Email me →
              </a>
            </Magnetic>
            <Magnetic>
              <a href="/Ahsan_Shabbir_Resume.pdf" className="btn btn-ghost" download data-cursor="hover">
                Download resume
              </a>
            </Magnetic>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="contact-grid">
            <a className="contact-cell" href="mailto:mirzahanan556@gmail.com" data-cursor="hover">
              <div className="contact-cell-label">Email</div>
              <div className="contact-cell-value">mirzahanan556@gmail.com</div>
            </a>
            <a className="contact-cell" href="tel:+923345015731" data-cursor="hover">
              <div className="contact-cell-label">Phone</div>
              <div className="contact-cell-value">0334 5015731</div>
            </a>
            <a
              className="contact-cell"
              href="https://github.com/mirzaahsan004"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
            >
              <div className="contact-cell-label">GitHub</div>
              <div className="contact-cell-value">github.com/mirzaahsan004</div>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
