import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='relative'>
      <div className='flex justify-center gap-12 mt-24 text-white'>
        <div className='flex flex-col gap-8'>
          <h1 className='font-semibold'>SCISSORS</h1>

          <div className='flex items-center gap-6'>
            <Link href=''>
              <Image
                src='/image/x.png'
                alt='X icon'
                width={30}
                height={30}
                className='bg-white '
              />
            </Link>
            <Link href=''>
              <Image
                src='/image/ig.png'
                alt='instagram icon'
                width={30}
                height={30}
                className='bg-white '
              />
            </Link>
            <Link href=''>
              <Image
                src='/image/linkedin.png'
                alt='linkedin icon'
                width={30}
                height={30}
                className='bg-white '
              />
            </Link>
            <Link href=''>
              <Image
                src='/image/fb.svg'
                alt='facebook icon'
                width={30}
                height={30}
                className='bg-white '
              />
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-10'>
          <ul className='list-none'>
            <li className='text-lg font-semibold py-2'>Scissor 101</li>
            <li>Integrations & API</li>
            <li>Pricing</li>
          </ul>
          <ul className='list-none'>
            <li className='text-lg font-semibold py-2'>Social Media</li>
            <li>Digital Marketing</li>
            <li>Customer Service</li>
            <li>For Developers</li>
          </ul>
          <ul className='list-none'>
            <li className='text-lg font-semibold py-2'>Link Management</li>
            <li>QR Codes</li>
            <li>Link-in-bio</li>
          </ul>
          <ul className='list-none'>
            <li className='text-lg font-semibold py-2'>About Scissor</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Press</li>
            <li>Contact</li>
            <li>Reviews</li>
          </ul>
          <ul className='list-none'>
            <li className='text-lg font-semibold py-2'>Blog</li>
            <li>Resource Library</li>
            <li>Developers</li>
            <li>App Connectors</li>
            <li>Support</li>
            <li>Trust Center</li>
            <li>Browser Extension</li>
            <li>Mobile App</li>
          </ul>
          <ul className='list-none'>
            <li className='text-lg font-semibold py-2'>Branded Links</li>
            <li>Mobile Links</li>
            <li>Campaign Management & Analytics</li>
            <li>QR Code generation</li>
          </ul>
          <ul className='list-none'>
            <li className='text-lg font-semibold py-2'>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms of Service</li>
            <li>Acceptable Use Policy</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
      </div>
      <aside className='text-white flex justify-end gap-4 pb-16 px-4'>
        <Link href='#'>
          <p>Terms of Service</p>
        </Link>
        <Image
          src='/image/line.png'
          alt='horizontal line vector'
          width={2}
          height={2}
        />
        <Link href='#'>
          <p>Security</p>
        </Link>
        <Image
          src='/image/line.png'
          alt='horizontal line vector'
          width={2}
          height={2}
        />
        <Link href='#'>
          <p>Scissor 2023</p>
        </Link>
      </aside>
      <Image
        className='absolute left-0 bottom-0'
        src='/image/fleft.svg'
        alt='abstract'
        width={700}
        height={600}
      />
      <Image
        className='absolute right-0 bottom-0 h-4/5'
        src='/image/fright.svg'
        alt='abstract'
        width={700}
        height={700}
      />
    </footer>
  )
}

export default Footer
