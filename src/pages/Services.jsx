import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ServicesPage() {
  const services = [
    {
      title: 'Strategy',
      desc: 'Go-to-market, positioning, ICP definition, pricing and growth planning.'
    },
    {
      title: 'Creative',
      desc: 'Brand systems, design, copy, campaigns, and high-impact storytelling.'
    },
    {
      title: 'Growth',
      desc: 'Acquisition, lifecycle, conversion rate optimization, and analytics.'
    },
    {
      title: 'Content',
      desc: 'Editorial, social, video, and performance content built for distribution.'
    },
    {
      title: 'Digital',
      desc: 'Websites, landing pages, and automation with modern stacks.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <Navbar />
      <main className="relative max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10">Services</h1>
        <p className="text-blue-200 max-w-3xl mb-12">We partner with founders and in-house teams to accelerate what matters. Pick a track or mix and match — we build squads around your goals.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-blue-200">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage
