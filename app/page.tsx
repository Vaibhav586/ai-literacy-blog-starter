import Link from 'next/link'
import RoleSwitcher from '@/components/role-switcher'

export default function Home() {
  return (
    <div className="space-y-24 mt-12">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/10 blur-[100px] rounded-full -z-10"></div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          AI FOR THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow">FUTURE</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          Master the tools of tomorrow. No coding required. <br />
          <span className="text-neon-cyan">Just pure potential.</span>
        </p>

        <div className="flex gap-6 justify-center pt-8">
          <Link
            href="/blog/ai-basics"
            className="group relative px-8 py-4 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan rounded-none font-bold tracking-widest uppercase hover:bg-neon-cyan hover:text-black transition-all duration-300"
          >
            <span className="relative z-10">Start Mission</span>
            <div className="absolute inset-0 bg-neon-cyan blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </Link>
          <Link
            href="/tools"
            className="px-8 py-4 border border-white/20 text-white rounded-none font-bold tracking-widest uppercase hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            Explore Tools
          </Link>
        </div>
      </section>

      {/* Role Switcher */}
      <section className="glass rounded-xl p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 blur-[80px] rounded-full pointer-events-none"></div>
        <h2 className="text-3xl font-bold text-center mb-8 text-white tracking-tight">
          CHOOSE YOUR <span className="text-neon-purple">PATH</span>
        </h2>
        <RoleSwitcher />
      </section>

      {/* Quick Links */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Understand AI",
            desc: "Decode the algorithms. Learn how AI thinks and where it's taking us.",
            link: "/blog",
            color: "neon-cyan"
          },
          {
            title: "Career Boost",
            desc: "Leverage AI to amplify your productivity and creativity tenfold.",
            link: "/blog",
            color: "neon-purple"
          },
          {
            title: "Tool Arsenal",
            desc: "Equip yourself with the most powerful AI tools available today.",
            link: "/tools",
            color: "neon-cyan"
          }
        ].map((item, i) => (
          <div key={i} className="group p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full bg-${item.color} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300`}></div>
            <h3 className={`text-2xl font-bold mb-4 text-white group-hover:text-${item.color} transition-colors`}>{item.title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {item.desc}
            </p>
            <Link href={item.link} className={`text-${item.color} font-bold tracking-wider text-sm flex items-center gap-2 group-hover:gap-4 transition-all opacity-80 group-hover:opacity-100`}>
              INITIALIZE <span className="text-lg">→</span>
            </Link>
          </div>
        ))}
      </section>
    </div>
  )
}