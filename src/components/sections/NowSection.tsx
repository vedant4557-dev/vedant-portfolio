import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const items = [
  { icon: '📚', label: 'Studying', text: 'CA Inter. Again. More seriously this time. Fingers crossed.' },
  { icon: '📖', label: 'Reading', text: 'Economic history, startup post-mortems, and too many Substacks' },
  { icon: '🎮', label: 'Playing', text: 'FC. Trying a new pressing shape. Working about 60% of the time.' },
  { icon: '🤔', label: 'Confused about', text: 'What I want to do after finishing these qualifications. Still unclear.' },
  { icon: '🔨', label: 'Building', text: 'A few tools around finance and investing. Details below.' },
  { icon: '💭', label: 'Daydreaming about', text: 'Building something. Vague but persistent. The what is TBD.' },
  { icon: '😬', label: 'Avoiding', text: 'The pile of things that need doing that I keep moving to tomorrow' },
  { icon: '📦', label: 'Just ordered', text: 'Something on Zepto. Obviously. This slot will never be empty.' },
]

export function NowSection() {
  return (
    <section id="now" className="px-8 md:px-16 py-28 bg-[#0a0a0a]">
      <FadeIn>
        <SectionLabel>Live update</SectionLabel>
        <SectionTitle>Right now.</SectionTitle>
        <p className="text-[#7a7680] text-sm max-w-md mb-8">Updated when things change. Which is often.</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map(item => (
            <div key={item.label} className="bg-[#1e1e24] border border-[rgba(255,255,255,0.07)] rounded-xl p-4 hover:border-[rgba(255,255,255,0.13)] hover:-translate-y-0.5 transition-all duration-200">
              <div className="text-xl mb-2">{item.icon}</div>
              <div className="text-[10px] tracking-[0.12em] uppercase text-[#c9a84c] mb-1">{item.label}</div>
              <div className="text-xs text-[#7a7680] leading-relaxed">{item.text}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
