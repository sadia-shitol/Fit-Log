import React from 'react'
import PlanStats from '../components/MyPlan/PlanStats'
import PlanTabs from '../components/MyPlan/PlanTabs'
import Container from '../components/Container'
const MyPlan = () => {
  return (
    <Container>
      <div className='mx-auto p-4'>
        <h1 className='font-bold text-4xl'>MY PLAN</h1>
        <p className='font-semibold text-2xl pl-0 p-4'>
          Cap of five lifts today. Finish them, then load more
        </p>
        <PlanStats />
        <PlanTabs />
      </div>
    </Container>
  )
}

export default MyPlan
