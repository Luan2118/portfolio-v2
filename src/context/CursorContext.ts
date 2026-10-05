import { createContext} from "react";

type CursorContextType = {
  isHover: boolean
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>
}

export const CursorContext = createContext<CursorContextType | null >(null);