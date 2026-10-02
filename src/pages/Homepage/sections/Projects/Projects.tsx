import ProjectCard from "./components/ProjectCard";


function Projects() {
  return (
    <div id="projects" className="bg-[#171512] text-[#FFFBF4] min-h-dvh flex flex-col py-15 px-5 xs:px-15 sm:px-20  md:flex-row lg:px-50 lg:py-25 xl:px-80">

      <p className="text-[clamp(20px,7vw,50px)] leading-non font-[Judson] ">Projects</p>


      <div className="flex flex-col mx-auto px-4 py-6 mt-5 sm:mt-10 md:mt-15" >
        <ProjectCard name="Gym Tracker"  description="A React and TypeScript workout tracker for training splits, active workout logging, body weight tracking, and progress review."/>

        <ProjectCard name="Finance Tracker"  description="A full-stack finance tracker for income, expenses, protected user data, transaction filtering, charts, and currency conversion."/>

        <ProjectCard name="Hospůdka pod Boušovem"  description="Website for a local pub"/>

      </div>
    </div>
  )
}


export default Projects;