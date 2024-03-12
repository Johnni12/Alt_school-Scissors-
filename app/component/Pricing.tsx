import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Pricing = () => {
  return (
    <section className='py-16 bg-[#1f2128] max-w-[92%]  m-auto text-white'>
      <h2 className='text-center text-4xl font-bold mb-10'>
        A <span className='text-blue-500'>price perfect</span> for your needs.
      </h2>
      <p className='text-center mb-8'>
        From catering for your personal, business, event, socials needs, you can
        be <br /> rest assured we have you in mind in our pricing.
      </p>
      <div className='flex items-center justify-center px-12 m-auto py-12 max-w-[80%] cursor-pointer'>
        <div className='border border-blue-500 px-12 py-16 rounded-xl hover:border-2 hover:border-blue-200'>
          <div className='flex flex-col'>
            <h1 className='text-3xl my-2'>Basic</h1>
            <p className='text-2xl font-semibold py-2'>Free</p>
            <p>Free plan for all users</p>
          </div>
          <ul className='item-list list-disc pb-4 mt-4'>
            <li className='flex items-center'>
              <Image
                src='/image/blue-check.png'
                alt=''
                width={20}
                height={20}
                className='mr-4'
              />
              Unlimited URL Shortening
            </li>
            <li className='flex items-center mb-2'>
              <Image
                src='/image/blue-check.png'
                alt=''
                width={20}
                height={20}
                className='mr-4'
              />
              Basic Link Analytics
            </li>
            <li className='flex items-center mb-2'>
              <Image
                src='/image/blue-check.png'
                alt=''
                width={20}
                height={20}
                className='mr-4'
              />
              Customizable Short Links
            </li>
            <li className='flex items-center mb-2'>
              <Image
                src='/image/blue-check.png'
                alt=''
                width={20}
                height={20}
                className='mr-4'
              />
              Standard Support
            </li>
            <li className='flex items-center'>
              <Image
                src='/image/blue-check.png'
                alt=''
                width={20}
                height={20}
                className='mr-4'
              />
              Ad-supported
            </li>
          </ul>
        </div>
        <div className='bg-[#1e3448] border border-blue-500 hover:border-2 hover:border-blue-200 px-12 py-[6rem] rounded-xl '>
          <div className='flex flex-col'>
            <h1 className='text-3xl my-2'>Professional</h1>
            <p className='text-2xl font-semibold py-2'>$15/month</p>
            <p>Ideal for business creators</p>
          </div>
          <ul className='item-list list-disc pb-4 mt-4'>
            <li className='flex items-center '>
              <Image
                src='/image/check-circle.png'
                alt=''
                width={20}
                height={20}
                className='mr-4'
              />
              Unlimited URL Shortening
            </li>
            <li className='flex items-center mb-2'>
              <Image
                src='/image/check-circle.png'
                alt=''
                width={20}
                height={20}
                className='mr-4'
              />
              Enhanced Link Analytics
            </li>
            <li className='flex items-center mb-2'>
              <Image
                src='/image/check-circle.png'
                alt=''
                width={20}
                height={20}
                className='mr-4'
              />
              Advanced Link Customization
            </li>
            <li className='flex items-center mb-2'>
              <Image
                src='/image/check-circle.png'
                alt=''
                width={20}
                height={20}
                className='mr-4'
              />
              Priority Support
            </li>
            <li className='flex items-center'>
              <Image
                src='/image/check-circle.png'
                alt=''
                width={20}
                height={20}
                className='mr-4'
              />
              Ad-free Experience
            </li>
          </ul>
        </div>
        <div>
          <div className='border border-blue-500 px-12 py-16 rounded-xl hover:border-2 hover:border-blue-200'>
            <div className='flex flex-col'>
              <h1 className='text-3xl my-2'>Teams</h1>
              <p className='text-2xl font-semibold py-2'>$25/month</p>
              <p>Share with up to 10 users</p>
            </div>
            <ul className='item-list list-disc pb-4 mt-4'>
              <li className='flex items-center'>
                <Image
                  src='/image/blue-check.png'
                  alt=''
                  width={20}
                  height={20}
                  className='mr-4'
                />
                Team Collaboration
              </li>
              <li className='flex items-center mb-2'>
                <Image
                  src='/image/blue-check.png'
                  alt=''
                  width={20}
                  height={20}
                  className='mr-4'
                />
                User Roles and Permissions
              </li>
              <li className='flex items-center mb-2'>
                <Image
                  src='/image/blue-check.png'
                  alt=''
                  width={20}
                  height={20}
                  className='mr-4'
                />
                Enhanced Security
              </li>
              <li className='flex items-center mb-2'>
                <Image
                  src='/image/blue-check.png'
                  alt=''
                  width={20}
                  height={20}
                  className='mr-4'
                />
                API Access
              </li>
              <li className='flex items-center'>
                <Image
                  src='/image/blue-check.png'
                  alt=''
                  width={20}
                  height={20}
                  className='mr-4'
                />
                Dedicated Account Manager
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center item-center py-6 gap-6 md:gap-12'>
        <Link
          href='#'
          className='inline-block border border-blue-500 text-white hover:bg-gray-200 hover:text-blue-500  py-3 px-8 rounded-3xl '
        >
          Get Custom Pricing
        </Link>
        <Link
          href='#'
          className='inline-block bg-[#0065fe] text-white py-3 px-8 rounded-3xl  hover:text-[#0065fe] hover:bg-white hover:border-blue-500 '
        >
          Select Pricing
        </Link>
      </div>
    </section>
  )
}

export default Pricing
