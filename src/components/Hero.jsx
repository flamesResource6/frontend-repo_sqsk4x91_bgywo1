import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  const handleCTAClick = () => {
    const el = document.getElementById('lead')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[92vh] w-full bg-black text-white overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient overlay for contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

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
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl"
          style={{ letterSpacing: '-0.02em' }}
        >
          Unlock Your Mindset. Transform Your Life in 30 Days.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl"
        >
          Download the Mindset Of JB 30-Day Guide and start your breakthrough today.
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
