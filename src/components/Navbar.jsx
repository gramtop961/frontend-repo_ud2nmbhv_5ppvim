import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition ${isActive ? 'text-white bg-white/10' : 'text-blue-200 hover:text-white hover:bg-white/10'}`

  return (
    <header className="relative">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-500" />
          <span className="font-semibold text-white">Collective</span>
        </Link>
        <div className="hidden sm:flex items-center gap-2">
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/book" className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition font-medium ${isActive ? 'bg-blue-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`
          }>Book</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
