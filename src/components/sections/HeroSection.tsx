'use client'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 60%, rgba(201,168,76,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 80% 20%, rgba(78,205,196,0.04) 0%, transparent 60%)' }} />
      <div className="absolute right-[-15%] top-1/2 w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: 'conic-gradient(from 0deg, rgba(201,168,76,0.1), rgba(78,205,196,0.06), rgba(240,230,211,0.03), rgba(201,168,76,0.1))', animation: 'orbitSpin 30s linear infinite', filter: 'blur(2px)', transform: 'translateY(-50%)' }} aria-hidden="true" />
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[#4a4850] text-[11px] tracking-[0.18em] uppercase mb-7">
          Titlagarh → Bhubaneswar → Boarding School → Delhi → still figuring it out
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-black text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.03em] mb-8"
          style={{ fontFamily: 'var(--font-playfair)' }}>
          Hi, I&apos;m<br /><em className="italic text-[#c9a84c]">Vedant.</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-[500px] text-[#7a7680] text-[1rem] leading-[1.85] mb-6">
          I&apos;m 21. I&apos;m doing Commerce at Hansraj, pursuing CA and CFA, have failed CA Inter (more than once), play too much FC, spend too much on Zepto, and have approximately forty things I&apos;m curious about at any given moment.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
          className="border-l-2 border-[rgba(255,255,255,0.13)] pl-3 mb-8 max-w-[400px]">
          <p className="font-mono text-[0.78rem] text-[#4a4850] leading-[1.7]">
            This is not a portfolio. This is not personal branding.<br />
            This is just what&apos;s actually in my head right now.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-3 text-[#4a4850] text-[11px] tracking-[0.1em] uppercase">
          <span className="w-8 h-px bg-[#4a4850]" style={{ animation: 'scrollPulse 2s ease-in-out infinite' }} />
          have a look around
        </motion.div>
      </div>
    </section>
  )
}
