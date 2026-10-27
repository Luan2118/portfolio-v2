import projectsArrow from "../../../../../assets/icons/projectsArrow.png";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import useCursor from "../../../../../hooks/useCursor";

type ProjectCardProps = {
  name: string
  category: string
  image: string
  updateActiveImage: (image: string) => void
  link: '/gym-tracker' | '/finance-tracker' | '/hospudka-pod-bousovem'
}

function ProjectCard({ name, category, image, updateActiveImage, link }: ProjectCardProps) {

  const { setHoveredProject } = useCursor();


  return (
    <>
      <motion.li
        data-project-card
        data-project-name={name}
        data-project-image={image}
        className={`border border-l-0 border-r-0 pt-10 pb-10 lg:pt-20 lg:pb-20 group border-white/40 ${name === 'Gym Tracker' ? null : 'border-t-0'}
        [--entry-x:0]

        md:[--entry-x:30%]
        `}
        initial={{ x: 'var(--entry-x)', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        onHoverStart={() => {
          setHoveredProject(name)
          updateActiveImage(image)
        }}
        onHoverEnd={() => setHoveredProject(null)}
        
        onClick={() => setHoveredProject(null)}

      >
        <Link
          to={link}
          className="overflow-hidden grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:items-start md:px-10 md:mix-blend-difference lg:flex lg:justify-between group-hover:opacity-50 duration-400 lg:items-center"
        >

          <div className="flex min-w-0 flex-col gap-4 md:col-start-1 md:row-start-1 lg:justify-between lg:max-w-[400px]">

            <motion.div
              className="overflow-hidden
                [--entry-y:100%]
                md:[--entry-y:0%]
              "
              initial={{ y: 'var(--entry-y)', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{once: true}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-[clamp(40px,10vw,55px)] md:text-[40px] lg:text-[55px] leading-none font-[Judson] ">{name}</h3>
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
          </div>

          <div className=" hidden lg:flex flex items-center gap-30">
            <p className="hidden text-[#FFFBF4]/70 lg:block">{category}</p>
            <img className="w-[clamp(25px,4vw,40px)] h-[clamp(25px,4vw,40px)]  opacity-0 -translate-x-10  scale-75 group-hover:opacity-100 group-hover:translate-0 group-hover:scale-100 duration-400 mix-blend-difference rotate-45" src={projectsArrow} alt="" />
          </div>



          <div className="mt-10 min-w-0 lg:hidden md:col-start-2 md:row-start-1 md:row-span-2 md:mt-0">
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.9, ease: 'easeOut' }} src={image} alt="" className="w-full object-cover" />
          </div>
          <span className="mt-10 inline-flex items-center gap-3 justify-self-start rounded-sm border border-white/40 py-2 px-2 xs:px-5 md:px-6 text-xs xs:text-sm 2xl:text-base lg:hidden md:col-start-1 md:row-start-2 md:mt-0 md:self-end">
            View project
            <img
              src={projectsArrow}
              alt=""
              aria-hidden="true"
              className="size-4 rotate-45"
            />
          </span>
        </Link>



      </motion.li >


    </>
  )

}


export default ProjectCard;
