'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const facts = [
  '"Has failed CA Inter more than once. Is still going. Has opinions about this."',
  '"Owns multiple notebooks. Has filled approximately 12 pages across all of them."',
  '"Has started at least six different productivity systems. None lasted more than two weeks."',
  '"Can talk about cricket, economics, and city planning for hours without noticing."',
  '"Regularly orders from Zepto because he forgot to buy something he definitely knew he needed."',
  '"Has more startup ideas than free time. The ratio is not improving."',
  '"Actually enjoys reading annual reports. This is a known personality trait."',
  '"Once went down a rabbit hole about 19th century Dutch East India Company bonds on a Tuesday afternoon."',
  '"Daydreams a lot. Has been told this is both a strength and a problem."',
  '"Has raged quietly at FC when his 4-3-3 collapsed. Multiple times."',
  '"Grew up in a town so small that most maps didn\'t include it. Is fine with this."',
  '"Has been trying to wake up at 6am since 2022. Average streak: 4 days."',
  '"Is ambitious but not in a perfectly planned way. The plan is more of a general direction."',
  '"Gets genuinely distracted by interesting questions. Has been late to things because of Wikipedia."',
  '"Takes bad food recommendations personally."',
]

export function RandomFactSection() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex(i => (i + 1) % facts.length)
  return (
    <section id="facts" className="px-8 md:px-16 py-28 bg-[#0a0a0a]">
      <FadeIn>
        <SectionLabel>For the curious</SectionLabel>
        <SectionTitle>Random fact generator.</SectionTitle>
        <p className="text-[#7a7680] text-sm max-w-md mb-8">Actual things about me. Press until you find something interesting.</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="bg-[#1e1e24] border border-[rgba(255,255,255,0.07)] rounded-xl p-8 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.p key={index} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
              className="font-serif italic text-[#f0ede8] text-xl leading-[1.55] min-h-[60px] mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}>
              {facts[index]}
            </motion.p>
          </AnimatePresence>
          <button onClick={next} className="inline-flex items-center gap-2 border border-[rgba(255,255,255,0.13)] rounded-md px-4 py-2 text-[#7a7680] text-sm hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-200">
            ↻ another one
          </button>
        </div>
      </FadeIn>
    </section>
  )
}
