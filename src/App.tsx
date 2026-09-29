import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import GymTracker from './pages/Projects/GymTracker'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path="/gym-tracker" element={<GymTracker />} />
    </Routes>
  )
}

export default App
