import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="space-y-12 py-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          KNOWLEDGE <span className="text-neon-cyan">BASE</span>
        </h1>
        <p className="text-xl text-gray-400">
          Access the archives. Upgrade your understanding.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post: any) => (
          <article key={post.slug} className="group glass p-8 border border-white/10 hover:border-neon-purple/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-neon-purple/10 transition-colors"></div>

            <h2 className="text-2xl font-bold mb-4 leading-tight">
              <Link href={`/blog/${post.slug}`} className="text-white hover:text-neon-cyan transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-400 mb-6 line-clamp-2">{post.description}</p>

            <div className="flex justify-between items-end">
              <div className="flex gap-2 flex-wrap">
                {post.tags?.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-xs text-gray-300 uppercase tracking-wider border border-white/10 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="text-neon-cyan font-bold text-sm uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1"
              >
                Read <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}