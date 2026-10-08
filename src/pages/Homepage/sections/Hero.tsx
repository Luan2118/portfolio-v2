import NavItem from "../components/NavItem";
import { motion } from "motion/react";

function Hero() {

  const revealAnimation = {
    initial: { opacity: 0, y: '-100%' },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  return (
    <div id="hero" className="min-h-svh bg-[#FFFBF4] flex flex-col justify-between p-8 font-[Inter] ">

      <aside
        className="fixed top-8 left-8 right-8 l grid grid-cols-2 items-center sm:grid-cols-3 text-[#D4D4D4] mix-blend-difference antialiased ">

        <div className="overflow-hidden">
          <motion.div
            {...revealAnimation}
          >
            <NavItem label="LL" path="#hero" />
          </motion.div>
        </div>

        <div className="overflow-hidden hidden sm:block">
          <motion.p
            {...revealAnimation}
            className=" text-sm text-center  sm:text-lg"
          >
            Software Developer - Pilsen
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.nav
            {...revealAnimation}
            className="flex justify-end gap-6 md:gap-10 lg:flex"
          >
            <NavItem label="Projects" path="#projects" />
            <NavItem label="Contact" path="#contact" />
          </motion.nav>
        </div>

      </aside>

      <div className="overflow-hidden m-auto">
        <motion.h1
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col text-[clamp(110px,calc(50.14px+15.962vw),280px)] md:flex-row md:gap-10 font-[Judson] leading-[0.80]"
        >
          <span>Luan</span>
          <span className="text-right">Le</span>
        </motion.h1>


      </div>

      <div className="flex flex-col justify-center items-center gap-4 overflow-hidden">
        <motion.span
          {...revealAnimation}
          className="text-xs uppercase tracking-[0.15em] font-[Inter]">
          Explore my work
        </motion.span>

        <div className="overflow-hidden">
          <motion.svg
            initial={{ opacity: 0, y: "-60%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            width="16"
            height="35"
            viewBox="0 0 16 65"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-y-2"
          >
            <path
              d="M8 0V63M3 58L8 63L13 58"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </div>
    </div >
  )
}


export default Hero;