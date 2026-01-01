#!/bin/bash

echo "🚀 Setting up AI Literacy Blog Starter..."

# Create directory structure
echo "📁 Creating folder structure..."
mkdir -p app/blog/\[slug\]
mkdir -p app/tools
mkdir -p app/about
mkdir -p components
mkdir -p content/blog
mkdir -p lib
mkdir -p public

# Create tailwind.config.ts
echo "⚙️  Creating tailwind.config.ts..."
cat > tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
EOF

# Create tsconfig.json
echo "⚙️  Creating tsconfig.json..."
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# Create postcss.config.js
echo "⚙️  Creating postcss.config.js..."
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Create app/globals.css
echo "🎨 Creating app/globals.css..."
cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

.prose {
  @apply max-w-none;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.prose p {
  @apply my-4 leading-7;
}
EOF

# Create app/layout.tsx
echo "📄 Creating app/layout.tsx..."
cat > app/layout.tsx << 'EOF'
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
EOF

# Create app/page.tsx
echo "📄 Creating app/page.tsx..."
cat > app/page.tsx << 'EOF'
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
EOF

# Create components/navbar.tsx
echo "🧩 Creating components/navbar.tsx..."
cat > components/navbar.tsx << 'EOF'
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
EOF

# Create components/footer.tsx
echo "🧩 Creating components/footer.tsx..."
cat > components/footer.tsx << 'EOF'
export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-600">
        <p>© 2026 AI Literacy Blog. Built with Next.js and MDX.</p>
      </div>
    </footer>
  )
}
EOF

# Create components/role-switcher.tsx
echo "🧩 Creating components/role-switcher.tsx..."
cat > components/role-switcher.tsx << 'EOF'
'use client'
import { useState } from 'react'
import Link from 'next/link'

const roles = [
  { id: 'student', name: 'Student', icon: '🎓' },
  { id: 'marketer', name: 'Marketer', icon: '📈' },
  { id: 'hr', name: 'HR', icon: '👥' },
  { id: 'founder', name: 'Founder', icon: '💼' },
]

const recommendations: Record<string, string[]> = {
  student: ['ai-basics', 'ai-for-students'],
  marketer: ['ai-basics', 'ai-for-marketers'],
  hr: ['ai-basics'],
  founder: ['ai-basics'],
}

export default function RoleSwitcher() {
  const [selected, setSelected] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-center">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => setSelected(role.id)}
            className={`px-6 py-3 rounded-lg border-2 transition ${
              selected === role.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-300 hover:border-blue-400'
            }`}
          >
            <span className="text-2xl mr-2">{role.icon}</span>
            {role.name}
          </button>
        ))}
      </div>
      {selected && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-bold mb-3">Recommended for {roles.find(r => r.id === selected)?.name}:</h3>
          <ul className="space-y-2">
            {recommendations[selected]?.map((slug) => (
              <li key={slug}>
                <Link href={`/blog/${slug}`} className="text-blue-600 hover:underline">
                  {slug.replace(/-/g, ' ').toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
EOF

# Create app/blog/page.tsx
echo "📄 Creating app/blog/page.tsx..."
cat > app/blog/page.tsx << 'EOF'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">AI Literacy Blog</h1>
      <p className="text-xl text-gray-600">
        Learn AI concepts explained in plain language for non-technical people.
      </p>
      
      <div className="grid gap-6">
        <div className="border rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">AI Basics for Non-Technical People</h2>
          <p className="text-gray-600 mb-4">
            Understand what AI really is, in plain language, with examples from daily life.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Basics</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Intro</span>
          </div>
          <Link href="/blog/ai-basics" className="text-blue-600 hover:underline">
            Read more →
          </Link>
        </div>
      </div>
    </div>
  )
}
EOF

# Create app/blog/[slug]/page.tsx
echo "📄 Creating app/blog/[slug]/page.tsx..."
cat > "app/blog/[slug]/page.tsx" << 'EOF'
export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <article className="prose prose-lg max-w-none">
      <h1>Blog Post: {params.slug}</h1>
      <p>
        This is a placeholder for the blog post. 
        To add real content, create MDX files in the content/blog/ directory 
        and use the lib/posts.ts utility to load them.
      </p>
      <p>Check SETUP.md for complete implementation details.</p>
    </article>
  )
}
EOF

# Create app/tools/page.tsx
echo "📄 Creating app/tools/page.tsx..."
cat > app/tools/page.tsx << 'EOF'
export default function ToolsPage() {
  const tools = [
    {
      category: 'Productivity & Office Work',
      items: [
        { name: 'ChatGPT', description: 'AI assistant for writing, brainstorming, and problem-solving' },
        { name: 'Notion AI', description: 'AI-powered note-taking and document collaboration' },
        { name: 'Grammarly', description: 'AI writing assistant for grammar and style' },
      ]
    },
    {
      category: 'Content Creation',
      items: [
        { name: 'Jasper', description: 'AI content generator for marketing copy' },
        { name: 'Midjourney', description: 'AI image generation from text prompts' },
        { name: 'RunwayML', description: 'AI video editing and generation tools' },
      ]
    },
    {
      category: 'Learning &
