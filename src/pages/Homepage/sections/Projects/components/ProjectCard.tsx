import projectsArrow from "../../../../../assets/icons/projectsArrow.png";
import { Link } from "react-router-dom";
import {  motion } from "motion/react";
import useCursor from "../../../../../hooks/useCursor";

type ProjectCardProps = {
  name: string
  description: string
  category: string
  image: string
  updateActiveImage: (image: string) => void
  link: '/gym-tracker' | '/finance-tracker' | '/hospudka-pod-bousovem'
}

function ProjectCard({ name, description, category, image, updateActiveImage, link }: ProjectCardProps) {

  const { setHoveredProject } = useCursor();


  return (
    <>
      <motion.li
        className={`border border-l-0 border-r-0  py-10 group  border-white/40 ${name === 'Gym Tracker' ? null : 'border-t-0'}
        [--entry-x:0]

        md:[--entry-x:30%]
        `}
        initial={{ x: 'var(--entry-x)', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        onMouseEnter={() => {
          setHoveredProject(name)
          updateActiveImage(image)
        }} onMouseLeave={() => setHoveredProject(null)}

      >
        <Link
          to={link}
          className="overflow-hidden flex flex-row flex-wrap justify-between md:mix-blend-difference  lg:pl-40  group-hover:opacity-50 duration-400  lg:flex-row  lg:items-center"
        >

          <div className="flex flex-col  gap-4 lg:justify-between  md:max-w-[300px]">

            <motion.div
              className="overflow-hidden
                [--entry-y:100%]
                md:[--entry-y:0%]
              "
              initial={{ y: 'var(--entry-y)', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-[clamp(30px,8vw,45px)] leading-none font-[Judson] ">{name}</p>
            </motion.div>

            <motion.div
              className="overflow-hidden
                [--entry-y:100%]
                md:[--entry-y:0%]
              "
              initial={{ y: 'var(--entry-y)', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className=" text-[#FFFBF4]/70 lg:hidden text-sm lg:text-base">{category}</p>
            </motion.div>

            <motion.div
              className="overflow-hidden
                [--entry-y:100%]
                md:[--entry-y:0%]
              "
              initial={{ y: 'var(--entry-y)', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-sm lg:text-base mb-3  lg:w-[350px] text-[#FFFBF4]/70 font-[Inter]">{description}</p>
            </motion.div>

          </div>

          <div className=" hidden lg:flex flex items-center gap-30">
            <p className="hidden text-[#FFFBF4]/70 lg:block">{category}</p>
            <img className="w-[clamp(25px,4vw,40px)] h-[clamp(25px,4vw,40px)]  opacity-0 -translate-x-10  scale-75 group-hover:opacity-100 group-hover:translate-0 group-hover:scale-100 duration-400 mix-blend-difference rotate-45" src={projectsArrow} alt="" />
          </div>



          <div className="lg:hidden md:max-w-[400px]  mt-5 md:mt-0">
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.9, ease: 'easeOut' }} src={image} alt="" className="object-cover" />
          </div>
        </Link>



      </motion.li >


    </>
  )

}


export default ProjectCard;