import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#070b12]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,183,255,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,0,153,0.2),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-40 pb-24 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Live AI automations
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
            Liquid-glass SaaS for intelligent agents
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Build, orchestrate and deploy AI agents that automate customer support, operations and growth. Designed for speed, reliability and scale.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="pointer-events-auto inline-flex items-center rounded-xl bg-white text-gray-900 px-5 py-3 font-medium shadow-white/20 shadow">
              Start free
            </a>
            <a href="#about" className="pointer-events-auto inline-flex items-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium border border-white/20">
              Learn more
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 text-white/70">
            <Stat label="Avg. reply time" value="1.2s" />
            <Stat label="Automations shipped" value="12k+" />
            <Stat label="Customer CSAT" value="98%" />
            <Stat label="Uptime" value="99.99%" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  )
}
