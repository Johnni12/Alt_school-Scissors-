import type { Metadata } from 'next'
import './globals.css'
import NavBar from './component/Navbar'
import Footer from './component/Footer'



export const metadata: Metadata = {
  title: 'Scissor',
  description: 'A URL Shortening Application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='bg-[#292e3c] '>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
