import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sambhav Das ',
  description: 'portfolio maintained by perceptron10100',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <h1 className=' bg-black p-4 mt-2 text-white text-sm'>Created and maintained by perceptron10100</h1>
    </html>
  )
}
