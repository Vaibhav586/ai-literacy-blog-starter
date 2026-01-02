import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">AI Literacy Blog</h1>
        <p className="text-xl text-gray-600">
          Learn AI concepts and tools for non-technical people
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post: any) => (
          <article key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex gap-2 mb-4">
              {post.tags?.map((tag: string) => (
                <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}