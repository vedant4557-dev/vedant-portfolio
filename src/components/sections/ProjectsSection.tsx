import { FadeIn, SectionLabel, SectionTitle, Sub, Chip } from '@/components/ui/Divider'

type Status = 'live' | 'wip' | 'paused'

const projects: {
  name: string; lang: string; desc: string; origin: string; status: Status; tags: string[]; stars: number
}[] = [
  { name: 'tax-bracket-viz', lang: 'Python + Streamlit', desc: 'Interactive visualiser for Indian income tax slabs under both old and new regimes. Built while trying to explain the difference to someone and realising I couldn\'t do it quickly with words.', origin: 'Started because: explaining old vs new regime in conversation is terrible', status: 'live', tags: ['Finance'], stars: 23 },
  { name: 'drhp-reader', lang: 'Python', desc: 'CLI tool to extract and summarise key sections from Indian DRHP filings. Risk factors, financials, promoter background. Because reading 400-page PDFs manually is a crime against time.', origin: 'Started because: I kept losing my place in long DRHP documents', status: 'wip', tags: ['Investing'], stars: 11 },
  { name: 'ca-notes-search', lang: 'Next.js', desc: 'Semantic search over my CA study notes. Turns out when you have 800 pages of notes, CTRL+F is not enough. This was supposed to take a weekend. It took three weeks.', origin: 'Started because: couldn\'t find my own notes during revision', status: 'live', tags: ['Tools'], stars: 7 },
  { name: 'mf-screener', lang: 'Python', desc: 'Mutual fund screener that filters by expense ratio, rolling returns, and AUM concentration. The existing screeners show you everything except what you actually want.', origin: 'Started because: existing screeners are frustrating to use', status: 'wip', tags: ['Investing'], stars: 18 },
  { name: 'startup-metrics-cheatsheet', lang: 'Markdown + Web', desc: 'A living reference for startup and VC metrics — CAC, LTV, Rule of 40, NRR. What they mean, how to calculate them, when they\'re being gamed in a pitch deck.', origin: 'Started because: kept Googling the same definitions', status: 'live', tags: ['Reference'], stars: 41 },
  { name: 'cricket-analytics-nb', lang: 'Python / Jupyter', desc: 'Notebooks exploring IPL data — win probability curves, impact scores, bowling matchup analysis. Got about 60% done before CA exams. Returning to this.', origin: 'Started because: wanted to learn pandas on something interesting', status: 'paused', tags: ['Sports'], stars: 5 },
]

const statusVariant: Record<Status, 'grn' | 'amb' | 'default'> = {
  live: 'grn', wip: 'amb', paused: 'default',
}

export function ProjectsSection() {
  return (
    <section id="projects" className="px-8 md:px-16 py-24 bg-[#0d0d0f]">
      <FadeIn>
        <SectionLabel>things I&apos;ve built</SectionLabel>
        <SectionTitle>Projects</SectionTitle>
        <Sub>Some are useful. Some were useful to me once. Some are experiments that got out of hand.</Sub>
      </FadeIn>
      <FadeIn delay={80}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)]">
          {projects.map(p => (
            <div key={p.name} className="bg-[#0d0d0f] hover:bg-[#131316] transition-colors duration-150 p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="font-mono text-[0.88rem] font-medium text-[#ededea]">{p.name}</div>
                <div className="font-mono text-[0.65rem] text-[#555460] shrink-0">{p.lang}</div>
              </div>
              <p className="text-[0.82rem] text-[#9190a0] leading-[1.7] flex-1">{p.desc}</p>
              <div className="font-mono text-[0.7rem] text-[#555460] italic border-l-2 border-[rgba(255,255,255,0.11)] pl-2.5 leading-[1.5]">
                {p.origin}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Chip variant={statusVariant[p.status]}>{p.status}</Chip>
                {p.tags.map(t => <Chip key={t}>{t}</Chip>)}
                <span className="font-mono text-[0.65rem] text-[#555460] ml-auto">★ {p.stars}</span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
