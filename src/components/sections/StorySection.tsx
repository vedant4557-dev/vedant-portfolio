'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const chapters = [
  { num: '01', loc: 'Titlagarh, Odisha', title: 'Small town. Big sky. A lot of free time.', body: "Titlagarh is small. Very small. The kind of small where you make your own entertainment and the pace of life is genuinely unhurried. I didn't think of this as a \"humble origin story\" — it was just home. The free time probably did something good to my brain. I got very comfortable sitting with questions that didn't have immediate answers." },
  { num: '02', loc: 'Bhubaneswar, Sai International', title: 'City life. More going on. Still at the back of class.', body: "Moving to Bhubaneswar at 9 was the first expansion of my world. Bigger school, more people, more things happening. I was not the organised, diligent front-bencher. I was the person at the back who had a lot of questions and got in trouble for talking. I was energetic and curious and not particularly focused. Some things don't change." },
  { num: '03', loc: 'Boarding School', title: "Learned how to lose gracefully. Eventually.", body: "Boarding school teaches you things no curriculum covers. How to share space with people you didn't choose. How to handle losing — at sports, at arguments, at card games played after lights-out. Some of my best memories and most embarrassing stories come from here. I won't be sharing the embarrassing ones on this website." },
  { num: '04', loc: 'Class XI, Back in Bhubaneswar', title: 'Economics stopped being a subject.', body: "Something shifted when I started reading economics that wasn't on the syllabus. The 2008 crisis. How incentives actually work. Why some places are rich and others aren't. It stopped feeling like studying and started feeling like pulling on a thread. I have been pulling on it since." },
  { num: '05', loc: 'Delhi, Hansraj College', title: 'B.Com + CA + CFA. Simultaneously. Still not sure why.', body: "Delhi is large and loud and very full of things happening. The decision to pursue CA and CFA alongside a degree was made with more ambition than planning. CA Inter, in particular, has been a recurring lesson in humility. I have failed it more than once. I am still going. Delhi has also introduced me to excellent street food and my Zepto habit, so it evens out." },
  { num: '06', loc: "Somewhere between here and what's next", title: 'Currently figuring it out. Genuinely.', body: "I don't have a precise plan. I have a lot of curiosity, some unfinished exams, a growing set of questions about economics and startups and cities, and a vague but strong sense that I want to build something eventually. Whether that looks like finance, or startups, or something I haven't thought of yet — I genuinely don't know. This page will be updated when I do." },
]

export function StorySection() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="story" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>How I got here</SectionLabel>
        <SectionTitle>Six chapters.<br />Honest version.</SectionTitle>
      </FadeIn>
      <div className="mt-8 flex flex-col">
        {chapters.map((ch, i) => (
          <FadeIn key={ch.num} delay={i * 40}>
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left grid grid-cols-[56px_1fr] gap-7 py-7 border-b border-[rgba(255,255,255,0.07)] group" aria-expanded={open === i}>
              <span className={`font-serif font-black text-[3rem] leading-none transition-colors duration-300 ${open === i ? 'text-[#c9a84c]' : 'text-[rgba(255,255,255,0.07)] group-hover:text-[rgba(255,255,255,0.14)]'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{ch.num}</span>
              <div className="flex flex-col justify-center">
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#c9a84c] mb-1">{ch.loc}</div>
                <div className="text-lg font-semibold text-[#f0ede8] mb-2">{ch.title}</div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div key="b" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }} className="overflow-hidden">
                      <p className="text-sm text-[#7a7680] leading-[1.85] pb-2">{ch.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className={`h-px mt-3 transition-all duration-300 ${open === i ? 'w-8 bg-[#c9a84c]' : 'w-3 bg-[rgba(255,255,255,0.13)] group-hover:w-6'}`} />
              </div>
            </button>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
