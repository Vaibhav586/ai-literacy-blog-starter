'use client'
import { useState } from 'react'
import Link from 'next/link'

const roles = [
  { id: 'student', name: 'Student', icon: '🎓' },
  { id: 'marketer', name: 'Marketer', icon: '📈' },
  { id: 'hr', name: 'HR', icon: '👥' },
  { id: 'founder', name: 'Founder', icon: '💼' },
]

const recommendations: Record<string, { title: string; slug: string }[]> = {
  student: [
    { title: 'AI Basics for Non-Technical People', slug: 'ai-basics' },
    { title: 'AI Tools for Students', slug: 'ai-for-students' },
  ],
  marketer: [
    { title: 'AI Basics for Non-Technical People', slug: 'ai-basics' },
    { title: 'AI for Marketers', slug: 'ai-for-marketers' },
  ],
  hr: [
    { title: 'AI Basics for Non-Technical People', slug: 'ai-basics' },
  ],
  founder: [
    { title: 'AI Basics for Non-Technical People', slug: 'ai-basics' },
  ],
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
          <h3 className="font-bold mb-3">
            Recommended for {roles.find(r => r.id === selected)?.name}:
          </h3>
          <ul className="space-y-2">
            {recommendations[selected]?.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                  {post.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
