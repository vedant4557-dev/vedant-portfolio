import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const items = [
  { text: 'Direct tax law. The actual law, not the textbook summary of the actual law.', status: 'CA exams' },
  { text: 'What makes an investment thesis rigorous vs just convincing-sounding', status: 'CFA prep' },
  { text: 'Finishing things I start. The gap between starting and finishing.', status: 'Ongoing. Slowly.' },
  { text: 'Sitting with one thing for longer than my attention span allows', status: 'Very hard' },
  { text: 'How Indian mutual fund distribution actually works at the economics level', status: 'Self-study' },
  { text: 'Whether my FC pressing system has a fundamental flaw or I just execute it badly', status: 'Unresolved' },
]

export function LearningSection() {
  return (
    <section id="learning" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>Work in progress</SectionLabel>
        <SectionTitle>Things I&apos;m currently<br />learning badly.</SectionTitle>
        <p className="text-[#7a7680] text-sm max-w-md mb-8">Not credentials. Just honest updates.</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="flex flex-col">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8 py-5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="text-sm text-[#7a7680] leading-relaxed flex-1">{item.text}</div>
              <div className="text-[10px] tracking-[0.1em] uppercase text-[#c9a84c] shrink-0">{item.status}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
