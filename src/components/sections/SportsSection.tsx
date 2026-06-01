import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const sports = [
  { icon: '🏏', name: 'Cricket', note: 'Favourite sport. Has taught me patience. Have been dismissed for a single after feeling very set.' },
  { icon: '🏓', name: 'Table Tennis', note: 'Will challenge you. Have lost to people I should not have lost to. Multiple times.' },
  { icon: '🏀', name: 'Basketball', note: 'Great team sport. Five people moving well together is a beautiful thing to be part of.' },
  { icon: '🎾', name: 'Lawn Tennis', note: 'Managing your own frustration, disguised as a sport.' },
  { icon: '⚽', name: 'Football + FC', note: 'Real pitch and PlayStation. The PlayStation version gets more hours. Honesty matters.' },
  { icon: '🏸', name: 'Pickleball', note: 'People underestimate it. The strategy is genuinely interesting. Recent obsession.' },
]

export function SportsSection() {
  return (
    <section id="sports" className="px-8 md:px-16 py-28 bg-[#0a0a0a]">
      <FadeIn>
        <SectionLabel>Sports</SectionLabel>
        <SectionTitle>I play a lot.<br />Results are mixed.</SectionTitle>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.07)] mt-8">
          {sports.map(s => (
            <div key={s.name} className="bg-[#0a0a0a] hover:bg-[#111114] transition-colors duration-200 p-7">
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="font-semibold text-[#f0ede8] text-sm mb-1.5">{s.name}</div>
              <div className="text-xs text-[#7a7680] leading-relaxed">{s.note}</div>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={180}>
        <div className="mt-6 p-5 border border-[rgba(255,107,107,0.15)] rounded-xl bg-[rgba(255,107,107,0.03)]">
          <div className="text-[10px] tracking-[0.15em] uppercase text-[#ff6b6b] mb-2">Honest sports confession</div>
          <p className="text-sm text-[#7a7680] leading-[1.82]">
            I have raged — very quietly, alone — at FC when my 4-3-3 collapsed in the 89th minute because I didn&apos;t track back. I have lost table tennis matches I was heavily favoured in. I have been bowled out first ball when I was &quot;warming up.&quot; Sport is relentlessly humbling. I keep coming back because I genuinely think competing at things, even small things, is one of the better ways to spend time.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
