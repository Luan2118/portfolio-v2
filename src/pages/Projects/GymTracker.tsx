import dashboard from "../../assets/images/gym-tracker/dashboard.png"
import workoutHistory from "../../assets/images/gym-tracker/workout-history.png"
import exercises from "../../assets/images/gym-tracker/exercises.png"
import ProjectLayout from "./components/ProjectLayout"
import activeMobile from "../../assets/images/gym-tracker/active-workout-mobile.png"
import exercisesMobile from "../../assets/images/gym-tracker/exercises-mobile.png"

function GymTracker() {
  return (
    <ProjectLayout
      title='Gym Tracker'
      titleSizeClassName='text-5xl md:text-6xl xl:text-5xl 2xl:text-6xl'
      overview='
      Gym Tracker is a web app for planning gym workouts and tracking progress. Users can create custom training plans, log weights and repetitions, and review their workout history. An exercise library, strength progress charts, and body weight tracking help users follow their progress over time.'
      type='Full-stack web application'
      features='Custom training plans, workout logging, workout history, exercise library, progress charts, body weight tracking'
      stack='React, TypeScript, React Router, Supabase, PostgreSQL, Chart.js, CSS Modules, Vite'
      lesson='This project helped me understand how to manage data across a React and TypeScript application. I learned to update nested workout data—days, exercises, and sets—without mutating state, and share it between pages using React Router. Connecting the app to Supabase gave me practical experience keeping the interface in sync with saved data and handling loading states and errors.'
      images={[dashboard, workoutHistory, exercises, activeMobile, exercisesMobile]}
      theme='light'
      livePath='https://gym-tracker-azure-tau.vercel.app/'
      gitHubPath='https://github.com/Luan2118/gym-tracker'
      next='/finance-tracker'

    />
  )
}


export default GymTracker
