function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-300">
        <p>© {new Date().getFullYear()} Collective. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:hello@collective.agency" className="hover:text-white transition">Email</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
