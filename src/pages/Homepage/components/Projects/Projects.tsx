import ProjectCard from "./components/ProjectCard";


function Projects() {
  return (
    <div className="bg-[#171512] text-[#FFFBF4] h-dvh flex flex-row py-30 px-70">

      <p className="text-3xl font-[Judson] ">Projects</p>


      <div className="flex flex-col mx-auto px-4 py-6 " >
        <ProjectCard name="Gym Tracker"  description="A React and TypeScript workout tracker for training splits, active workout logging, body weight tracking, and progress review."/>

        <ProjectCard name="Finance Tracker"  description="A full-stack finance tracker for income, expenses, protected user data, transaction filtering, charts, and currency conversion."/>

        <ProjectCard name="Hospůdka pod Boušovem"  description="Website for a local pub"/>

      </div>
    </div>
  )
}


export default Projects;