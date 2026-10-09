import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import GymTracker from './pages/Projects/GymTracker'
import FinanceTracker from './pages/Projects/FinanceTracker'
import HospodaPodBousovem from './pages/Projects/HospodaPodBousovem'
import { AnimatePresence } from 'motion/react'
import PageTransition from './components/PageTransition'
import CustomCursor from './components/CustomCursor'
import { CursorContext } from './context/CursorContext'
import { useState } from 'react'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const location = useLocation();

  const [isHover, setIsHover] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <CursorContext value={{ isHover, setIsHover, hoveredProject, setHoveredProject }} >
      <CustomCursor />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<PageTransition theme='light'><Homepage /></PageTransition>} />
          <Route path="/gym-tracker" element={<PageTransition theme='light'><GymTracker /></PageTransition>} />
          <Route path="/finance-tracker" element={<PageTransition theme='dark'><FinanceTracker /></PageTransition>} />
          <Route path="/hospudka-pod-bousovem" element={<PageTransition theme='light'><HospodaPodBousovem /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </CursorContext>
  )
}


export default App
