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
      overview='
      Gym Tracker is a web app for planning gym workouts and tracking progress. Users can create custom training plans, log weights and repetitions, and review their workout history. An exercise library, strength progress charts, and body weight tracking help users follow their progress over time.'
      type='Full-stack web application'
      features='Custom training plans, workout logging, workout history, exercise library, progress charts, body weight tracking'
      stack='React, TypeScript, React Router, Supabase, PostgreSQL, Chart.js, CSS Modules, Vite'
      lesson='Building Gym Tracker taught me how to manage complex state in React, work with nested data structures, and update data without mutating the original state. I improved my TypeScript skills by defining types for workout data and working with them across different components. Integrating Supabase helped me understand how to connect a frontend application to a database, handle asynchronous operations, and manage loading and error states.
'
      images={[dashboard, workoutHistory, exercises, activeMobile, exercisesMobile]}
      theme='light'
      livePath='https://gym-tracker-azure-tau.vercel.app/'
      gitHubPath='https://github.com/Luan2118/gym-tracker'
      next='/hospudka-pod-bousovem'
    />
  )
}


export default GymTracker
