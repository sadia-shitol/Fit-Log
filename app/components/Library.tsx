import React from 'react'
import { Workout } from '@/app/types/workouts.type'
import Container from './Container'
import WorkOutCards from '@/app/components/WorkOutCards'

const getWorkouts = async () => {
  const response = await fetch('https://api.api-store.workers.dev/api/fitlog')
  const data = await response.json()
  return data
}
const Library = async () => {
  const workoutsData = await getWorkouts()
  return (
    <Container>
      <section
        id='library'
        className='justify-center container w-full p-6 m-4 scroll-mt-24'
      >
        <h2 className='text-3xl font-bold m-3 py-3'>THE LIBRARY</h2>
        <p className='text-xl font-bold ml-3 mb-3 pb-3'>
          Twelve lifts covering every major muscle group
        </p>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {workoutsData.map((workout: Workout) => {
            return <WorkOutCards key={workout.id} workout={workout} />
          })}
        </div>
      </section>
    </Container>
  )
}

export default Library
