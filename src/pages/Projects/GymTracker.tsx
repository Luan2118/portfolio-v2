import dashboard from "../../assets/images/gym-tracker/gym-dashboard.png"
import workoutHistory from "../../assets/images/gym-tracker/workout-history.png"
import exercises from "../../assets/images/gym-tracker/exercises.png"
import ProjectLayout from "./components/ProjectLayout"

function GymTracker() {
  return (
    <ProjectLayout
      overview="
      Gym Tracker is a workout tracking web app for managing training plans, logging workouts, and tracking progress.
      I built the application from scratch with React, TypeScript, Supabase, and Chart.js, focusing on a clean responsive interface and practical workout tracking."
      type="Full-stack web application"
      features="Workouts, training splits, history, progress charts"
      stack="React, TypeScript, Supabase, PostgreSQL, Chart.js"
      lesson="The biggest lesson was learning how to design features around real data flows — from the database, through application logic, all the way to the UI."
      images={[dashboard, workoutHistory, exercises]}
    />
  )
}


export default GymTracker