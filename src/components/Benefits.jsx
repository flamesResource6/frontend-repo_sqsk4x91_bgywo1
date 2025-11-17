import React from 'react'
import { motion } from 'framer-motion'
import { Target, Brain, CalendarCheck, ShieldCheck, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Target,
    title: 'Step 1: SMART + WOOP',
    desc: 'Set a precise SMART goal and run it through the WOOP framework to prime action.',
  },
  {
    icon: Brain,
    title: "Step 2: Your 'Why' + Vision Board",
    desc: 'Define the emotional driver and design a monochrome vision board for daily priming.',
  },
  {
    icon: CalendarCheck,
    title: 'Step 3: Daily Accountability',
    desc: 'Leverage simple tracking tools to check off micro-actions every day.',
  },
  {
    icon: ShieldCheck,
    title: "Step 4: If–Then Planning",
    desc: "Pre-plan obstacles with if–then statements so setbacks trigger action, not excuses.",
  },
  {
    icon: Sparkles,
    title: 'Step 5: Reward System',
    desc: 'Design personal rewards that reinforce consistency and momentum.',
  },
]

const Benefits = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
          What You’ll Master Inside the Guide
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          A focused system to set the right target, prime your mindset, and follow through daily.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <item.icon className="h-6 w-6 mb-4 text-white" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
