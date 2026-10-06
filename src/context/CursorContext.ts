import { createContext} from "react";

type CursorContextType = {
  isHover: boolean
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>
  hoveredProject: string | null
  setHoveredProject: React.Dispatch<React.SetStateAction<string | null>>
}

export const CursorContext = createContext<CursorContextType | null >(null);