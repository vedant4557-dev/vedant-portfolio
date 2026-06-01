'use client'
import { useEffect, useRef } from 'react'
import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const stats = [
  { n: '12', label: 'repos' },
  { n: '105', label: 'stars' },
  { n: '340+', label: 'commits this year' },
  { n: '6', label: 'languages' },
]

const repos = [
  { name: 'tax-bracket-viz', desc: 'Interactive old vs new tax regime visualiser. Built because explaining it verbally is a nightmare.', lang: 'Python', stars: 23, status: 'live' },
  { name: 'drhp-reader', desc: 'CLI to extract key sections from Indian IPO filings. Because 400-page PDFs are a crime against time.', lang: 'Python', stars: 11, status: 'wip' },
  { name: 'ca-notes-search', desc: 'Semantic search over 800 pages of CA notes. CTRL+F was not enough.', lang: 'TypeScript', stars: 7, status: 'live' },
  { name: 'mf-screener', desc: 'Mutual fund screener by expense ratio, rolling returns, AUM concentration.', lang: 'Python', stars: 18, status: 'wip' },
  { name: 'startup-metrics-ref', desc: 'CAC, LTV, Rule of 40, NRR — what they mean and when they\'re being gamed in pitch decks.', lang: 'Markdown', stars: 41, status: 'live' },
  { name: 'cricket-analytics-nb', desc: 'IPL data notebooks — win probability, impact scores, bowling matchups. ~60% done.', lang: 'Python', stars: 5, status: 'paused' },
]

const statusStyles: Record<string, string> = {
  live: 'text-[#7fad8f] border-[rgba(127,173,143,0.25)]',
  wip: 'text-[#c9a84c] border-[rgba(201,168,76,0.25)]',
  paused: 'text-[#4a4850] border-[rgba(255,255,255,0.13)]',
}

function ContribGraph() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const rng = (s: number) => { const x = Math.sin(s + 42) * 10000; return x - Math.floor(x) }
    for (let w = 0; w < 26; w++) {
      const col = document.createElement('div')
      col.style.cssText = 'display:flex;flex-direction:column;gap:3px'
      for (let d = 0; d < 7; d++) {
        const cell = document.createElement('div')
        const r = rng(w * 7 + d)
        const bg = r < 0.45 ? 'rgba(255,255,255,0.05)'
          : r < 0.65 ? 'rgba(201,168,76,0.2)'
          : r < 0.8  ? 'rgba(201,168,76,0.45)'
          : r < 0.92 ? 'rgba(201,168,76,0.7)'
          : '#c9a84c'
        cell.style.cssText = `width:11px;height:11px;border-radius:2px;background:${bg}`
        col.appendChild(cell)
      }
      ref.current.appendChild(col)
    }
  }, [])
  return <div ref={ref} style={{ display: 'flex', gap: '3px', flexWrap: 'wrap' }} />
}

export function GitHubSection() {
  return (
    <section id="github" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>Where the work actually lives</SectionLabel>
        <SectionTitle>GitHub</SectionTitle>
        <p className="text-[#7a7680] text-sm max-w-md mb-8">
          Most of what I build starts as a tool I wanted and couldn&apos;t find. Stars are a vanity metric. I check them anyway.
        </p>
      </FadeIn>

      {/* Stats */}
      <FadeIn delay={80}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.07)] mb-6">
          {stats.map(s => (
            <div key={s.label} className="bg-[#111114] p-5 text-center">
              <div className="font-serif font-bold text-2xl text-[#f0ede8] mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>{s.n}</div>
              <div className="text-[10px] tracking-[0.1em] uppercase text-[#4a4850]">{s.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Contribution graph */}
      <FadeIn delay={120}>
        <div className="p-5 bg-[#1e1e24] border border-[rgba(255,255,255,0.07)] rounded-xl mb-6">
          <div className="text-[10px] tracking-[0.12em] uppercase text-[#4a4850] mb-3 font-mono">contribution graph — last 26 weeks</div>
          <ContribGraph />
        </div>
      </FadeIn>

      {/* Repo cards */}
      <FadeIn delay={160}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.07)]">
          {repos.map(repo => (
            <div key={repo.name} className="bg-[#111114] hover:bg-[#1a1a1f] transition-colors duration-200 p-5 flex flex-col gap-2.5">
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-[0.82rem] font-medium text-[#f0ede8]">{repo.name}</span>
                <span className={`text-[10px] tracking-[0.08em] uppercase border rounded-full px-2 py-0.5 shrink-0 ${statusStyles[repo.status]}`}>{repo.status}</span>
              </div>
              <p className="text-[0.78rem] text-[#7a7680] leading-[1.7] flex-1">{repo.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#4a4850] font-mono">{repo.lang}</span>
                <span className="text-[10px] text-[#4a4850] font-mono">★ {repo.stars}</span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Link */}
      <FadeIn delay={200}>
        <a
          href="https://github.com/vedantag"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 text-[#c9a84c] text-sm border border-[rgba(201,168,76,0.2)] rounded-lg px-4 py-2.5 hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.35)] transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.165 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          github.com/vedantag → all repos
        </a>
      </FadeIn>
    </section>
  )
}
