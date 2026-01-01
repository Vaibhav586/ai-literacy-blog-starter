# AI Literacy Blog - Complete Setup Guide

This guide will help you set up the complete Next.js blog with all necessary files and folders.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Vaibhav586/ai-literacy-blog-starter.git
cd ai-literacy-blog-starter

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

Create this folder structure:

```
ai-literacy-blog-starter/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── tools/
│   │   └── page.tsx
│   └── about/
│       └── page.tsx
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── post-card.tsx
│   ├── role-switcher.tsx
│   ├── tag-badge.tsx
│   └── progress-bar.tsx
├── content/
│   └── blog/
│       ├── ai-basics.mdx
│       ├── ai-for-students.mdx
│       └── ai-for-marketers.mdx
├── lib/
│   ├── posts.ts
│   └── roles.ts
├── public/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## Configuration Files

### 1. `next.config.js`

```javascript
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
}

module.exports = withMDX(nextConfig)
```

### 2. `tailwind.config.ts`

```typescript
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
```

### 3. `tsconfig.json`

```json
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
```

### 4. `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Core Files

### 1. `app/globals.css`

```css
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
```

### 2. `app/layout.tsx`

```typescript
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
```

### 3. `app/page.tsx` (Home Page)

```typescript
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
```

### 4. `components/navbar.tsx`

```typescript
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
```

### 5. `components/footer.tsx`

```typescript
export default function Footer() {
  return (
    <footer className="border-t mt-12">

## Continue with Part 2

Due to file size, see additional files:
- Create `SETUP-PART2.md` for blog pages, components, and MDX posts
- Create `SETUP-PART3.md` for lib utilities and sample content

## Quick Component Examples

### `components/role-switcher.tsx`

```typescript
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
```

### `lib/posts.ts`

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        ...data,
      }
    })

  return allPostsData.sort((a: any, b: any) => {
    if (a.publishedAt < b.publishedAt) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    metadata: data,
    content,
  }
}
```

## Sample MDX Blog Post

Create `content/blog/ai-basics.mdx`:

```mdx
---
title: "AI Basics for Non-Technical People"
slug: "ai-basics"
description: "Understand what AI really is, in plain language, with examples from daily life."
tags: ["Basics", "Non-technical"]
difficulty: "Intro"
roles: ["Student", "Marketer", "HR", "Founder"]
publishedAt: "2026-01-01"
---

## What you will learn

- What people mean by AI, ML, and deep learning
- Where AI shows up in your daily life
- What AI is good at and where it fails

## What is AI in simple words?

Artificial Intelligence (AI) refers to computer systems that can perform tasks that typically require human intelligence. Think of it as teaching computers to recognize patterns, make decisions, and learn from experience.

When you ask Siri a question, unlock your phone with your face, or get product recommendations on Amazon, you're interacting with AI.

## AI, machine learning, and deep learning

These terms often get mixed up:

- **AI** is the big umbrella—any system that mimics human intelligence
- **Machine Learning (ML)** is a type of AI where systems learn from data instead of being explicitly programmed
- **Deep Learning** is a subset of ML that uses neural networks (inspired by the human brain) to process complex patterns

## AI in your daily life

You probably use AI multiple times every day:

- **Email:** Gmail's spam filter uses AI to block unwanted emails
- **Shopping:** Amazon and Flipkart recommend products based on your browsing history
- **Social Media:** Instagram and Facebook use AI to show you posts you'll likely engage with
- **Navigation:** Google Maps predicts traffic and suggests the fastest route
- **Entertainment:** Netflix recommends shows based on what you've watched

## What AI can and cannot do

### AI is good at:
- Recognizing patterns in large amounts of data
- Automating repetitive tasks
- Making predictions based on historical data
- Processing and understanding language (to a degree)

### AI struggles with:
- Common sense reasoning
- Understanding context outside its training data
- Creativity that requires true originality
- Tasks requiring empathy and emotional intelligence

## Try it now

1. Open any AI assistant you like (ChatGPT, Gemini, Claude, etc.)
2. Paste this prompt:
   > "Explain AI to me as if I am 12 years old, using only examples from shopping and social media."
3. Compare the answer with what you just read.

## Key Takeaways

- AI is everywhere in your daily digital life
- It's great at patterns and predictions, weak at common sense
- You don't need to code to use AI tools effectively
- Understanding AI basics helps you use it responsibly
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel auto-detects Next.js—click "Deploy"

Your blog will be live in minutes!

## Next Steps

1. Clone this repo locally
2. Run `npm install`
3. Create the folder structure shown above
4. Copy-paste the code examples into their respective files
5. Add your own MDX blog posts in `content/blog/`
6. Customize styles in `globals.css` and components
7. Deploy to Vercel

## Need Help?

Check the Next.js docs:
- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Happy building! 🚀**
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-600">
        <p>© 2026 AI Literacy Blog. Built with Next.js and MDX.</p>
      </div>
    </footer>
  )
}
```

Continued in next comment due to length...
