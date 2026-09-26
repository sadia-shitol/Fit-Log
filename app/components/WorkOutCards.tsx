import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Workout } from '@/app/types/workouts.type'
interface WorkoutCardProps {
  workout: Workout
}
const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div>
      <Link href={`/exercises/${workout.id}`}>
        <div className='overflow-hidden rounded-2xl border border-gray-700 bg-[#15171d] transition-all duration-300 hover:-translate-y-1 hover:border-[#c2f800]'>
          <div className='relative h-52 w-full'>
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className='object-cover'
            />
          </div>

          <div className='p-6'>
            <div className='mb-4 flex flex-wrap gap-2'>
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className='rounded-full bg-[#c2f800] px-4 py-1 text-xs font-bold uppercase text-black'
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h2 className='mb-2 text-xl font-black uppercase text-white'>
              {workout.name}
            </h2>

            <p className='mb-5 text-sm text-gray-400'>{workout.equipment}</p>

            <div className='flex items-center justify-between border border-gray-800 rounded-xl px-3 py-2 text-sm text-gray-300'>
              <span className='flex items-center gap-2'>
                <span className='text-[#ccff00]'>◯</span>
                {workout.duration} min
              </span>

              <span className='flex items-center gap-2'>
                <span className='text-gray-400'>💪🏻</span>
                {workout.caloriesBurned} kcal
              </span>

              <span className='flex items-center gap-2'>
                <span className='text-[#ccff00]'>☆</span>
                {workout.rating}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default WorkoutCard
