import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Belgium Oil Solutions',
  description: 'Belgium Oil Solutions (BOS) - Complete Supply Chain Solution provider integrating each separate link in the chain.',
  icons: {
    icon: '/images/header_logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="font-sans bg-white text-[#3a3a3a] antialiased selection:bg-[#ed1c24] selection:text-white">
        {children}
      </body>
    </html>
  )
}
