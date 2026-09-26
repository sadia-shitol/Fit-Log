'use client'

import { useWorkout } from '../context/WorkoutContext'
import PlanStats from '../components/MyPlan/PlanStats'
import PlanTabs from '../components/MyPlan/PlanTabs'
import Container from '../components/Container'
import PlanWorkoutList from '../components/MyPlan/PlanWorkoutList'
import EmptyPlan from '../components/MyPlan/EmptyPlan'

const MyPlan = () => {
  const { plan } = useWorkout()

  return (
    <Container>
      <div className='mx-auto p-4'>
        <h1 className='text-4xl font-bold'>MY PLAN</h1>

        <p className='p-4 pl-0 text-2xl font-semibold'>
          Cap of five lifts today. Finish them, then load more
        </p>

        <PlanStats />

        <PlanTabs />

        {plan.length === 0 ? (
          <EmptyPlan />
        ) : (
          <PlanWorkoutList workouts={plan} type='plan' />
        )}
      </div>
    </Container>
  )
}

export default MyPlan
