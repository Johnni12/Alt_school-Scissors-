import Image from 'next/image'
import Link from 'next/link'

const Stats = () => {
  return (
    <section className='md:max-w-[85vw] mx-auto pb-12 mt-12 md:mt-24 '>
      <Image
        src='/image/base.png'
        width={2000}
        height={1500}
        alt='base image'
      />

      <div className=' md:flex  gap-12 md:px-8 py-12 justify-center bg-opacity-75 bg-gray-500 text-gray-100'>
        <p className='text-center text-2xl md:text-4xl font-semibold text-gray-100 '>
          One Stop Four <span className='text-[#0065fe]'>Possibilities</span>
        </p>
        <div className=' justify-center flex   '>
          <div className='md:flex md:gap-6 md:py-0 '>
            <div className='pb-6'>
              <p className=' text-3xl font-semibold'>3M</p>
              <p className='text-lg'>Active users</p>
            </div>
            <div>
              <p className=' text-3xl font-semibold'>60M</p>
              <p className='text-lg'>Links & QR codes created</p>
            </div>
          </div>
          <div className='md:flex md:gap-6 md:py-0 '>
            <div>
              <p className='text-3xl font-semibold'>1B</p>
              <p className='text-lg'>Clicked and scanned connection</p>
            </div>
            <div>
              <p className='text-3xl font-semibold'>300K</p>
              <p className='text-lg'>App integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
