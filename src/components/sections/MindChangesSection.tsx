import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const changes = [
  { before: 'Finance is about earning money', after: 'Capital allocation might be one of the most consequential things that happens in an economy' },
  { before: 'Startups are about having a great idea', after: "Mostly execution, timing, and who you're building with. The idea is like 10% of it." },
  { before: 'Failing exams means something is wrong with you', after: 'It mostly means the exam is hard and you needed more time. CA Inter is genuinely hard.' },
  { before: 'More data = better decisions', after: 'Knowing which data matters is the actual skill. More often creates more noise.' },
  { before: "Small towns are where ambition goes to die", after: "They give you something the city can't. I'm still figuring out exactly what." },
  { before: 'Being organised is a prerequisite for doing interesting things', after: "Some of the most interesting people I've read about were spectacularly disorganised" },
]

export function MindChangesSection() {
  return (
    <section id="mindchanges" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>Updated beliefs</SectionLabel>
        <SectionTitle>Things I changed<br />my mind about.</SectionTitle>
        <p className="text-[#7a7680] text-sm max-w-md mb-8">Publishing old beliefs feels important. More people should do this.</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="flex flex-col mt-4">
          {changes.map((c, i) => (
            <div key={i} className="grid md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-6 items-start py-5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="text-sm text-[#4a4850] line-through leading-relaxed" style={{ textDecorationColor: 'rgba(255,107,107,0.3)' }}>{c.before}</div>
              <div className="text-[#c9a84c] hidden md:block pt-0.5">→</div>
              <div className="text-sm text-[#f0ede8] leading-relaxed"><span className="md:hidden text-[#c9a84c] mr-1">→</span>{c.after}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
