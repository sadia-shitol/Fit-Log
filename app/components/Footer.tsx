import React from 'react'
import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import Container from '@/app/components/Container'
const Footer = () => {
  return (
    <div className='bg-base-200 shadow-sm'>
      <Container>
        <footer className='footer sm:footer-horizontal  text-neutral-content items-center p-4'>
          <aside className='grid-flow-col items-center'>
            <Image src={logo} alt='Fit-Log logo' />{' '}
            <span className='text-lg font-bold'>FITLOG</span>
          </aside>
          <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
            <p>
              © {new Date().getFullYear()} FitLog - Workout Library. Train hard,
              log honest.
            </p>
          </nav>
        </footer>
      </Container>
    </div>
  )
}

export default Footer
