import './globals.css'
import NavBar from '@/component/Navbar'
import Footer from '@/component/Footer'

export const metadata = {
  title: 'Car Hub',
  description: "Discover world's best car showcase application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-[#292e3c] '>
        <div >
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
