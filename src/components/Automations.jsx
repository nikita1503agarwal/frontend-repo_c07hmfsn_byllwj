import { motion } from 'framer-motion'
import { MessagesSquare, ShoppingCart, Headset, Workflow } from 'lucide-react'

const items = [
  {
    icon: Headset,
    title: 'Customer Support',
    desc: 'Resolve tickets, triage intents and escalate with context-aware handoffs.'
  },
  {
    icon: MessagesSquare,
    title: 'Sales & Outreach',
    desc: 'Qualify leads, book meetings and follow up across channels.'
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Ops',
    desc: 'From order updates to returns, let agents handle the busywork.'
  },
  {
    icon: Workflow,
    title: 'Internal Workflows',
    desc: 'AP/AR, HR, and IT automations that keep teams flowing.'
  }
]

export default function Automations() {
  return (
    <section id="automations" className="relative bg-[#070b12] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Automations & Agents</h2>
            <p className="mt-4 text-white/70">Pick a template or compose your own. Connect tools, define guardrails and deploy in one click.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
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
