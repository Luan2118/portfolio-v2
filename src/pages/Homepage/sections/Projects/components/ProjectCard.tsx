import projectsArrow from "../../../../../assets/icons/projectsArrow.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useRef } from "react";
import useCursor from "../../../../../hooks/useCursor";

type ProjectCardProps = {
  name: string
  description: string
  category: string
  image: string
}

function ProjectCard({ name, description, category, image }: ProjectCardProps) {

  const link =
    name === 'Gym Tracker' ? '/gym-tracker' :
      name === 'Finance Tracker' ? '/finance-tracker' :
        name === 'Hospůdka pod Boušovem' ? '/hospudka-pod-bousovem' : '/'

  const projectCardRef = useRef(null);

  const { setIsHover } = useCursor();



  return (
    <motion.li
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
      className={`border border-l-0 border-r-0  py-10 group ${name === 'Gym Tracker' ? null : 'border-t-0'}`}>

      <Link
        to={link}
        ref={projectCardRef}
        className="overflow-hidden flex flex-row flex-wrap justify-between  lg:pl-40  group-hover:opacity-50 duration-400 mix-blend-difference lg:flex-row  lg:items-center"
      >

        <div className="flex flex-col  gap-4 lg:justify-between  md:max-w-[300px]">
          <p className="text-[clamp(30px,8vw,45px)] leading-none font-[Judson] ">{name}</p>
          <p className=" text-[#FFFBF4]/70 lg:hidden text-sm lg:text-base">{category}</p>
          <p className="text-sm lg:text-base mb-3  lg:w-[350px] text-[#FFFBF4]/70 font-[Inter]">{description}</p>
        </div>

        <div className=" hidden lg:flex flex items-center gap-30">
          <p className="hidden text-[#FFFBF4]/70 lg:block">{category}</p>
          <img className="w-[clamp(25px,4vw,40px)] h-[clamp(25px,4vw,40px)]  opacity-0 -translate-x-10  scale-75 group-hover:opacity-100 group-hover:translate-0 group-hover:scale-100 duration-400 mix-blend-difference rotate-45" src={projectsArrow} alt="" />
        </div>


        <div className="lg:hidden md:max-w-[400px]  mt-5 md:mt-0">
          <img src={image} alt="" className="object-cover" />
        </div>
      </Link>
    </motion.li>
  )

}


export default ProjectCard;