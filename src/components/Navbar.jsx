import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Automations', href: '#automations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/80 to-fuchsia-500/80 ring-1 ring-white/20">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="text-white text-lg font-semibold tracking-tight">Fluck.ai</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-white/80 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="inline-flex items-center rounded-xl bg-white text-gray-900 px-4 py-2 font-medium shadow/30 shadow-white/20 hover:shadow-white/40 transition">
                Get Started
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 sm:px-6">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-white/90 hover:bg-white/10 border border-white/10">
                    {item.label}
                  </a>
                ))}
                <a href="#pricing" onClick={() => setOpen(false)} className="block text-center rounded-xl bg-white text-gray-900 px-4 py-3 font-medium shadow/30 shadow-white/20">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
