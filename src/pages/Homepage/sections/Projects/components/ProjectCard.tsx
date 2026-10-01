import projectsArrow from "../../../../../assets/icons/projectsArrow.png";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  name: string
  description: string
}

function ProjectCard({ name, description }: ProjectCardProps) {

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  const link =
    name === 'Gym Tracker' ? '/gym-tracker' :
      name === 'Finance Tracker' ? '/finance-tracker' :
        name === 'Hospůdka pod Boušovem' ? '/hospudka-pod-bousovem' : '/'

  return (
    <Link to={link} className="flex flex-col group xl:mt-10 px-4 py-6 text-start" onClick={scrollToTop}>
      <div className="flex justify-between">
        <p className="text-[clamp(20px,4vw,40px)] leading-none font-[Judson] ">{name}</p>
        <img className="w-[clamp(25px,4vw,40px)] h-[clamp(25px,4vw,40px)] ml-10 opacity-0 -translate-x-6 translate-y-6 scale-75 group-hover:opacity-100 group-hover:translate-0 group-hover:scale-100 duration-400" src={projectsArrow} alt="" />
      </div>

      <div className="mt-6 ">
        <p className="text-xs  lg:text-sm mb-3 w-[85%]">{description}</p>
        <div className="relative">
          <hr className=" opacity-25 " />
          <hr className="absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600" />
        </div>
      </div>

    </Link>
  )

}


export default ProjectCard;