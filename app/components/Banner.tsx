import React from 'react'
import banner from '@/public/assets/banner.png'
import Image from 'next/image'
import Container from './Container'
const Banner = () => {
  return (
    <Container>
      <div className='hero min-h-screen rounded-4xl shadow-lg'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <Image
            alt='Fitness Banner'
            src={banner}
            className='max-w-sm  h-100 w-100 ml-3.5'
          />

          <div>
            <p className='mb-4 text-lg font-bold uppercase text-[#c2f800]'>
              WORKOUT LIBRARY
            </p>
            <h1 className='text-5xl font-bold'>
              TRAIN WITH INTENT.
              <br /> LOG EVERY SET.
            </h1>
            <p className='py-4'>
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              <br />
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <p className='py-4'>
              Choose from a focused library of exercises, build your daily
              workout
              <br />
              plan, and track every set, rep, and result.
            </p>
            <button className='btn bg-[#c2f800] text-black border-[#c2f800] hover:bg-[#b5e800] hover:border-[#b5e800]'>
              BROWSE WORKOUTS
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Banner
