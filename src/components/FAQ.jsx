import { useState } from 'react'

const qa = [
  {
    q: 'How does Fluck.ai work?',
    a: 'Compose automations using our visual builder or SDK. Connect tools, set guardrails, and deploy agents to your channels.'
  },
  {
    q: 'Can I bring my own model?',
    a: 'Yes. Use any major LLM provider or our managed options. Swap models anytime without code changes.'
  },
  {
    q: 'Is my data secure?',
    a: 'We follow enterprise-grade security practices with encryption, audit logs, SSO and role-based access.'
  },
  {
    q: 'Do you offer custom work?',
    a: 'We are a software house and offer bespoke builds, integrations and white-glove onboarding.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative bg-[#070b12] py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-white">FAQ</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          {qa.map((item, idx) => (
            <button key={item.q} onClick={() => setOpen(open === idx ? -1 : idx)} className="w-full text-left px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-white font-medium">{item.q}</div>
                  {open === idx && <p className="mt-2 text-white/70 text-sm">{item.a}</p>}
                </div>
                <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border ${open === idx ? 'rotate-45' : ''} transition`}> 
                  <span className="block h-3 w-0.5 bg-white" />
                  <span className="block h-0.5 w-3 bg-white" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
