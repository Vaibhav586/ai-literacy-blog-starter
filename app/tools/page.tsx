export default function ToolsPage() {
  const tools = [
    {
      name: "ChatGPT",
      category: "Writing & Communication",
      description: "AI assistant for writing, brainstorming, and answering questions",
      url: "https://chat.openai.com",
      difficulty: "Beginner",
      color: "neon-cyan"
    },
    {
      name: "Canva AI",
      category: "Design",
      description: "AI-powered design tools for creating graphics and presentations",
      url: "https://canva.com",
      difficulty: "Beginner",
      color: "neon-purple"
    },
    {
      name: "Grammarly",
      category: "Writing & Communication",
      description: "AI writing assistant for grammar, tone, and clarity",
      url: "https://grammarly.com",
      difficulty: "Beginner",
      color: "neon-cyan"
    },
    {
      name: "Notion AI",
      category: "Productivity",
      description: "AI features in Notion for writing, summarizing, and organizing",
      url: "https://notion.so",
      difficulty: "Intermediate",
      color: "white"
    }
  ]

  const categories = [...new Set(tools.map(tool => tool.category))]

  return (
    <div className="space-y-16 py-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          TOOL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow">ARSENAL</span>
        </h1>
        <p className="text-xl text-gray-400">
          Curated intelligence for the modern professional.
        </p>
      </div>

      {categories.map(category => (
        <section key={category} className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-wider uppercase border-b border-white/10 pb-2">{category}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {tools
              .filter(tool => tool.category === category)
              .map(tool => (
                <div key={tool.name} className="group glass p-6 border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity`}>
                    <span className={`text-xs font-bold px-2 py-1 border border-${tool.color} text-${tool.color} rounded`}>
                      {tool.difficulty.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-400 mb-6 h-12">{tool.description}</p>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-${tool.color} font-bold tracking-wider text-sm hover:text-white transition-colors`}
                  >
                    DEPLOY TOOL <span className="text-lg">→</span>
                  </a>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}