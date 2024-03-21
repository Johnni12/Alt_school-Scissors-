import Image from 'next/image'
import Link from 'next/link'

const Landing = () => {
  return (
    <section className='max-w-[90%] text-white pt-[8rem] mx-auto md:pb-6  md:mt-4 md:max-w-[70%] '>
      <div className='md:flex items-center justify-center'>
        <div>
          <h1 className='text-2xl font-semibold text-center md:leading-loose md:text-5xl'>
            Optimize Your Online Experience with Our Advanced
            <span className='text-[#0065fe]'> URL Shortening </span>
            Solution
          </h1>
          <p className='text-center text-l py-3 md:px-6'>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
          <div className='flex justify-center item-center py-6 gap-6 md:gap-12'>
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
          <div className='max-w-[100%] md:max-w-[50vw] relative self-end border border-solid border-gray-300 dark:border-gray-900 rounded-3xl  md:mx-auto px-6 py-4 mt-5 bg-gradient-to-r from-gray-900 to-gray-500 flex flex-col  gap-6 '>
            <Image
              className='absolute z-[-1] top-0 left-200 hidden'
              src='/image/triangle.png'
              width={200}
              height={50}
              alt='triangular figure'
            />
            <Image
              className='z-10'
              src='/image/chain.svg'
              width={500}
              height={50}
              alt='connected chain-link image'
            />
            <p className='z-10 text-white text-center'>
              Seamlessly transform your long URLs into concise and shareable
              links with just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
