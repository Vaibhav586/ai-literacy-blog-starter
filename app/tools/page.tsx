export default function ToolsPage() {
  const tools = [
    {
      name: "ChatGPT",
      category: "Writing & Communication",
      description: "AI assistant for writing, brainstorming, and answering questions",
      url: "https://chat.openai.com",
      difficulty: "Beginner"
    },
    {
      name: "Canva AI",
      category: "Design",
      description: "AI-powered design tools for creating graphics and presentations",
      url: "https://canva.com",
      difficulty: "Beginner"
    },
    {
      name: "Grammarly",
      category: "Writing & Communication",
      description: "AI writing assistant for grammar, tone, and clarity",
      url: "https://grammarly.com",
      difficulty: "Beginner"
    },
    {
      name: "Notion AI",
      category: "Productivity",
      description: "AI features in Notion for writing, summarizing, and organizing",
      url: "https://notion.so",
      difficulty: "Intermediate"
    }
  ]

  const categories = [...new Set(tools.map(tool => tool.category))]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">AI Tools Directory</h1>
        <p className="text-xl text-gray-600">
          Curated AI tools for non-technical professionals
        </p>
      </div>

      {categories.map(category => (
        <section key={category}>
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {tools
              .filter(tool => tool.category === category)
              .map(tool => (
                <div key={tool.name} className="border rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{tool.name}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
                      {tool.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <a 
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Try it now →
                  </a>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}