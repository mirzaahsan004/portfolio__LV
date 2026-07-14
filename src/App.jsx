import { useState } from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Loader />
      <Cursor />
      <div className="noise" aria-hidden="true" />
      <Nav />
      <Hero />
      <Marquee text="Open to opportunities" accent="React.js / Node.js" />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
