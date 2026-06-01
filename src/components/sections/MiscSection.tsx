import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const blocks = [
  {
    title: 'around the internet',
    items: [
      'Reading: Howard Marks, Patrick McKenzie, Byrne Hobart',
      'Podcasts: Acquired, Plain English, The Seen and the Unseen',
      'Obsessing over IPL analytics and why teams don\'t use data better',
      'FC — currently trying a 4-2-3-1. Results pending.',
    ]
  },
  {
    title: 'less interesting facts',
    items: [
      'From Titlagarh, Odisha — a town most maps skip',
      'Table tennis player. Will challenge you. Has lost to shorter people.',
      'Zepto delivery frequency is evidence I can\'t plan a grocery run',
      'Has started journaling approximately six times. Max streak: 11 days.',
    ]
  }
]

export function MiscSection() {
  return (
    <section id="misc" className="px-8 md:px-16 py-24 bg-[#131316]">
      <FadeIn>
        <SectionLabel>misc</SectionLabel>
        <SectionTitle>Other things</SectionTitle>
      </FadeIn>
      <FadeIn delay={80}>
        <div className="grid md:grid-cols-2 gap-10 mt-6">
          {blocks.map(block => (
            <div key={block.title}>
              <div className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#555460] mb-3 pb-2.5 border-b border-[rgba(255,255,255,0.06)]">
                {block.title}
              </div>
              {block.items.map(item => (
                <div key={item} className="flex items-baseline gap-2 text-[0.83rem] text-[#9190a0] py-2">
                  <span className="text-[#818cf8] text-[0.72rem] shrink-0">→</span>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
