import React from 'react'
import Hero from './components/Hero'
import LeadForm from './components/LeadForm'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Hero />
      <LeadForm />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
