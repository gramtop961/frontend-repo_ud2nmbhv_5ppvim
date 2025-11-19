const founders = [
  {
    name: 'Alex Morgan',
    title: 'Strategy & Growth',
    bio: '20+ years scaling category-defining brands across marketplaces and SaaS.',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Jordan Blake',
    title: 'Creative',
    bio: 'Award-winning creative director shaping identities and campaigns that move culture.',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    name: 'Riley Chen',
    title: 'Content',
    bio: 'Editorial leader crafting narratives for founders, executives and global platforms.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'Taylor Singh',
    title: 'Digital',
    bio: 'Full-stack digital lead across product, web, SEO and analytics for growth-stage teams.',
    avatar: 'https://i.pravatar.cc/150?img=15'
  }
]

function Founders() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Founding team</h2>
        <p className="mt-2 text-blue-200/80 max-w-2xl">Hands-on senior talent. No layers. We assemble the right pod for your problem and stay close to the work.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((f) => (
            <div key={f.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <img src={f.avatar} alt={f.name} className="h-16 w-16 rounded-xl object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-white">{f.name}</h3>
              <p className="text-sm text-blue-300">{f.title}</p>
              <p className="mt-3 text-sm text-blue-200/80 leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Founders
