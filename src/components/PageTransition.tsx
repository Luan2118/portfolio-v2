import { motion } from "motion/react";
import { useLayoutEffect } from "react";

type PageTransitionProps = {
  theme: 'dark' | 'light'
  children: React.ReactNode

}

function PageTransition({ theme, children}: PageTransitionProps) {
  const transitionColor =
    theme === "dark"
      ? "bg-[#211E1A]"
      : "bg-[#F1EADF]"


  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <>
      {children}


      <motion.div
        className={`fixed inset-0 origin-top z-[9999] ${transitionColor}`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
      </motion.div>


      <motion.div
        className={`fixed inset-0 origin-bottom z-[9999] ${transitionColor}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
      </motion.div>
    </>
  )
}

export default PageTransition;