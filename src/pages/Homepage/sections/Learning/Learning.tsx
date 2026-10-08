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

const lineItem: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 0.6,
    scaleX: 1,
    transition: {
      duration: 0.8,
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
      className="bg-[#171512] text-[#FFFBF4] font-[Inter] flex flex-col md:flex-row items-center justify-between gap-8 px-5 py-40 md:px-20 lg:px-40 2xl:px-100 ">

      <motion.p
        variants={textItem}
        className="text-4xl font-[Judson] leading-none w-fit min-w-[200px]">
        Learning by building
      </motion.p>

      <motion.hr
        variants={lineItem}
        className="w-full max-w-[300px] border-[#FFFBF4] origin-left " />

      <motion.p
        variants={container}
        className="max-w-[360px] md:px-10 text-[#FFFBF4]/70 leading-relaxed"
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