'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useWorkout } from '@/app/context/WorkoutContext'
import { Workout } from '@/app/types/workouts.type'

type PlanWorkoutListProps = {
  workouts: Workout[]
  type: 'plan' | 'saved'
}

const PlanWorkoutList = ({ workouts, type }: PlanWorkoutListProps) => {
  const { removeFromPlan, removeFromSaved } = useWorkout()

  const handleMarkAsDone = (id: string) => {
    if (type === 'plan') {
      removeFromPlan(id)
    } else {
      removeFromSaved(id)
    }
  }

  return (
    <div className='space-y-3 py-4'>
      {workouts.map((workout) => (
        <div
          key={workout.id}
          className='flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#15171d] p-3 sm:flex-row sm:items-center'
        >
          {/* Workout Image */}
          <Image
            src={workout.image}
            alt={workout.name}
            width={125}
            height={85}
            className='h-[85px] w-full rounded-xl object-cover sm:w-[125px]'
          />

          {/* Workout Information */}
          <div className='min-w-0 flex-1'>
            <h3 className='truncate text-base font-bold uppercase text-white'>
              {workout.name}
            </h3>

            <p className='mt-0.5 text-sm text-gray-400'>{workout.equipment}</p>

            <div className='mt-2 flex flex-wrap items-center gap-3 text-xs text-[#ccff00]'>
              <span>◯ {workout.duration} min</span>

              <span>💪🏻 {workout.caloriesBurned} kcal</span>

              <span>★ {workout.rating}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex shrink-0 gap-2 sm:ml-auto'>
            <Link
              href={`/exercises/${workout.id}`}
              className='btn btn-sm rounded-full border border-gray-700 bg-transparent px-4 text-white hover:border-[#ccff00]'
            >
              View Details
            </Link>

            <button
              type='button'
              onClick={() => handleMarkAsDone(workout.id)}
              className='btn btn-sm rounded-full border-[#ccff00] bg-[#ccff00] px-5 text-black hover:border-[#b5e800] hover:bg-[#b5e800]'
            >
              Mark as Done
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlanWorkoutList
