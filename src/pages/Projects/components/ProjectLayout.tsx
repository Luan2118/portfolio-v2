import { Link } from "react-router-dom";
import blackArrow from "../../../assets/icons/blackArrow.png"
import whiteArrow from "../../../assets/icons/whiteArrow.png"
import ProjectLink from "./ProjectLink";
import { motion, type Variants } from "motion/react";
import { useRef, useState } from "react";


type ProjectLayoutProps = {
  title: string
  overview: string
  type?: string
  features?: string
  stack?: string
  lesson?: string
  images: string[]
  theme: 'light' | 'dark'
  isInProgress?: boolean
  livePath?: string
  gitHubPath?: string
}

const container = {
  hidden: { opacity: 0, },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },

}

const item: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const buttonVariant: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}


function ProjectLayout({ title, overview, type, features, stack, lesson, images, theme, isInProgress, livePath, gitHubPath }: ProjectLayoutProps) {

  const linkPath =
    title === 'Gym Tracker' ? '/finance-tracker' :
      title === 'Finance Tracker' ? '/hospudka-pod-bousovem' : '/'

  const linkStyle = theme === "dark"
    ? "border-white text-white"
    : "border-[#292725] text-[#292725]"

  const isDark = theme === 'dark';

  return (
    <motion.div
      variants={container} initial="hidden" animate="visible"
      className={`min-h-dvh grid grid-cols-1 xl:grid-cols-2 pb-5 px-5 xl:pb-0 xl:px-0 xl:h-dvh  ${isDark ? 'bg-[#171512] text-[#FFFBF4]' : 'bg-[#FFFBF4] text-[#171512]'}`}>

      <div className={`contents xl:flex xl:flex-col ${isDark ? 'bg-[#171512]' : 'bg-[#FFFBF4]'}`}>

        <Link to='/' className="mb-15 w-10 xl:w-12 mt-4 xl:ml-4">
          <motion.img
            variants={buttonVariant}
            src={isDark ? whiteArrow : blackArrow}
            alt="" />
        </Link>


        <div className="order-1 flex flex-col gap-4 md:gap-10 xl:px-20 2xl:px-35 ">

          <div className="overflow-hidden">
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-[Judson] text-center">
              {title}
            </motion.h1>
          </div>

          {isInProgress ? <p className="font-[Inter] text-3xl text-[#A84A3A] mx-auto tracking-[0.3rem] mt-15 mb-15 text-center">WEBSITE REDESIGN - IN PROGRESS</p>
            : null}

          <div className="mt-5">

            <div className="overflow-hidden">
              <motion.p
                variants={item}
                className="text-xl lg:text-xl font-[Judson] py-4">
                Project Overview
              </motion.p>
            </div>

            <div className="overflow-hidden">

              <motion.p variants={item} className="text-sm max-w-[680px]">
                {overview}
              </motion.p>
            </div>

          </div>



          {isInProgress ? null :
            <>
              <div>
                <motion.p variants={item} className="text-xl lg:text-xl font-[Judson] py-4">Details</motion.p>

                <dl className="text-sm w-fit">
                  <motion.div variants={item} className="grid grid-cols-[80px_1fr] gap-4 border-b border-black/20 pb-2">
                    <dt className="font-medium uppercase tracking-wide">Type</dt>
                    <dd>{type}</dd>
                  </motion.div>

                  <motion.div variants={item} className="grid grid-cols-[80px_1fr] gap-4 border-b border-black/20 py-2">
                    <dt className="font-medium uppercase tracking-wide">Features</dt>
                    <dd>{features}</dd>
                  </motion.div>

                  <motion.div variants={item} className="grid grid-cols-[80px_1fr] gap-4 pt-2">
                    <dt className="font-medium uppercase tracking-wide">Stack</dt>
                    <dd>{stack}</dd>
                  </motion.div>
                </dl>
              </div>

              <div>
                <motion.p
                  variants={item}
                  className="text-xl lg:text-xl font-[Judson] py-4">
                  What I learned
                </motion.p>

                <motion.p
                  variants={item}
                  className="text-sm max-w-[680px]">
                  {lesson}
                </motion.p>
              </div>
            </>
          }
        </div>

        {isInProgress ? null :
          <div className="order-3 pb-4 flex justify-between  mt-10  xl:px-20 2xl:px-35  xl:mt-15 ">
            <div className="flex gap-2 md:gap-5">
              <ProjectLink label="Live" theme={theme} projectPath={livePath} />
              <ProjectLink label="Github" theme={theme} projectPath={gitHubPath} />
            </div>
            <Link to={linkPath}>
              <motion.div
                variants={buttonVariant}
                className={`text-xs xs:text-sm sm:text-base rounded-sm border py-1 px-3 xs:px-6 md:px-8 ${linkStyle}`}
              >
                Next Project
              </motion.div>
            </Link>
          </div>
        }

      </div>

      <div className=" order-2 xl:overflow-y-scroll mt-15 xl:mt-0 ">
        {images?.map((image) => {
          return (
            <motion.img
              initial={{ opacity: 0.9, filter: "blur(1.5px) saturate(0.96) brightness(0.98)" }}
              whileInView={{ opacity: 1, filter: "blur(0px) saturate(1) brightness(1)" }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              viewport={{ amount: 0.7 }}

              src={image}
              alt=""
              key={image}
            />
          )
        })}
      </div>

    </motion.div >
  )
}


export default ProjectLayout;

