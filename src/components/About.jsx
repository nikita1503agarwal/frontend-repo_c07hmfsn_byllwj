import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Rocket, Cpu } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Agentic by design',
    desc: 'Composable tools and memory give your agents context, autonomy and guardrails.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'SOC2-ready practices, SSO, role-based access and granular permissions.'
  },
  {
    icon: Rocket,
    title: 'Fast to value',
    desc: 'Templates and no-code flows to launch in hours, not months.'
  },
  {
    icon: Cpu,
    title: 'Model-flexible',
    desc: 'Bring your own LLMs or use ours. Switch models without switching vendors.'
  }
]

export default function About() {
  return (
    <section id="about" className="relative bg-[#0b1220] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">About Fluck.ai</h2>
            <p className="mt-4 text-white/70">We are a software house building delightful AI products. We partner with forward-thinking teams to craft automations and agent ecosystems that actually ship.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 ring-1 ring-white/20">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-white font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
