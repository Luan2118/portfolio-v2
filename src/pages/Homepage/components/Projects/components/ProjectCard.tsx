import projectsArrow from "../../../../../assets/icons/projectsArrow.png"


type ProjectCardProps = {
  name: string
  description: string
}

function ProjectCard({ name, description }: ProjectCardProps) {
  return (
    <div className="flex flex-col  md:mt-10 px-4 py-6 ">
      <div className="flex justify-between">
        <p className="text-[clamp(20px,4vw,45px)] leading-none font-[Judson] ">{name}</p>
        <img className="w-[clamp(25px,4vw,45px)] h-[clamp(25px,4vw,48px)]" src={projectsArrow} alt="" />
      </div>

      <div className="mt-6">
        <p className="text-xs  lg:text-sm mb-3 w-[85%]">{description}</p>
        <hr />
      </div>

    </div>
  )

}


export default ProjectCard;