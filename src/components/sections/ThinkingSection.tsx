import { FadeIn, SectionLabel, SectionTitle, Sub } from '@/components/ui/Divider'

const thoughts = [
  "What does AI actually change in financial audit — not the hot take, the granular specific answer?",
  "Why do Indian cities fail at municipal finance and what would fixing it actually require?",
  "Is the CFA worth it for someone who wants to build in fintech rather than work in finance?",
  "How do you build conviction in an investment thesis without confusing conviction with stubbornness?",
  "Why does India produce talent that goes everywhere except Indian capital markets?",
  "What will retail investing in India look like in 2035 and who benefits?",
  "At what point does a side project become a startup and how do you know?",
]

export function ThinkingSection() {
  return (
    <section id="thinking" className="px-8 md:px-16 py-24 bg-[#131316]">
      <FadeIn>
        <SectionLabel>open questions</SectionLabel>
        <SectionTitle>Things I&apos;m thinking about</SectionTitle>
        <Sub>No conclusions. Just questions I can&apos;t seem to close the tab on.</Sub>
      </FadeIn>
      <FadeIn delay={80}>
        <div className="flex flex-col">
          {thoughts.map((t, i) => (
            <div key={i} className="flex gap-4 items-baseline py-4 border-b border-[rgba(255,255,255,0.06)] text-[0.9rem] text-[#9190a0] hover:text-[#ededea] transition-colors">
              <span className="font-mono text-[0.65rem] text-[#555460] w-6 shrink-0 pt-0.5">{String(i+1).padStart(2,'0')}</span>
              {t}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
