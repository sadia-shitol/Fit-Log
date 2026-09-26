'use client'
import { useWorkout } from '@/app/context/WorkoutContext'
const PlanStats = () => {
  const { plan } = useWorkout()
  const totalExercises = plan.length
  const totalMinutes = plan.reduce(
    (total, workout) => total + Number(workout.duration),
    0
  )
  const totalCalories = plan.reduce(
    (total, workout) => total + Number(workout.caloriesBurned),
    0
  )
  return (
    <div className='mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3'>
      <div className='rounded-xl border border-gray-800 bg-[#15171d] p-5'>
        <p className='text-xs text-gray-400'>Exercises</p>
        <h2 className='mt-1 text-2xl font-bold text-[#ccff00]'>
          {totalExercises}
        </h2>
      </div>

      <div className='rounded-xl border border-gray-800 bg-[#15171d] p-5'>
        <p className='text-xs text-gray-400'>Minutes</p>
        <h2 className='mt-1 text-2xl font-bold'> {totalMinutes} </h2>
      </div>

      <div className='rounded-xl border border-gray-800 bg-[#15171d] p-5'>
        <p className='text-xs text-gray-400'>Calories</p>
        <h2 className='mt-1 text-2xl font-bold'> {totalCalories} </h2>
      </div>
    </div>
  )
}
export default PlanStats
