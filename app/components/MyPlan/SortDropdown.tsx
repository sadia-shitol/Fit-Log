const SortDropdown = () => {
  return (
    <div className='flex items-center gap-2'>
      <span className='text-xs text-gray-400'>Sort By</span>

      <select className='rounded-md border border-gray-800 bg-[#15171d] px-3 py-2 text-xs text-white outline-none'>
        <option value='duration'>Duration</option>
        <option value='calories'>Calories</option>
        <option value='rating'>Rating</option>
      </select>
    </div>
  )
}

export default SortDropdown
