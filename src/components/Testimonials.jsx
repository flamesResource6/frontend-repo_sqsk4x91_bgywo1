import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ letterSpacing: '-0.02em' }}>Results Speak</h2>
          <div className="text-sm text-black/60">Monochrome. Minimal. Powerful.</div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 p-6 bg-white hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition"
            >
              <div className="h-10 w-10 rounded-full bg-black/5 mb-4" />
              <p className="text-sm text-black/80 leading-relaxed">“Testimonial placeholder — keep it sharp, honest, and concise. Black & white only.”</p>
              <div className="mt-4 text-xs uppercase tracking-widest text-black/60">Name, Role</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
