'use client'

import { useWorkout } from '@/app/context/WorkoutContext'
import { Workout } from '../types/workouts.type'
import { toast } from 'react-toastify'

type CTAButtonsProps = {
  workout: Workout
}

const CTAButtons = ({ workout }: CTAButtonsProps) => {
  const { addToPlan, saveWorkout } = useWorkout()

  const handleAddPlan = () => {
    const added = addToPlan(workout)

    if (added) {
      toast.success("Workout added to today's plan!")
    } else {
      toast.warning("This workout is already in today's plan!")
    }
  }

  const handleSaveWorkout = () => {
    const saved = saveWorkout(workout)
    if (saved) {
      toast.success('Workout saved for later!')
    } else {
      toast.warning('This workout is already saved!')
    }
  }
  return (
    <div className='mt-6 flex flex-wrap gap-3'>
      <button
        onClick={handleAddPlan}
        className='btn border-[#ccff00] bg-[#ccff00] text-black hover:border-[#b5e800] hover:bg-[#b5e800]'
      >
        Add to today&apos;s plan
      </button>

      <button
        onClick={handleSaveWorkout}
        className='btn border-gray-700 bg-transparent text-white hover:border-[#ccff00]'
      >
        Save for later
      </button>
    </div>
  )
}

export default CTAButtons
