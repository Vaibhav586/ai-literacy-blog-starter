import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 glass border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-neon-cyan transition-colors">
          AI<span className="text-neon-cyan">.LITERACY</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <Link href="/blog" className="text-gray-300 hover:text-neon-cyan transition-colors">
            BLOG
          </Link>
          <Link href="/tools" className="text-gray-300 hover:text-neon-purple transition-colors">
            TOOLS
          </Link>
          <Link href="/glossary" className="text-gray-300 hover:text-neon-cyan transition-colors">
            GLOSSARY
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="text-white border border-white/20 px-4 py-1 hover:bg-white/10 hover:border-white/40 transition-all">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  )
}