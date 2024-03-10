import Image from 'next/image'
import Link from 'next/link'

const Stats = () => {
  return (
    <section className='md:max-w-[85vw] mx-auto mt-12 md:mt-24 '>
      <Image
        src='/image/base.png'
        width={2000}
        height={1500}
        alt='base image'
      />

      <div className='md:flex text-center  justify-center md:py-12 bg-opacity-75 bg-gray-500 text-gray-100'>
        <p className='text-2xl py-4 md:text-4xl text-center md:px-4 font-semibold text-gray-100'>
          One Stop Four <span className='text-[#0065fe]'>Possibilities</span>
        </p>
        <div className='text-4xl  md:gap-x-12 '>
          <div className='flex'>
            <div>
              <p className='text-3xl font-semibold'>3M</p>
              <p className=' text-lg'>Active users</p>
            </div>
            <div>
              <p className=' text-3xl font-semibold'>60M</p>
              <p className='text-lg'>Links & QR codes created</p>
            </div>
          </div>
          <div className='flex '>
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
