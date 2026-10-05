import projectsArrow from "../../../../../assets/icons/projectsArrow.png";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import useCursor from "../../../../../hooks/useCursor";

type ProjectCardProps = {
  name: string
  description: string
}

function ProjectCard({ name, description }: ProjectCardProps) {

  const link =
    name === 'Gym Tracker' ? '/gym-tracker' :
      name === 'Finance Tracker' ? '/finance-tracker' :
        name === 'Hospůdka pod Boušovem' ? '/hospudka-pod-bousovem' : '/'

  const projectCardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectCardRef,
    offset: ["start 90%", "start 73%"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["30%", "0%"]
  )

  const underlineX = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  )

  const { setIsHover } = useCursor();

  return (
    <Link to={link} ref={projectCardRef}>
      <div className="overflow-hidden">
        <motion.div
          style={{ x, opacity }}
          className="flex flex-col group   text-start py-2"
          onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}

        >
          <div className="flex justify-between">
            <p className="text-[clamp(18px,4vw,40px)] leading-none font-[Judson] ">{name}</p>
            <img className="w-[clamp(25px,4vw,40px)] h-[clamp(25px,4vw,40px)] ml-10 opacity-0 -translate-x-6 translate-y-6 scale-75 group-hover:opacity-100 group-hover:translate-0 group-hover:scale-100 duration-400 mix-blend-difference" src={projectsArrow} alt="" />
          </div>

          <div className="mt-3 md:mt-6 ">
            <p className="text-xs  lg:text-sm mb-3 w-[85%]">{description}</p>
            <div className="relative">
              <motion.hr
                style={{ x: underlineX, }}
                className=" opacity-25 ">
              </motion.hr>
              <hr className="absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 border-0 h-px mix-blend-difference bg-white" />
            </div>
          </div>
        </motion.div>
      </div>

    </Link>
  )

}


export default ProjectCard;