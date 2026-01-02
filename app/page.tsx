import Link from 'next/link'
import RoleSwitcher from '@/components/role-switcher'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-5xl font-bold">
          AI for Non-Technical People
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn AI concepts, discover practical tools, and grow your career—no coding required.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog/ai-basics"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Start with the Basics
          </Link>
          <Link
            href="/tools"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
          >
            See AI Tools
          </Link>
        </div>
      </section>

      {/* Role Switcher */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6">
          Choose Your Path
        </h2>
        <RoleSwitcher />
      </section>

      {/* Quick Links */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Understand AI</h3>
          <p className="text-gray-600 mb-4">
            Learn what AI is, how it works, and where it's used in simple language.
          </p>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Read articles →
          </Link>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Use AI in Your Job</h3>
          <p className="text-gray-600 mb-4">
            Discover how AI can help with productivity, creativity, and decision-making.
          </p>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Explore use cases →
          </Link>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Pick the Right Tools</h3>
          <p className="text-gray-600 mb-4">
            Find AI tools organized by use case with step-by-step guides.
          </p>
          <Link href="/tools" className="text-blue-600 hover:underline">
            Browse tools →
          </Link>
        </div>
      </section>
    </div>
  )
}