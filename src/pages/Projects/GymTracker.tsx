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
      Gym Tracker is a workout tracking web app for managing training plans, logging workouts, and tracking progress.
      I built the application from scratch with React, TypeScript, Supabase, and Chart.js, focusing on a clean responsive interface and practical workout tracking.'
      type='Full-stack web application'
      features='Workouts, training splits, history, progress charts'
      stack='React, TypeScript, Supabase, PostgreSQL, Chart.js'
      lesson='The biggest lesson was learning how to design features around real data flows — from the database, through application logic, all the way to the UI.'
      images={[dashboard, workoutHistory, exercises, activeMobile, exercisesMobile]}
      theme='light'
      livePath='https://gym-tracker-azure-tau.vercel.app/'
      gitHubPath='https://github.com/Luan2118/gym-tracker'
    />
  )
}


export default GymTracker