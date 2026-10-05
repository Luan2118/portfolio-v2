import { Link } from "react-router-dom";
import blackArrow from "../../../assets/icons/blackArrow.png"
import whiteArrow from "../../../assets/icons/whiteArrow.png"
import ProjectLink from "./ProjectLink";
import { motion, type Variants } from "motion/react";
import { useState, useEffect } from "react";
import useCursor from "../../../hooks/useCursor";


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

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isXL = windowDimensions.width >= 1280

  const { setIsHover } = useCursor();

  return (
    <motion.div
      variants={container} initial="hidden" animate="visible"
      className={`min-h-dvh grid grid-cols-1 xl:grid-cols-2 pb-5 px-5 xl:pb-0 xl:px-0 xl:h-dvh  ${isDark ? 'bg-[#171512] text-[#FFFBF4]' : 'bg-[#FFFBF4] text-[#171512]'}`}>

      <div className={`contents xl:flex xl:flex-col ${isDark ? 'bg-[#171512]' : 'bg-[#FFFBF4]'}`}>

        <Link to='/' className="mb-8 2xl:mb-15 w-10 xl:w-12 mt-4 xl:ml-4 w-[clamp(20px,3vw,30px)] h-[clamp(20px,3vw,30px)]">
          <motion.img
            variants={buttonVariant}
            src={isDark ? whiteArrow : blackArrow}
            alt=""
            onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
          />
        </Link>


        <div className="order-1 flex flex-col gap-4 2xl:gap-10 xl:px-15 2xl:px-30 ">

          <div className="overflow-hidden">
            <motion.h1
              variants={item}
              className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-[Judson] text-center">
              {title}
            </motion.h1>
          </div>

          {isInProgress ? <p className="font-[Inter] text-3xl text-[#A84A3A] mx-auto tracking-[0.3rem] mt-15 mb-15 text-center">WEBSITE REDESIGN - IN PROGRESS</p>
            : null}

          <div >

            <div className="overflow-hidden">
              <motion.p
                variants={item}
                className="text-xl lg:text-xl font-[Judson] py-4">
                Project Overview
              </motion.p>
            </div>

            <div className="overflow-hidden">

              <motion.p variants={item} className="text-sm max-w-[680px] xl:max-h-[80px]">
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
                  className="text-lg xl:text-xl font-[Judson] py-4">
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
          <div className="order-3 pb-4 flex justify-between  mt-10  xl:px-15 2xl:px-30">
            <div className="flex gap-2 md:gap-5">
              <ProjectLink label="Live" theme={theme} projectPath={livePath} />
              <ProjectLink label="Github" theme={theme} projectPath={gitHubPath} />
            </div>
            
            <Link to={linkPath}>
              <motion.div
                variants={buttonVariant}
                className={`text-xs xs:text-sm 2xl:text-base rounded-sm border py-1 px-3 xs:px-6 md:px-8 ${linkStyle}`}

                onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
              >
                Next Project
              </motion.div>
            </Link>
          </div>
        }

      </div>

      <motion.div
        className="order-2 xl:overflow-y-scroll mt-15 xl:mt-0  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        [--entry-x:0%]
        [--entry-y:0%]
        [--entry-scale:1]

        xl:[--entry-x:-130%]
        xl:[--entry-y:0%]
        xl:[--entry-scale:1]
        "
        initial={{ x: "var(--entry-x)", y: "var(--entry-y)", scale: "var(--entry-scale)", opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}

      >
        {images?.map((image, index) => {
          return (
            <motion.img
              initial={isXL ? index === 0 ? undefined : { opacity: 0 } : { opacity: 0 }}
              animate={isXL ? index == 0 ? undefined : { opacity: 1 } : undefined}
              whileInView={isXL ? undefined : { opacity: 1 }}
              viewport={{ amount: 0.15 }}
              transition={isXL ? { delay: 1, duration: 0.9, ease: "easeIn" } : { duration: 0.9, ease: "easeOut" }}
              src={image}
              alt=""
              key={image}
            />
          )
        })}
      </motion.div>

    </motion.div >
  )
}


export default ProjectLayout;

