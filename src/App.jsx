import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Skills />
      <Background />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
