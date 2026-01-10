import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ChatWidget from '@/components/ChatWidget'

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
        <main className="min-h-screen relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-neon-cyan/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

          <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
            {children}
          </div>
        </main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  )
}