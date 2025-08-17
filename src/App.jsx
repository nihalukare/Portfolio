import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
