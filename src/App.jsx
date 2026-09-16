import "./App.css";

import Navbar from "./components/Navbar-temp";
import Hero from "./components/Hero-temp";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Amir Syawaludin. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

