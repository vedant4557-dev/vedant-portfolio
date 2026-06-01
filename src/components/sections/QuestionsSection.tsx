import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const questions = [
  "Why do some cities feel alive and others feel like they're just existing?",
  "What does AI actually change in financial services — not the headline version, the granular version?",
  "Why does India produce so much talent and so little capital that stays?",
  "Is there a version of ambition that doesn't require sacrificing being present?",
  "Why do some startup ecosystems produce interesting companies and others don't?",
  "What's the right relationship between curiosity and focus? Can you have both fully?",
  "What will Indian retail investors look like in twenty years and how does that change everything?",
  "What do I actually want to build? Still working on this one.",
]

export function QuestionsSection() {
  return (
    <section id="questions" className="px-8 md:px-16 py-28 bg-[#0a0a0a]">
      <FadeIn>
        <SectionLabel>Unresolved</SectionLabel>
        <SectionTitle>Questions I can&apos;t stop<br />thinking about.</SectionTitle>
        <p className="text-[#7a7680] text-sm max-w-md mb-8">No answers. Just the questions. That&apos;s sort of the point.</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="flex flex-col">
          {questions.map((q, i) => (
            <div key={i} className="flex items-baseline gap-3 py-5 border-b border-[rgba(255,255,255,0.07)] text-[0.95rem] text-[#7a7680] leading-relaxed hover:text-[#f0ede8] transition-colors duration-200">
              <span className="text-[#c9a84c] font-serif font-bold text-lg shrink-0" style={{ fontFamily: 'var(--font-playfair)' }}>?</span>
              {q}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
