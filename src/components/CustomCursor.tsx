import { useEffect } from "react"
import { useMotionValue, motion } from "motion/react"
import useCursor from "../hooks/useCursor";


function CustomCursor() {


  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const { isHover } = useCursor();

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6)
      cursorY.set(e.clientY - 6)
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
      animate={{
        scale: isHover ? 4 : 1
      }}
      transition={{duration: 0.3, ease:"easeOut"}}
      className={`fixed top-0 left-0 w-3 h-3 rounded-2xl mix-blend-difference bg-white pointer-events-none `}>

    </motion.div>
  )
}

export default CustomCursor;