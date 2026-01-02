import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.metadata.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{post.metadata.description}</p>
        <div className="flex gap-2 mb-4">
          {post.metadata.tags?.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          Published: {post.metadata.publishedAt} • Difficulty: {post.metadata.difficulty}
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}