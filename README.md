# AI Literacy Blog Starter 🚀

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![MDX](https://img.shields.io/badge/MDX-3.0-orange)](https://mdxjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern, production-ready Next.js blog starter designed specifically for creating AI literacy content for non-technical audiences. Features MDX-powered blog posts, interactive UI components, role-based content filtering, and a curated AI tools directory.

## ✨ Features

- ✅ **Next.js 14** with App Router and TypeScript
- ✅ **MDX Support** for rich, interactive blog posts
- ✅ **Tailwind CSS** for beautiful, responsive design
- ✅ **Role-Based Content** filtering (Student, Marketer, HR, Founder)
- ✅ **Interactive Components** (progress bars, role switchers, tag filters)
- ✅ **AI Tools Directory** with categorized recommendations
- ✅ **Reading Time** estimation and metadata
- ✅ **SEO Optimized** with Next.js metadata API
- ✅ **Vercel-Ready** for instant deployment

## 🎯 Perfect For

- **Educators** teaching AI concepts to non-technical students
- **Content Creators** building AI literacy platforms
- **Startups** creating AI educational resources
- **Developers** needing a blog starter for technical education

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Vaibhav586/ai-literacy-blog-starter.git
cd ai-literacy-blog-starter

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog!

## 📚 Full Setup Guide

**For complete setup instructions, code examples, and file structures, see [SETUP.md](./SETUP.md).**

The SETUP guide includes:
- Complete project structure
- All configuration files (next.config.js, tailwind.config.ts, etc.)
- Core component code (Navbar, Footer, RoleSwitcher, etc.)
- Sample MDX blog posts
- Deployment instructions

## 📁 Project Structure

```
ai-literacy-blog-starter/
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout with navbar/footer
│   ├── page.tsx         # Homepage with hero and role switcher
│   ├── blog/            # Blog listing and individual posts
│   ├── tools/           # AI tools directory
│   └── about/           # About page
├── components/          # Reusable React components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── role-switcher.tsx
│   └── ...more
├── content/
│   └── blog/            # MDX blog posts
│       ├── ai-basics.mdx
│       ├── ai-for-students.mdx
│       └── ...more
├── lib/                 # Utility functions
│   ├── posts.ts         # MDX post loading
│   └── roles.ts         # Role-based recommendations
└── public/              # Static assets
```

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX (Markdown + JSX)
- **Metadata:** gray-matter
- **Deployment:** Vercel (recommended)

## 📝 Content Guidelines

This starter is optimized for AI literacy content:

1. **Plain Language**: Explain AI concepts without jargon
2. **Real Examples**: Use daily-life scenarios (email, shopping, social media)
3. **Role-Based**: Tag content for specific audiences
4. **Interactive**: Use MDX to embed demos and quizzes
5. **Actionable**: Include "Try it now" sections with prompts

## 🛠️ Customization

### Adding a New Blog Post

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
slug: "your-post-slug"
description: "A short description"
tags: ["Basics", "Career"]
difficulty: "Intro"
roles: ["Student", "Marketer"]
publishedAt: "2026-01-01"
---

## Your Content Here

Write your content in Markdown with React components!
```

### Changing Colors

Edit `tailwind.config.ts` to customize the theme.

### Adding New Roles

Update `components/role-switcher.tsx` and `lib/roles.ts`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project" and select your repo
4. Vercel auto-detects Next.js—click "Deploy"

Your blog will be live in minutes with automatic HTTPS and CDN!

### Other Platforms

This starter works on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share your blog built with this starter

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🌟 Acknowledgments

Built with inspiration from:
- AI education best practices
- Modern web development standards
- Community feedback from educators and developers

---

**Built with ❤️ by [Vaibhav586](https://github.com/Vaibhav586)**

If this starter helped you, consider giving it a ⭐!
