import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import GymTracker from './pages/Projects/GymTracker'
import FinanceTracker from './pages/Projects/FinanceTracker'
import HospodaPodBousovem from './pages/Projects/HospodaPodBousovem'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path="/gym-tracker" element={<GymTracker />} />
      <Route path="/finance-tracker" element={<FinanceTracker />} />
      <Route path="/hospoda-pod-bousovem" element={<HospodaPodBousovem />} />
    </Routes>
  )
}

export default App
