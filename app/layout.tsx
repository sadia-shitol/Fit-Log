import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navigationbar from './components/Navigationbar'
import { WorkoutProvider } from './context/WorkoutContext'
import Footer from './components/Footer'
import ToastProvider from '@/app/components/ToastProvider'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fit Log',
  description: 'Your Fitness Tracking Partner',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col container'>
        <WorkoutProvider>
          <Navigationbar />

          {children}
          <Footer />
          <ToastProvider />
        </WorkoutProvider>
      </body>
    </html>
  )
}
