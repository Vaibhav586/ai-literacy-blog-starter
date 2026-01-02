export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About AI Literacy</h1>
        <p className="text-xl text-gray-600">
          Making AI accessible to everyone, regardless of technical background
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>Our Mission</h2>
        <p>
          We believe that understanding AI shouldn't require a computer science degree. 
          Our mission is to make AI concepts, tools, and applications accessible to 
          professionals from all backgrounds.
        </p>

        <h2>What Makes Us Different</h2>
        <ul>
          <li><strong>Plain Language:</strong> We explain AI without jargon or technical complexity</li>
          <li><strong>Real Examples:</strong> Every concept is illustrated with daily-life scenarios</li>
          <li><strong>Role-Based Content:</strong> Tailored recommendations for your specific profession</li>
          <li><strong>Practical Focus:</strong> Learn what you can actually use, not just theory</li>
        </ul>

        <h2>Who This Is For</h2>
        <p>
          Whether you're a student exploring career options, a marketer looking to leverage AI tools, 
          an HR professional understanding AI's impact on hiring, or a founder evaluating AI for 
          your business—this blog is designed for you.
        </p>

        <h2>Get Started</h2>
        <p>
          New to AI? Start with our <a href="/blog/ai-basics" className="text-blue-600 hover:underline">AI Basics</a> guide. 
          Know your role? Use our <a href="/" className="text-blue-600 hover:underline">role switcher</a> on the homepage 
          for personalized recommendations.
        </p>
      </div>
    </div>
  )
}