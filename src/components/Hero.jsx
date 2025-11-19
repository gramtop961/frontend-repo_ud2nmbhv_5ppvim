import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-400/30 to-sky-500/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-blue-200 px-4 py-1 text-sm ring-1 ring-white/20">
          Marketing Collective • Senior-led
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Strategy-first growth for modern brands
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
          A boutique collective of seasoned leaders across strategy, creative, content, digital and growth. We help ambitious teams unlock momentum.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="mailto:hello@collective.agency" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-blue-500/20">
            Start a conversation <ArrowRight size={18} />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-blue-200 ring-1 ring-white/20 hover:bg-white/5 transition">
            Explore our capabilities
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
