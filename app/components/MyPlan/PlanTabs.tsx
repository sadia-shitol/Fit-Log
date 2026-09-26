'use client'

import { useState } from 'react'
import SortDropdown from './SortDropdown'
import PlanWorkoutList from './PlanWorkoutList'
import { useWorkout } from '@/app/context/WorkoutContext'
const PlanTabs = () => {
  const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan')
  const { plan, saved } = useWorkout()
  const workouts = activeTab === 'plan' ? plan : saved
  return (
    <section>
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex rounded-lg border border-gray-800 bg-[#15171d] p-1'>
          <button
            onClick={() => setActiveTab('plan')}
            className={`rounded-md px-4 py-2 text-xs ${
              activeTab === 'plan' ? 'bg-[#252832] text-white' : 'text-gray-400'
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`rounded-md px-4 py-2 text-xs ${
              activeTab === 'saved'
                ? 'bg-[#252832] text-white'
                : 'text-gray-400'
            }`}
          >
            Saved
          </button>
        </div>

        <SortDropdown />
      </div>

      <div>
        {activeTab === 'plan' ? <PlanWorkoutList /> : <PlanWorkoutList />}
      </div>
    </section>
  )
}

export default PlanTabs
