import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const tabs = [
  { title: "Why don't Indian cities work?", note: 'Municipal finance. Governance. Property tax. Been on this one for a while.', time: '~3 weeks', speed: 'fast' },
  { title: 'FC formation theory', note: '4-3-3 vs 4-2-3-1. The pressing trap. Why my fullbacks keep getting exposed.', time: 'ongoing', speed: 'normal' },
  { title: 'What does AI actually change in CA?', note: 'Not the breathless version. The specific, boring, real version.', time: '~2 months', speed: 'slow' },
  { title: 'What should I do after CA?', note: "Finance? Startups? Something I haven't thought of yet? Unclear.", time: 'too long', speed: 'fast' },
  { title: "Odia food and why it's underrated", note: 'No one talks about pakhala. This is a problem I think about occasionally.', time: 'forever', speed: 'slow' },
  { title: 'How does mutual fund distribution actually work?', note: 'The commission structure. The advisor incentives. The actual economics.', time: '~1 month', speed: 'normal' },
  { title: 'Cricket analytics gap', note: "The data exists. It's barely being used. Why?", time: '~6 weeks', speed: 'normal' },
  { title: 'What to cook this week', note: 'Genuinely unclear. Will probably just order from Swiggy again.', time: 'every week', speed: 'fast' },
]

export function BrainTabsSection() {
  return (
    <section id="braintabs" className="px-8 md:px-16 py-28 bg-[#0a0a0a]">
      <FadeIn>
        <SectionLabel>Right now</SectionLabel>
        <SectionTitle>Tabs currently open<br />in my brain.</SectionTitle>
        <p className="text-[#7a7680] text-sm max-w-md mb-8">These change constantly. Some have been open for weeks. Some for three hours.</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {tabs.map(tab => (
            <div key={tab.title} className="relative bg-[#1e1e24] border border-[rgba(255,255,255,0.07)] rounded-lg p-4 hover:border-[rgba(255,255,255,0.13)] transition-all duration-200">
              <div
                className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#c9a84c]"
                style={{
                  animation: `blink ${tab.speed === 'fast' ? '1.2s' : tab.speed === 'slow' ? '4s' : '2s'} ease-in-out infinite`
                }}
                aria-hidden="true"
              />
              <div className="font-semibold text-[#f0ede8] text-[0.85rem] mb-2 pr-4 leading-snug">{tab.title}</div>
              <div className="text-[0.75rem] text-[#7a7680] leading-relaxed mb-3">{tab.note}</div>
              <div className="font-mono text-[0.62rem] text-[#4a4850]">open for: {tab.time}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
