import projectsArrow from "../../../../../assets/icons/projectsArrow.png"


type ProjectCardProps = {
  name: string
  description: string
}

function ProjectCard({name, description}: ProjectCardProps) {
  return (
      <div className="flex flex-col gap-4 mt-10 px-4 py-6 w-3xl">
        <div className="flex justify-between">
          <p className="text-5xl font-[Judson] ">{name}</p>
          <img src={projectsArrow} alt="" />
        </div>


        <p className="text-base w-xl font-[Inter]">{description}</p>
        <hr />

      </div>
  )

}


export default ProjectCard;