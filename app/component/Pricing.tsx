import React from 'react'

const Pricing = () => {
  return (
    <section className='pricing' id='pricing'>
      <div className=' grid-cols-auto-1fr grid grid-cols-auto-1fr gap-x-4 gap-y-2'>
        <img
          src='/assets/line-gradient-a0feebaa.svg'
          alt='horizontal grey line gradient'
        />
        <p className='price-intro font-bold text-4xl'>
          A <span>price perfect</span> for your needs.
        </p>
        <p>
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>
      <div className='price-block flex justify-center items-center'>
        <div className='basic box'>
          <p className='price-title'>Basic</p>
          <div>
            <h2 className='price'>Free</h2>
            <ul>
              <p className='price-subtitle'>Free plan for all users</p>
              <li className='flex items-center gap-x-1'>
                <img
                  src='/assets/icon-check-circle-blue-43634f16.svg'
                  alt='tick icon'
                  className='w-5 h-5'
                />
                <p>Unlimited URL Shortening</p>
              </li>
              {/* Add other list items */}
            </ul>
          </div>
        </div>
        {/* Add other price boxes */}
      </div>
      <div className='price-btn flex gap-4'>
        <button className='white-btn button'>Get Custom Pricing</button>
        <button className='button'>Select Pricing</button>
      </div>
    </section>
  )
}

export default Pricing
