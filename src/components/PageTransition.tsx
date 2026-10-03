import { motion } from "motion/react";
import { useLayoutEffect } from "react";

type PageTransitionProps = {
  theme: 'dark' | 'light'
  children: React.ReactNode
  page?: 'homePage'
}

function PageTransition({ theme, children, page }: PageTransitionProps) {
  const transitionColor =
    theme === "dark"
      ? "bg-[#211E1A]"
      : "bg-[#FAF8F4]"


  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <>
      {children}

      {page ?

        <motion.div
          className={`fixed inset-0 origin-left ${transitionColor}`}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
        </motion.div>

        : null}

      <motion.div
        className={`fixed inset-0 origin-left ${transitionColor}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
      </motion.div>
    </>
  )
}

export default PageTransition;