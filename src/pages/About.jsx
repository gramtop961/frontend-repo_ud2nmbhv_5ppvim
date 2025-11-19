import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <Navbar />
      <main className="relative max-w-5xl mx-auto px-6 py-16 space-y-10">
        <h1 className="text-4xl sm:text-5xl font-bold">About Us</h1>
        <p className="text-blue-200 max-w-3xl">Collective is a senior-only marketing partner. We assemble bespoke, cross-functional teams from strategy, creative, growth, content, and digital to ship work that moves the needle. No bloat. No handoffs. Just outcomes.</p>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Our Model</h3>
            <p className="text-blue-200">Embedded squads that plug into your roadmap. Weekly sprints, transparent reporting, and measurable KPIs.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Values</h3>
            <ul className="list-disc list-inside text-blue-200 space-y-1">
              <li>Strategy before tactics</li>
              <li>Creative that converts</li>
              <li>Speed with quality</li>
              <li>Data with context</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
