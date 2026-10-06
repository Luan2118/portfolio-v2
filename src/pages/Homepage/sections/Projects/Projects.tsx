import ProjectCard from "./components/ProjectCard";
import { motion } from "motion/react";
import gymDashboard from "../../../../assets/images/gym-tracker/dashboard.png";
import financeDashBoard from "../../../../assets/images/finance-tracker/dashboard.png";
import hospoda from "../../../../assets/images/hospoda-pod-bousovem/front-view.png";


function Projects() {

  return (
    <div id="projects" className="bg-[#171512] text-[#FFFBF4] min-h-svh flex flex-col py-15 px-5 xl:px-15 2xl:px-60  gap-10">

      <div

        className="flex flex-col gap-2 font-[Judson]">

        <motion.p
          initial={{ y: 30, opacity: 0 }
          }
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#FFFBF4]/70">
          Selected Work
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }
          }
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(20px,8vw,35px)]">
          What I’ve Been Working On
        </motion.p>

      </div>


      <div className="flex flex-col " >
        <ul>
          <ProjectCard name="Gym Tracker" description="A React and TypeScript workout tracker for training splits, active workout logging, body weight tracking, and progress review." category="Full-Stack Development" image={gymDashboard}/>

          <ProjectCard name="Finance Tracker" description="A full-stack finance tracker for income, expenses, protected user data, transaction filtering, charts, and currency conversion." category="Full-Stack Development" image={financeDashBoard}/>

          <ProjectCard name="Hospůdka pod Boušovem" description="Local business website for a village pub, focused on presenting the venue, menu and essential visitor information." category="Web Design & Development" image={hospoda}/>
        </ul>

      </div>
    </div>
  )
}


export default Projects;