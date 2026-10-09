import ProjectCard from "./components/ProjectCard";
import { motion } from "motion/react";
import gymDashboard from "../../../../assets/images/gym-tracker/dashboard.png";
import financeDashBoard from "../../../../assets/images/finance-tracker/dashboard.png";
import hospoda from "../../../../assets/images/hospoda-pod-bousovem/front-view.png";
import { useState } from "react";
import { AnimatePresence, useMotionValue } from "motion/react";
import useCursor from "../../../../hooks/useCursor";
import { useEffect } from "react";


function Projects() {

  const [activeImage, setActiveImage] = useState<string>('');

  function updateActiveImage(image: string) {
    setActiveImage(image)
  }

  const imageX = useMotionValue(0);
  const imageY = useMotionValue(0);

  useEffect(() => {
    const moveImage = (e: MouseEvent) => {
      imageX.set(e.clientX + 15)
      imageY.set(e.clientY + 10)
    }

    window.addEventListener('mousemove', moveImage)

    return () => {
      window.removeEventListener('mousemove', moveImage)
    }
  }, [])


  const { hoveredProject } = useCursor();

  const hasFinePointer = window.matchMedia("(pointer: fine)").matches


  return (
    <section id="projects" className="bg-[#171512] text-[#FFFBF4] min-h-svh flex flex-col px-5 xl:px-15 2xl:px-50 gap-4 pt-30 pb-20">

      <div
        className=" font-[Judson] overflow-hidden lg:px-30 text-[#FFFBF4]/70 ">
        <motion.h2
          initial={{ y: "100%", opacity: 0 }
          }
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{once: true}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl"
          >
          Selected Work
        </motion.h2>
      </div>


      <div className="flex flex-col " >
        <ul

        >
          <ProjectCard name="Gym Tracker" category="Full-Stack Development" image={gymDashboard} updateActiveImage={updateActiveImage} link='/gym-tracker' />

          <ProjectCard name="Finance Tracker" category="Full-Stack Development" image={financeDashBoard} updateActiveImage={updateActiveImage} link='/finance-tracker' />

          <ProjectCard name="Hospůdka pod Boušovem" category="Web Design & Development" image={hospoda} updateActiveImage={updateActiveImage} link='/hospudka-pod-bousovem' />
        </ul>


        {hoveredProject &&
          <motion.div
            style={{ translateX: imageX, translateY: imageY }}
            className={`${hasFinePointer ? 'w-[300px] h-[200px] fixed inset-0 pointer-events-none overflow-hidden border border-white/70' : null}`}
          >
            <AnimatePresence >
              <motion.img
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                key={activeImage}
                src={activeImage} alt="" className="absolute top-0 left-0 " />
            </AnimatePresence >

            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[#FFFBF4]/90">View Case</p>
            </div>

          </motion.div>}
      </div>
    </section>
  )
}


export default Projects;