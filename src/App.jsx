import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useActiveSection } from "./hooks/use-active-section";

const sectionIds = ["hero", "skills", "experience", "projects", "contact"];

function App() {
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <Navbar activeId={activeId} />
      <main className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Hero />
        <Skills />
        <Background />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
