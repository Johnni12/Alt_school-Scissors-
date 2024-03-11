import Image from 'next/image'

const Features = () => {
  return (
    <div className='justify-content py-12 max-w-[80%]  md:flex text-white mx-auto gap-6 '>
      <div className='max-w-[50%]'>
        <p className='why-text font-bold  '>
          <span className='pr-4'>
            <Image
              src='/image/line.png'
              alt='horizontal grey line gradient'
              width={5}
              height={5}
              className='inline-block '
            />
          </span>
          Why choose <span className='text-[#0065fe]'>Scissors</span>
        </p>
        <p>
          Scissors is the hub of everything that has to do with your link
          management. We shorten your URLs, allow you to create custom ones for
          your personal, business, event usage. Our swift QR code creation,
          management, and usage tracking with advanced analytics for all of
          these is second to none.
        </p>
      </div>

      <div className='info-blocks grid grid-cols-1fr-1fr gap-x-8 gap-y-8 w-96'>
        <div className='info-block flex flex-col flex-start'>
          <Image
            src='/image/icon1.png'
            alt='link icon'
            width={50}
            height={50}
            className='pb-5'
          />
          <div>
            <p className='font-semibold text-3xl'>URL Shortening</p>
            <p>
              Scissors allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>
        </div>
        <div className='info-block flex flex-col flex-start'>
          <Image
            src='/image/icon2.png'
            alt='link icon'
            width={50}
            height={50}
            className='pb-5'
          />
          <div>
            <p className='font-semibold text-3xl'>Custom URLs</p>
            <p>
              With Scissors, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </div>
        </div>
        <div className='info-block flex flex-col  flex-start'>
          <Image
            src='/image/icon3.png'
            alt='link icon'
            width={50}
            height={50}
            className='pb-5'
          />
          <div>
            <p className='font-semibold text-3xl'>QR Codes</p>
            <p>
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </p>
          </div>
        </div>
        <div className='info-block flex flex-col flex-start'>
          <Image
            src='/image/icon4.png'
            alt='link icon'
            width={50}
            height={50}
            className='pb-5'
          />
          <div>
            <p className='font-semibold text-3xl'>Data Analytics</p>
            <p>
              Receive data on the usage of either your shortened URL, custom
              URLs, or generated QR codes. Embedded to monitor progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
