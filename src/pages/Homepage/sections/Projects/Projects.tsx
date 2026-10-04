import ProjectCard from "./components/ProjectCard";


function Projects() {
  return (
    <div id="projects" className="bg-[#171512] text-[#FFFBF4] min-h-svh flex flex-col p-5 xl:px-15 2xl:px-60 2xl:py-10">

      <div className="flex flex-1 mt-3">
        <p className="text-[clamp(24px,6vw,60px)] leading-none font-[Judson] self-center">Projects</p>
      </div>


      <div className="flex flex-col mx-auto mt-8 flex-[2] xl:gap-10" >
        <ProjectCard name="Gym Tracker" description="A React and TypeScript workout tracker for training splits, active workout logging, body weight tracking, and progress review." />

        <ProjectCard name="Finance Tracker" description="A full-stack finance tracker for income, expenses, protected user data, transaction filtering, charts, and currency conversion." />

        <ProjectCard name="Hospůdka pod Boušovem" description="Website for a local pub" />

      </div>
    </div>
  )
}


export default Projects;