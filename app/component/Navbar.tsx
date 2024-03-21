'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='w-full text-white mb-12 py-4 mx-auto p-6 fixed top-0 left-0 bg-[#292e3c] bg-opacity-90 z-50'>
      <div className='container mx-auto flex justify-between items-center md:max-w-[85%]'>
        {/* Conditionally render the logo based on isOpen state */}
        {!isOpen && (
          <Link href='/' className='flex items-center'>
            <Image src='/image/Vector.png' alt='Logo' width={20} height={20} />
            <div className='text-[#0065fe] text-2xl mx-1.5'>|</div>
            <span className='text-[#0065fe] text-2xl font-bold'>SCISSORS</span>
          </Link>
        )}

        <div className='block lg:hidden'>
          <button
            onClick={toggleMenu}
            className='flex items-center px-3 py-2 border rounded text-[#0065fe] border-[#0065fe] hover:text-white hover:border-white'
          >
            {/* Conditionally render hamburger or X icon based on isOpen state */}
            {isOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>

        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} lg:mt-0 mt-4`}>
          <ul className='flex flex-col lg:flex-row gap-12 text-lg'>
            <div className='flex'>
              <li className='mr-6 text-white'>
                <Link href='/' className='hover:text-[#0065fe]'>
                  My URLs
                </Link>
              </li>
              <li className='mr-6'>
                <Link href='#' className='hover:text-[#0065fe]'>
                  Features
                </Link>
              </li>
              <li className='mr-6'>
                <Link href='#' className='hover:text-[#0065fe]'>
                  Pricing
                </Link>
              </li>
              <li className='mr-6'>
                <Link href='#' className='hover:text-[#0065fe]'>
                  Analytics
                </Link>
              </li>
              <li className='mr-6'>
                <Link href='#' className='hover:text-[#0065fe]'>
                  FAQs
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div>
          {/* Login and Try for free buttons included in the nav items */}
          <ul className='flex'>
            <li className='mr-6'>
              <Link href='#' className='hover:text-[#0065fe]'>
                Login
              </Link>
            </li>
            <li>
              <Link
                href='/Url'
                className='animate-blink inline-block bg-[#0065fe] text-white hover:bg-gray-200 hover:text-blue-500  py-1.5 px-4 rounded-2xl'
              >
                Try for free
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
