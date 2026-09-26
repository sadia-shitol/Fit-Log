'use client'

import { ToastContainer } from 'react-toastify'

const ToastProvider = () => {
  return (
    <ToastContainer position='bottom-right' autoClose={3000} theme='dark' />
  )
}

export default ToastProvider
