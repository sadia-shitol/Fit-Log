import Link from 'next/link'

const EmptyPlan = () => {
  return (
    <div className='flex min-h-[40vh] flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#101216] px-4 text-center'>
      <h2 className='text-sm font-bold uppercase'>NOTHING HERE YET</h2>

      <p className='mt-1 text-xs text-gray-400'>
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href='/'
        className='mt-4 rounded-full bg-[#ccff00] px-5 py-2 text-xs font-semibold text-black transition hover:bg-white hover:text-black'
      >
        Go to workouts
      </Link>
    </div>
  )
}

export default EmptyPlan
