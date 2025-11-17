import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const handleCTAClick = () => {
    const el = document.getElementById('lead')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[92vh] w-full bg-black text-white overflow-hidden">
      {/* Monochrome animated background (subtle, no imagery) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.04),transparent_40%)]" />
        <motion.div
          aria-hidden
          initial={{ opacity: 0.25, scale: 1 }}
          animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.03, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-24 rounded-[50%] bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_60%)]"/>
      </div>

      {/* Dark gradient overlay for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 pt-28 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <span className="text-xs tracking-widest uppercase">JB</span>
            </div>
            <span className="text-sm tracking-widest uppercase text-white/80">MindsetOfJB</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-5xl"
          style={{ letterSpacing: '-0.02em' }}
        >
          A 30-Day Guide to Hit Your Goals — Clear, Actionable, Proven.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl"
        >
          Learn the exact structure I use: SMART + WOOP, a powerful “Why”, visual priming, daily accountability, if–then planning, and a reward system to lock in momentum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-10 flex items-center gap-4"
        >
          <button
            onClick={handleCTAClick}
            className="group inline-flex items-center justify-center rounded-full border border-white bg-white text-black px-6 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-black hover:text-white hover:border-white/60"
          >
            Get the 30-Day Guide
            <span className="ml-3 inline-block h-[1px] w-6 bg-black group-hover:bg-white transition-colors"></span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
