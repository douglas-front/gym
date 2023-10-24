import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

// import Nav from '@/comp'

// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({subsets: ['latin'], weight: ["400"]})

export const metadata: Metadata = {
  title: 'Suplementos',
  description: 'Suplementos Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <Nav /> */}
        {children}
        </body>
    </html>
  )
}
