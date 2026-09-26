'use client'
import { createContext, useContext, useState } from 'react'
import { Workout } from '../types/workouts.type'
type WorkoutContextType = {
  plan: Workout[]
  saved: Workout[]
  addToPlan: (workout: Workout) => boolean
  saveWorkout: (workout: Workout) => boolean
}
const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined)
export const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [plan, setPlan] = useState<Workout[]>([])
  const [saved, setSaved] = useState<Workout[]>([])
  // Add workout to today's plan
  const addToPlan = (workout: Workout) => {
    const alreadyExists = plan.some((item) => item.id === workout.id)
    if (alreadyExists) {
      return false
    }
    setPlan((prev) => [...prev, workout])
    return true
  }
  // Save workout for later
  const saveWorkout = (workout: Workout) => {
    const alreadySaved = saved.some((item) => item.id === workout.id)
    if (alreadySaved) {
      return false
    }
    setSaved((prev) => [...prev, workout])
    return true
  }
  return (
    <WorkoutContext.Provider value={{ plan, saved, addToPlan, saveWorkout }}>
      {' '}
      {children}{' '}
    </WorkoutContext.Provider>
  )
}
export const useWorkout = () => {
  const context = useContext(WorkoutContext)
  if (!context) {
    throw new Error('useWorkout must be used inside WorkoutProvider')
  }
  return context
}
