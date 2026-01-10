import Link from 'next/link'

const terms = [
    {
        term: "LLM (Large Language Model)",
        def: "A type of AI trained on vast amounts of text to understand and generate human-like language. Examples: GPT-4, Claude, Gemini."
    },
    {
        term: "Hallucination",
        def: "When an AI confidently generates false or misleading information. 'It didn't know the answer, so it hallucinated one.'"
    },
    {
        term: "Prompt Engineering",
        def: "The art of crafting precise inputs (prompts) to guide an AI model to generate the best possible output."
    },
    {
        term: "Generative AI",
        def: "AI that can create new content—text, images, audio, video—rather than just analyzing existing data."
    },
    {
        term: "RAG (Retrieval-Augmented Generation)",
        def: "A technique where AI looks up trusted information (like your company docs) before answering a question, to reduce hallucinations."
    },
    {
        term: "Multimodal",
        def: "AI models that can understand and generate multiple types of media properly simultaneously, like seeing an image and discussing it in text."
    },
    {
        term: "Token",
        def: "The basic unit of text for an AI. Is roughly 3/4 of a word. Models have 'context windows' measured in tokens."
    },
    {
        term: "Fine-tuning",
        def: "Taking a pre-trained model and training it further on a specific dataset to make it better at a specialized task."
    },
    {
        term: "AGI (Artificial General Intelligence)",
        def: "Hypothetical future AI that matches or exceeds human intelligence across a wide variety of cognitive tasks."
    }
]

export default function GlossaryPage() {
    return (
        <div className="space-y-12 py-12">
            <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan text-glow-purple">GLOSSARY</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Decode the jargon. Speak the language of the machine.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {terms.map((item, i) => (
                    <div key={i} className="group glass p-8 border border-white/10 relative overflow-hidden hover:bg-white/5 transition-all duration-300">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        <h3 className="text-xl font-bold text-neon-cyan mb-3">{item.term}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {item.def}
                        </p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-gray-500 mb-4">Want to see these in action?</p>
                <Link
                    href="/tools"
                    className="inline-block px-8 py-3 border border-white/20 text-white rounded-none font-bold uppercase hover:bg-white/10 hover:border-neon-cyan transition-colors"
                >
                    Explore Tools
                </Link>
            </div>
        </div>
    )
}
