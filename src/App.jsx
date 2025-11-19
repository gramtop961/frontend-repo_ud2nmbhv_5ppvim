import Hero from './components/Hero'
import Services from './components/Services'
import Founders from './components/Founders'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <header className="relative">
        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-500" />
            <span className="font-semibold">Collective</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-blue-200">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#founders" className="hover:text-white transition">Founders</a>
            <a href="mailto:hello@collective.agency" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition">Contact</a>
          </div>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <Services />
        <div id="founders">
          <Founders />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
