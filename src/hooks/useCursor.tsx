import { useContext } from "react"
import { CursorContext } from "../context/CursorContext"

function useCursor() {
  const cursorContext = useContext(CursorContext)


  if (!cursorContext) {
    throw new Error("CursorContext must be used inside provider")
  }

  const { isHover, setIsHover, hoveredProject, setHoveredProject } = cursorContext

  return {
    isHover,
    setIsHover,
    hoveredProject,
    setHoveredProject
  }

}

export default useCursor;