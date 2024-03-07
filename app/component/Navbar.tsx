import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='max-w-[1200px] text-white  py-4  mx-auto p-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='flex items-center'>
          <Image src='/image/Vector.png' alt='Logo' width={20} height={20} />
          <div className='text-[#0065fe] text-2xl mx-1.5'>|</div>
          <span className='text-[#0065fe] text-2xl font-bold'>SCISSORS</span>
        </Link>
        <div>
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

        <div>
          <ul className='flex'>
            <li className='mr-6'>
              <Link href='#' className='hover:text-[#0065fe]'>
                Login
              </Link>
            </li>
            <ul>
              <li>
                <Link
                  href='#'
                  className='inline-block bg-[#0065fe] text-white hover:bg-gray-200 hover:text-blue-500  py-1.5 px-4 rounded-2xl'
                >
                  Try for free
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
