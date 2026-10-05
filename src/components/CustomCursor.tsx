import {  useEffect } from "react"
import {  useMotionValue, motion } from "motion/react"

function CustomCursor() {


  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])



  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="fixed top-0 left-0 w-4 h-4 rounded-2xl mix-blend-difference bg-white pointer-events-none">

    </motion.div>
  )
}

export default CustomCursor;