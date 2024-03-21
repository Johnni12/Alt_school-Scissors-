import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FooterColumnProps {
  title: string
  links: string[]
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <ul className='list-none'>
    <li className='text-lg font-semibold py-2'>{title}</li>
    {links.map((link, index) => (
      <li key={index}>{link}</li>
    ))}
  </ul>
)

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href}>
    {children}
  </Link>
)

const FooterSeparator: React.FC = () => (
  <Image
    src='/image/line.png'
    alt='horizontal line vector'
    width={2}
    height={2}
  />
)

const Footer = () => {
  return (
    <footer className='relative text-white py-12 px-4 sm:px-8 lg:px-16 xl:px-24'>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-between gap-12 mt-8'>
        <div className='flex flex-col items-center sm:items-start gap-8'>
          <h1 className='font-semibold'>SCISSORS</h1>
          <div className='flex gap-6'>
            <FooterLink href=''>
              <Image
                src='/image/x.png'
                alt='X icon'
                width={30}
                height={30}
                className='bg-white'
              />
            </FooterLink>
            <FooterLink href=''>
              <Image
                src='/image/ig.png'
                alt='instagram icon'
                width={30}
                height={30}
                className='bg-white'
              />
            </FooterLink>
            <FooterLink href=''>
              <Image
                src='/image/linkedin.png'
                alt='linkedin icon'
                width={30}
                height={30}
                className='bg-white'
              />
            </FooterLink>
            <FooterLink href=''>
              <Image
                src='/image/fb.svg'
                alt='facebook icon'
                width={30}
                height={30}
                className='bg-white'
              />
            </FooterLink>
          </div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 sm:gap-12'>
          <FooterColumn
            title='Scissor 101'
            links={['Integrations & API', 'Pricing']}
          />
          <FooterColumn
            title='Social Media'
            links={['Digital Marketing', 'Customer Service', 'For Developers']}
          />
          <FooterColumn
            title='Link Management'
            links={['QR Codes', 'Link-in-bio']}
          />
          <FooterColumn
            title='About Scissor'
            links={['Careers', 'Partners', 'Press', 'Contact', 'Reviews']}
          />
          <FooterColumn
            title='Blog'
            links={[
              'Resource Library',
              'Developers',
              'App Connectors',
              'Support',
              'Trust Center',
              'Browser Extension',
              'Mobile App',
            ]}
          />
          <FooterColumn
            title='Branded Links'
            links={[
              'Mobile Links',
              'Campaign Management & Analytics',
              'QR Code generation',
            ]}
          />
          <FooterColumn
            title='Legal'
            links={[
              'Privacy Policy',
              'Cookie Policy',
              'Terms of Service',
              'Acceptable Use Policy',
              'Code of Conduct',
            ]}
          />
        </div>
      </div>

      <aside className='flex justify-end gap-4 mt-8'>
        <FooterLink href='#'>Terms of Service</FooterLink>
        <FooterSeparator />
        <FooterLink href='#'>Security</FooterLink>
        <FooterSeparator />
        <FooterLink href='#'>Scissor 2023</FooterLink>
      </aside>

      <Image
        className='absolute left-0 bottom-0 hidden sm:block'
        src='/image/fleft.svg'
        alt='abstract'
        width={700}
        height={600}
      />
      <Image
        className='absolute right-0 bottom-0 hidden sm:block h-4/5'
        src='/image/fright.svg'
        alt='abstract'
        width={700}
        height={700}
      />
    </footer>
  )
}

export default Footer
