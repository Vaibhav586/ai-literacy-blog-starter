export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-12 py-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple tracking-tight">
                    INITIATE CONTACT
                </h1>
                <p className="text-xl text-gray-400">
                    Have questions about the future? We are listening.
                </p>
            </div>

            <div className="glass p-8 border border-white/10 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-purple/20 to-transparent blur-xl"></div>

                <form className="space-y-6 relative z-10">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-neon-cyan uppercase tracking-wider">Identity</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all placeholder:text-gray-700"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-neon-cyan uppercase tracking-wider">Communication Channel</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all placeholder:text-gray-700"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-neon-cyan uppercase tracking-wider">Transmission</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all placeholder:text-gray-700"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-bold tracking-widest uppercase hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]"
                    >
                        Send Data
                    </button>
                </form>
            </div>
        </div>
    )
}
