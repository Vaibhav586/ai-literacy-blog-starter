"use client"

import { useState } from 'react'

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Search/Chat Window */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-gray-900 border border-t-[rgba(0,243,255,0.3)] border-l-[rgba(0,243,255,0.3)] border-r-[rgba(188,19,254,0.3)] border-b-[rgba(188,19,254,0.3)] backdrop-blur-xl rounded-lg shadow-[0_0_30px_rgba(0,243,255,0.15)] overflow-hidden transition-all duration-300 transform origin-bottom-right">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-[rgba(0,243,255,0.1)] to-[rgba(188,19,254,0.1)] p-4 flex justify-between items-center border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
                            <span className="font-bold text-white tracking-widest text-sm">AI ASSISTANT</span>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="h-80 p-4 overflow-y-auto space-y-4">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-blue-600 flex items-center justify-center text-xs font-bold text-black border border-white/20">
                                AI
                            </div>
                            <div className="bg-white/5 rounded-lg rounded-tl-none p-3 text-sm text-gray-200 border border-white/5">
                                <p>Hello! I am your AI navigator. How can I help you explore the future today?</p>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-t border-white/10 bg-black/20">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Ask about AI..."
                                className="w-full bg-white/5 border border-white/10 rounded-md py-2 px-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors placeholder:text-gray-500"
                            />
                            <button className="absolute right-2 top-1.5 text-neon-cyan hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center justify-center w-14 h-14 bg-black rounded-full border border-white/10 text-white shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(188,19,254,0.5)] transition-all duration-300"
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple opacity-20 group-hover:opacity-40 transition-opacity"></div>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transform transition-transform group-hover:rotate-90">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transform transition-transform group-hover:scale-110">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>
        </div>
    )
}
