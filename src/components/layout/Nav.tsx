'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#braintabs', label: 'Brain Tabs' },
  { href: '#story', label: 'Story' },
  { href: '#didntwork', label: "Didn't Work" },
  { href: '#github', label: 'GitHub' },
  { href: '#questions', label: 'Questions' },
  { href: '#now', label: 'Now' },
  { href: '#contact', label: 'Hi' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-10 py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]' : 'bg-transparent'
        }`}
      >
        <Link href="/" className="font-serif text-xl text-[#c9a84c] tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>V.</Link>
        <ul className="hidden md:flex items-center gap-7 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-[#7a7680] text-xs tracking-[0.08em] uppercase hover:text-[#f0ede8] transition-colors duration-200">{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`w-5 h-px bg-[#f0ede8] block transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-px bg-[#f0ede8] block transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-px bg-[#f0ede8] block transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#111114] border-b border-[rgba(255,255,255,0.07)] p-6">
            <ul className="flex flex-col gap-4 list-none">
              {links.map(l => (
                <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="text-[#f0ede8] text-lg font-medium hover:text-[#c9a84c] transition-colors block">{l.label}</a></li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
