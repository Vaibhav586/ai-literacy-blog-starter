import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          AI Literacy
        </Link>
        <div className="flex gap-6">
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/tools" className="hover:text-blue-600">
            Tools
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
