import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToDo List App',
  description: 'Created by Raul Armas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="winter" lang="en">
      <body className={
        `${inter.className}
        flex
        flex-col
        h-screen
      `}>
        <Header />
        {children}
      </body>
    </html>
  )
}
