import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Learning from "./sections/Learning/Learning";
import Projects from "./sections/Projects/Projects";


function Homepage() {
  return (
    <>
      <main className="overflow-x-clip">
        <Hero />

        <Projects />
        <Learning />

        <About />

        <Contact />
      </main>
      <Footer />
    </>

  )
}


export default Homepage;