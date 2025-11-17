import React from 'react'
import { Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="text-[10px] tracking-widest uppercase">JB</span>
          </div>
          <span className="text-sm tracking-widest uppercase text-white/80">MindsetOfJB</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="text-white/70 hover:text-white transition" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
          <a href="#" className="text-white/70 hover:text-white transition" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
          <a href="#" className="text-white/70 hover:text-white transition" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
