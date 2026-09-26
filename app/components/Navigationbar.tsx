'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '@/public/assets/logo.png'
import Container from '@/app/components/Container'

const Navigationbar = () => {
  const pathname = usePathname()
  const isWorkoutActive = pathname === '/' || pathname.startsWith('/workout')

  const isMyPlanActive = pathname === '/my-plan'
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  return (
    <div className='bg-base-200 shadow-sm'>
      <Container>
        <div className='navbar container mx-auto '>
          {/* LEFT SIDE */}
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  aria-label='Menu'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-[#ccff00]'
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

              {/* MOBILE MENU */}
              <ul
                tabIndex={-1}
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
              >
                <li>
                  <Link
                    href='/'
                    className={
                      isWorkoutActive
                        ? 'rounded-4xl text-[#ccff00] underline underline-offset-8'
                        : 'rounded-4xl text-white hover:text-[#ccff00]'
                    }
                  >
                    Workouts
                  </Link>
                </li>

                <li>
                  <Link
                    href='/my-plan'
                    className={
                      isMyPlanActive
                        ? 'rounded-4xl text-[#ccff00] underline underline-offset-8'
                        : 'rounded-4xl text-white hover:text-[#ccff00]'
                    }
                  >
                    My Plan
                  </Link>
                </li>
              </ul>
            </div>

            {/* LOGO */}
            <Link href='/' className='btn btn-ghost text-2xl'>
              <Image
                src={logo}
                alt='Fit-log Logo'
                className='hidden md:block'
              />
              <span className='text-2xl font-bold '>FITLOG</span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <Link
                  href='/'
                  className={
                    isWorkoutActive
                      ? 'rounded-4xl text-[#ccff00] underline underline-offset-8'
                      : 'rounded-4xl text-white hover:text-[#ccff00]'
                  }
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href='/my-plan'
                  className={
                    isMyPlanActive
                      ? 'rounded-4xl text-[#ccff00] underline underline-offset-8'
                      : 'rounded-4xl text-white hover:text-[#ccff00]'
                  }
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className='navbar-end'>
            <div className='flex items-center gap-6'>
              {/* PLAN */}
              <div className='flex items-center gap-2'>
                <Link href='/my-plan' className='text-sm text-white'>
                  Plan
                </Link>

                <span className='flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-xs font-semibold text-black'>
                  0
                </span>
              </div>

              {/* SAVED */}
              <div className='flex items-center gap-2'>
                <Link href='/my-plan' className='text-sm text-white'>
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
    </div>
  )
}

export default Navigationbar
