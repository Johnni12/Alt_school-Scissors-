import Image from 'next/image'
import Link from 'next/link'

const Stats = () => {
  return (
    <section className='max-w-[85vw] mx-auto  mt-24'>
      <Image
        src='/image/base.png'
        width={2000}
        height={1500}
        alt='base image'
      />
      <div className='scissors-info' id='stats'>
        <div className='stats bg-opacity-75 bg-gray-500 text-gray-100'>
          <p className='stat text-4xl  font-semibold text-gray-100'>
            One Stop Four <span className='text-[#0065fe]'>Possibilities</span>
          </p>
          <div className='stat-texts flex gap-x-12'>
            <div>
              <p className='text-3xl font-semibold'>3M</p>
              <p className='text-lg'>Active users</p>
            </div>
            <div>
              <p className='text-3xl font-semibold'>60M</p>
              <p className='text-lg'>Links & QR codes created</p>
            </div>
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
