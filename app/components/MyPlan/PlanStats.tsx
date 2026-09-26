import React from 'react'

const PlanStats = () => {
  return (
    <div className='mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3'>
      <div className='rounded-xl border border-gray-800 bg-[#15171d] p-5'>
        <p className='text-xs text-gray-400'>Exercises</p>
        <h2 className='mt-1 text-2xl font-bold text-[#ccff00]'>2</h2>
      </div>

      <div className='rounded-xl border border-gray-800 bg-[#15171d] p-5'>
        <p className='text-xs text-gray-400'>Minutes</p>
        <h2 className='mt-1 text-2xl font-bold'>23</h2>
      </div>

      <div className='rounded-xl border border-gray-800 bg-[#15171d] p-5'>
        <p className='text-xs text-gray-400'>Calories</p>
        <h2 className='mt-1 text-2xl font-bold'>190</h2>
      </div>
    </div>
  )
}

export default PlanStats
