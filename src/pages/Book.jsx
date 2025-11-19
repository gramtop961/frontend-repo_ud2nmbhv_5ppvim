import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function BookPage() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Booking...')
    try {
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Meeting booked! We just sent a confirmation email.')
      setDate(''); setTime(''); setName(''); setEmail('')
    } catch (e) {
      setStatus('Unable to book right now. Please try later.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
      <Navbar />
      <main className="relative max-w-xl mx-auto px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Book an appointment</h1>
        <p className="text-blue-200 mb-8">Pick a time that works for you. We’ll confirm shortly.</p>
        <form onSubmit={submit} className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Date</label>
              <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} required className="w-full bg-white/10 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">Time</label>
              <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} required className="w-full bg-white/10 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} required className="w-full bg-white/10 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full bg-white/10 border border-white/10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">Book</button>
          {status && <p className="text-blue-200 text-sm">{status}</p>}
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default BookPage
