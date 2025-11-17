import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Automations from './components/Automations'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-[#070b12]">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.12),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Automations />
        <Pricing />
        <FAQ />
      </main>
      <footer className="relative border-t border-white/10 bg-[#070b12] py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Fluck.ai — Built with love</p>
      </footer>
    </div>
  )
}

export default App
