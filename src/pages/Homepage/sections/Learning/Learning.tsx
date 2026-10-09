import { motion, type Variants } from "motion/react"

const word: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
}

function Learning() {
  return (
    <motion.section
    
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.4,
      }}
      className=" bg-[#171512] text-[#FFFBF4] font-[Inter] flex flex-col gap-4 items-center  px-5 pb-20 ">

      <motion.h2
        variants={textItem}
        className="text-lg uppercase tracking-[0.15em] font-[Inter]  text-[#FFFBF4]/90 text-center">
        Learning by building
      </motion.h2>


      <motion.p
        variants={container}
        className="max-w-[700px] md:px-10 text-[#FFFBF4]/70 text-base text-center"
      >
        <motion.span variants={word}>I believe the best way to learn is to create. </motion.span>
        <motion.span variants={word}>Every project is an opportunity to explore new ideas, </motion.span>
        <motion.span variants={word}>solve real problems, </motion.span>
        <motion.span variants={word}>and discover new ways of doing things.</motion.span>
      </motion.p>

    </motion.section>
  )
}

export default Learning