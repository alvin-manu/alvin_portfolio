import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ShowCase from "./components/ShowCase";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
