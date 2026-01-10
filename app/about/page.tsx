import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          ABOUT <span className="text-neon-cyan">AI.LITERACY</span>
        </h1>
        <p className="text-2xl text-gray-400 font-light">
          Democratizing the future, one token at a time.
        </p>
      </div>

      <div className="glass p-10 border border-white/10 space-y-10 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-cyan/20 blur-[50px] rounded-full pointing-events-none"></div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-l-4 border-neon-cyan pl-4">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We believe that understanding Artificial Intelligence shouldn't require a computer science degree.
            Our mission is to make huge concepts, powerful tools, and world-changing applications accessible to
            professionals from all backgrounds.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-l-4 border-neon-purple pl-4">Why Us?</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              { title: "No Jargon", desc: "Technical concepts translated into plain English." },
              { title: "Real Examples", desc: "Scenarios you actually face in daily work." },
              { title: "Role-Based", desc: "Content tailored for Marketers, HR, and more." },
              { title: "Practicality First", desc: "Focus on tools you can use today." }
            ].map((item, i) => (
              <li key={i} className="bg-white/5 p-4 border border-white/5">
                <strong className="block text-neon-cyan mb-1">{item.title}</strong>
                <span className="text-gray-400 text-sm">{item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white pl-4 border-l-4 border-white">Join the Evolution</h2>
          <p className="text-gray-300 leading-relaxed">
            Whether you're a student exploring career options, a marketer looking to leverage AI tools,
            or a founder evaluating AI for your business—this is your launchpad.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 justify-center">
          <Link href="/blog/ai-basics" className="text-neon-cyan hover:text-white font-bold tracking-widest uppercase transition-colors flex items-center gap-2">
            <span>Start Learning</span> <span className="text-lg">→</span>
          </Link>
          <Link href="/" className="text-neon-purple hover:text-white font-bold tracking-widest uppercase transition-colors flex items-center gap-2">
            <span>Find Your Path</span> <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}