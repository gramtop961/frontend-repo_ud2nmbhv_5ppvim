import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Founders from '../components/Founders'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="founders">
          <Founders />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
