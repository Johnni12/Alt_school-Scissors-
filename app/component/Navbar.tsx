'use client'
import { useState } from 'react' // Import useState hook
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false) // State to track if the menu is open

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='max-w-[80%] text-white  py-4  mx-auto p-6 '>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='flex items-center'>
          <Image src='/image/Vector.png' alt='Logo' width={20} height={20} />
          <div className='text-[#0065fe] text-2xl mx-1.5'>|</div>
          <span className='text-[#0065fe] text-2xl font-bold'>SCISSORS</span>
        </Link>

        {/* Hamburger menu icon */}
        <div className='block lg:hidden'>
          <button
            onClick={toggleMenu}
            className='flex items-center px-3 py-2 border rounded text-[#0065fe] border-[#0065fe] hover:text-white hover:border-white'
          >
            
          </button>
        </div>

        {/* Menu items */}
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className='flex gap-5'>
            <li className='mr-6 text-white'>
              <Link href='#' className='hover:text-[#0065fe]'>
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
          </ul>
        </div>

        {/* Login and Try for free buttons */}
        <div className='lg:flex'>
          <ul className='flex'>
            <li className='mr-6'>
              <Link href='#' className='hover:text-[#0065fe]'>
                Login
              </Link>
            </li>
            <li>
              <Link
                href='/Url'
                className='inline-block bg-[#0065fe] text-white hover:bg-gray-200 hover:text-blue-500  py-1.5 px-4 rounded-2xl'
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
