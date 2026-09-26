import React from 'react'

const Loading = () => {
  return (
    <div className='flex min-h-[70vh] items-center justify-center'>
      <span className='loading loading-bars loading-xs text-[#ccff00]'></span>
      <span className='loading loading-bars loading-sm text-[#ccff00]'></span>
      <span className='loading loading-bars loading-md text-[#ccff00]'></span>
      <span className='loading loading-bars loading-lg text-[#ccff00]'></span>
      <span className='loading loading-bars loading-xl text-[#ccff00]'></span>
    </div>
  )
}

export default Loading
