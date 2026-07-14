import Magnetic from "./Magnetic";

export default function Nav() {
  return (
    <nav className="nav">
      <Magnetic strength={0.25}>
        <a href="#top" className="nav-mark" data-cursor="hover">
          Ahsan Shabbir
        </a>
      </Magnetic>
      <ul className="nav-links nav-links-mobile-hide">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
