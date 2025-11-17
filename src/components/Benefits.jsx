import React from 'react'
import { motion } from 'framer-motion'
import { Target, Clock, Activity, Shield } from 'lucide-react'

const items = [
  { icon: Target, title: 'Clarity', desc: 'Lock in a precise 30-day target with a daily plan.' },
  { icon: Clock, title: 'Consistency', desc: 'Micro-actions that compound every single day.' },
  { icon: Activity, title: 'Momentum', desc: 'Energy and focus engineered for results.' },
  { icon: Shield, title: 'Discipline', desc: 'Accountability frameworks that keep you on course.' },
]

const Benefits = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ letterSpacing: '-0.02em' }}>What You’ll Gain in 30 Days</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
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
