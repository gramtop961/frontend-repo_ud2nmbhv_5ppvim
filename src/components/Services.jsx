import { Lightbulb, Palette, Rocket, PenTool, Globe } from 'lucide-react'

const services = [
  { title: 'Strategy', icon: Lightbulb, desc: 'Positioning, go-to-market, brand architecture, research and planning.' },
  { title: 'Creative', icon: Palette, desc: 'Concepts, campaigns, identity systems, design and production.' },
  { title: 'Growth', icon: Rocket, desc: 'Acquisition, lifecycle, experimentation and conversion optimization.' },
  { title: 'Content', icon: PenTool, desc: 'Narratives, thought leadership, social programming and editorial.' },
  { title: 'Digital', icon: Globe, desc: 'Web, product, SEO, analytics and marketing operations.' },
]

function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="text-blue-200/80 max-w-xl">Senior operators, not a bloated agency. Plug in the capabilities you need, led by founders who have shipped at scale.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-tr from-blue-500/10 to-cyan-500/10" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-blue-200/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
