import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Literacy Blog',
  description: 'Learn AI concepts and tools for non-technical people',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          <div className="max-w-5xl mx-auto px-4 py-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}