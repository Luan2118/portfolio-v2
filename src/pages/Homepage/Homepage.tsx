import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero";
import Learning from "./sections/Learning/Learning";
import Projects from "./sections/Projects/Projects";


function Homepage() {
  return (
    <div className="overflow-x-clip">
      <Hero />

      <Learning />
      
      <Projects />


      <Contact />
    </div>
  )
}


export default Homepage;