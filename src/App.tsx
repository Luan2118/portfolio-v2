import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import GymTracker from './pages/Projects/GymTracker'
import FinanceTracker from './pages/Projects/FinanceTracker'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path="/gym-tracker" element={<GymTracker />} />
      <Route path="/finance-tracker" element={<FinanceTracker />} />
    </Routes>
  )
}

export default App
