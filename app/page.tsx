import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <section className='max-w-[70vw]   text-white  h-screen  mx-auto py-6  '>
      <div className='md:flex items-center justify-center'>
        <div>
          <h1 className='text-5xl font-semibold text-center md:leading-loose '>
            Optimize Your Online Experience with Our Advanced URL Shortening
            Solution
          </h1>
          <p className='text-center text-l py-3 px-6'>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
          <div className='flex justify-center item-center py-6 gap-12'>
            <Link
              href='#'
              className='inline-block bg-[#0065fe] text-white hover:bg-gray-200 hover:text-blue-500  py-1.5 px-10 rounded-3xl '
            >
              Sign up
            </Link>
            <Link
              href='#'
              className='inline-block text-[#0065fe] py-2 px-6   hover:text-white '
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage
