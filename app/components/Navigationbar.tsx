import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import Container from '@/app/components/Container'
const Navigationbar = () => {
  return (
    <Container>
      <div className='navbar bg-base-100 shadow-sm container mx-auto'>
        <div className='navbar-start '>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                aria-label='Menu'
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-[#c2f800]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              <li className='rounded-4xl text-white hover:text-[#c2f800]'>
                <Link href={'/my-plan'}>Workouts</Link>
              </li>
              <li className='rounded-4xl text-white hover:text-[#c2f800]'>
                <Link href={'/my-plan'}>My Plan</Link>
              </li>
            </ul>
          </div>
          <Link href={'/'} className='btn btn-ghost text-2xl'>
            <Image src={logo} alt='Fit-log Logo' />
            <span className='font-bold text-2xl'>FITLOG</span>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex '>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link
                href={'/my-plan'}
                className='rounded-4xl text-white hover:text-[#c2f800]'
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href='/my-plan'
                className='rounded-4xl text-white hover:text-[#c2f800]'
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <Link href={'/my-plan'} className='text-sm text-white'>
                Plan
              </Link>
              <span className='flex h-5 w-5 items-center justify-center rounded-full bg-[#c2f800FF] text-xs font-semibold text-black'>
                0
              </span>
            </div>

            <div className='flex items-center gap-2'>
              <Link href={'/my-plan'} className='text-sm text-white'>
                Saved
              </Link>
              <span className='flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-xs text-gray-300'>
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navigationbar
