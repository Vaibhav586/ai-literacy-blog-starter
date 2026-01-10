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
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => setSelected(role.id)}
            className={`px-6 py-4 rounded-none border transition-all duration-300 ${selected === role.id
                ? 'border-neon-cyan bg-neon-cyan/20 text-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.3)]'
                : 'border-white/20 text-gray-400 hover:border-white/50 hover:text-white'
              }`}
          >
            <span className="text-2xl mr-2 filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{role.icon}</span>
            <span className="font-bold tracking-wider">{role.name.toUpperCase()}</span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="bg-white/5 border border-white/10 p-8 relative overflow-hidden backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="absolute top-0 left-0 w-1 h-full bg-neon-purple"></div>
          <h3 className="font-bold mb-4 text-white text-lg tracking-wide">
            RECOMMENDED FOR <span className="text-neon-purple">{roles.find(r => r.id === selected)?.name.toUpperCase()}</span>:
          </h3>
          <ul className="space-y-4">
            {recommendations[selected]?.map((slug) => (
              <li key={slug}>
                <Link href={`/blog/${slug}`} className="group flex items-center text-gray-300 hover:text-neon-cyan transition-colors">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="border-b border-transparent group-hover:border-neon-cyan pb-0.5">{slug.replace(/-/g, ' ').toUpperCase()}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}