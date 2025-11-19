import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Placeholder: in a future step we can wire to backend endpoint
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks — we’ll be in touch!')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <Navbar />
      <main className="relative max-w-xl mx-auto px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact</h1>
        <p className="text-blue-200 mb-8">Tell us about your goals and timeline. We’ll get back within 24 hours.</p>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-white/10 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-white/10 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required className="w-full bg-white/10 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">Send</button>
          {status && <p className="text-blue-200 text-sm">{status}</p>}
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
