import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TKI BASECAMP',
  description: 'TKI BASECAMP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <main className='max-w-4xl min-h-screen px-4 m-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
