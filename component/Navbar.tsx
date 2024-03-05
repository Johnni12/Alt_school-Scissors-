// Navbar.js
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='max-width[1250px] mx-auto p-6'>
      <nav className='bg-gray-900 text-white py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center'>
            <Image src='/logo.png' alt='Logo' width={50} height={50} />
            <span className='text-lg font-bold'>Your Logo</span>
          </div>
          <div>
            <ul className='flex'>
              <li className='mr-6'>
                <Link href='#' className='hover:text-gray-300'>
                  Link 1
                </Link>
              </li>
              <li className='mr-6'>
                <Link href='#' className='hover:text-gray-300'>
                  Link 2
                </Link>
              </li>
              <li className='mr-6'>
                <Link href='#' className='hover:text-gray-300'>
                  Link 3
                </Link>
              </li>
              <li className='mr-6'>
                <Link href='#' className='hover:text-gray-300'>
                  Link 4
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className='flex'>
              <li className='mr-6'>
                <Link href='#' className='hover:text-gray-300'>
                  Link
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-gray-300'>
                  link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
