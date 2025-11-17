import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LeadForm = ({ onSuccess }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // NOTE: Replace with your actual Web3Forms endpoint ID when available
    const endpoint = import.meta.env.VITE_WEB3FORMS_ENDPOINT || ''
    if (!endpoint) {
      // Simulate success path until endpoint is provided
      setSubmitted(true)
      onSuccess?.()
      return
    }

    try {
      setLoading(true)
      const formData = new FormData()
      formData.append('access_key', endpoint)
      formData.append('name', name)
      formData.append('email', email)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        onSuccess?.()
      } else {
        setError('Submission failed. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="lead" className="relative bg-white text-black py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ letterSpacing: '-0.02em' }}>Start Your 30-Day Breakthrough</h2>
          <p className="mt-4 text-black/70">Clarity. Discipline. Action. Enter your details to get instant access to the Mindset Of JB 30-Day Guide.</p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="bg-black text-white rounded-2xl p-6 sm:p-8 border border-black/10 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
            <div className="grid gap-5">
              <div>
                <label className="block text-sm uppercase tracking-widest text-white/70 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg bg-white text-black px-4 py-3 outline-none border border-white/20 focus:border-white/40 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-white text-black px-4 py-3 outline-none border border-white/20 focus:border-white/40 transition"
                  placeholder="you@example.com"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-full border border-white bg-white text-black px-6 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-black hover:text-white hover:border-white/60 disabled:opacity-60"
              >
                {loading ? 'Submitting...' : 'Get the Guide'}
              </button>
            </div>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35 }}
                className="mt-6"
              >
                <div className="rounded-2xl border border-black/10 bg-white p-6">
                  <h3 className="font-semibold text-xl">Your guide is ready! Click below to download.</h3>
                  <p className="mt-2 text-black/70">Discipline. Consistency. 30-day transformation — it starts now.</p>
                  <div className="mt-4">
                    {/* Replace href with your actual Google Drive link */}
                    <a
                      href={import.meta.env.VITE_GUIDE_URL || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-black bg-black text-white px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors hover:bg-white hover:text-black"
                    >
                      Download the 30-Day Guide
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default LeadForm
