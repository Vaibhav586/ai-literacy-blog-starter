// Utility functions for loading MDX posts
// This is a placeholder - you can expand this later

export interface Post {
  slug: string
  title: string
  description: string
  tags: string[]
  difficulty: string
  roles: string[]
  publishedAt: string
}

// Placeholder function - expand when you add real MDX files
export function getAllPosts(): Post[] {
  return [
    {
      slug: 'ai-basics',
      title: 'AI Basics for Non-Technical People',
      description: 'Understand what AI really is, in plain language',
      tags: ['Basics', 'Non-technical'],
      difficulty: 'Intro',
      roles: ['Student', 'Marketer', 'HR', 'Founder'],
      publishedAt: '2026-01-01'
    }
  ]
}
