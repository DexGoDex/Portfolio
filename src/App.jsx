import "./App.css";

import Navbar from "./components/Navbar-temp";
import Hero from "./components/Hero-temp";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Design from "./components/Design";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Design/>
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Amir Syawaludin. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

