import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects/Projects";


function Homepage() {
  return (
    <div className="overflow-x-clip">
      <Hero />

      <Projects />

      <Contact />
    </div>
  )
}


export default Homepage;