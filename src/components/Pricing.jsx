import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: false,
    features: ['1 agent', '100 conversations', 'Email support']
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mo',
    highlight: true,
    features: ['5 agents', '10k conversations', 'Priority support']
  },
  {
    name: 'Scale',
    price: '$199',
    period: '/mo',
    highlight: false,
    features: ['Unlimited agents', 'Unlimited conversations', 'SLA & SSO']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0b1220] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, usage-friendly pricing</h2>
            <p className="mt-4 text-white/70">Start for free. Upgrade when you ship your first agent.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className={`rounded-2xl border border-white/10 backdrop-blur-xl p-6 ${tier.highlight ? 'bg-white text-gray-900 shadow-white/20 shadow-lg' : 'bg-white/5 text-white'}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  {tier.highlight && <span className="rounded-full bg-gray-900/10 px-3 py-1 text-xs">Popular</span>}
                </div>
                <div className="mt-4 flex items-end gap-1">
                  <div className="text-4xl font-semibold">{tier.price}</div>
                  <div className="text-sm opacity-60">{tier.period}</div>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium ${tier.highlight ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>Get started</a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
