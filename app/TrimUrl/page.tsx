import React from 'react'

const TrimUrl = () => {
  return (
    <div className='container mx-auto mt-8'>
      <div className='max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg'>
        <div className='px-6 py-4'>
          <div className='mb-4'>
            <input
              className='border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500'
              type='text'
              placeholder='Paste URL here...'
            />
          </div>
          <div className='mb-4 flex items-center'>
            <input
              className='border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 mr-2'
              type='text'
              placeholder='Type Alias here...'
            />
            <select className='border border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500'>
              <option>Choose Domain</option>
            </select>
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            Trim URL <img src='./assets/magic wand.png' alt='' />
          </button>
          <div className='mt-4 text-sm text-gray-600'>
            By clicking Trim URL, I agree to the{' '}
            <a href='#' className='text-blue-500 hover:underline'>
              Terms of Service
            </a>
            ,{' '}
            <a href='#' className='text-blue-500 hover:underline'>
              Privacy Policy
            </a>
            , and{' '}
            <a href='#' className='text-blue-500 hover:underline'>
              Use of Cookies
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrimUrl
