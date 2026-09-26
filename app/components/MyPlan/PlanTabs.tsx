'use client'

import { useState } from 'react'
import SortDropdown from './SortDropdown'
import EmptyPlan from './EmptyPlan'

const PlanTabs = () => {
  const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan')

  return (
    <section>
      {/* Tabs + Sort */}
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

      {/* Content */}
      <div>{activeTab === 'plan' ? <EmptyPlan /> : <EmptyPlan />}</div>
    </section>
  )
}

export default PlanTabs
