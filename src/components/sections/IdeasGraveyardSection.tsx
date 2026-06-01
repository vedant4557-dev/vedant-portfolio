import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

type Status = 'abandoned' | 'paused' | 'still interested'

const ideas: { title: string; status: Status; body: string }[] = [
  { title: 'Cricket analytics dashboard for middle-tier teams', status: 'abandoned', body: "Got 30% of the way through. Hit a data pipeline problem. Then CA deadlines. Then the problem was still there when I came back. Still think the core idea is right." },
  { title: "A newsletter explaining what's actually happening in the Indian economy", status: 'paused', body: "Wrote two issues. They were okay. Then got very busy with exams and stopped. The gap in the market still exists. Maybe eventually." },
  { title: "Study tool for CA students that doesn't make you want to give up", status: 'still interested', body: "The existing options are bad. I know this from personal experience. Haven't built anything yet. But I have opinions about what it should look like." },
  { title: "Zerodha watchlist → Discord alert bot", status: 'abandoned', body: "Worked locally. Never deployed it properly. Kept meaning to. It's been four months." },
  { title: 'Podcast: what people actually do at work vs what their job title says', status: 'paused', body: "Thought of this because I find the gap between job titles and real work fascinating. Have not recorded a single episode. Have thought about it a lot though." },
]

const statusStyle: Record<Status, string> = {
  abandoned: 'text-[#ff6b6b] border-[rgba(255,107,107,0.2)]',
  paused: 'text-[#4a4850] border-[rgba(255,255,255,0.13)]',
  'still interested': 'text-[#7fad8f] border-[rgba(127,173,143,0.25)]',
}

export function IdeasGraveyardSection() {
  return (
    <section id="ideas" className="px-8 md:px-16 py-28 bg-[#0a0a0a]">
      <FadeIn>
        <SectionLabel>Half-finished and abandoned</SectionLabel>
        <SectionTitle>The ideas graveyard.</SectionTitle>
        <p className="text-[#7a7680] text-sm max-w-md mb-8">Every idea here felt good at the time. Some still do. None are fully done.</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="flex flex-col">
          {ideas.map((idea, i) => (
            <div key={i} className="py-5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="flex items-baseline gap-2 flex-wrap mb-1.5">
                <span className="text-[#f0ede8] text-[0.92rem] font-medium">{idea.title}</span>
                <span className={`text-[10px] tracking-[0.1em] uppercase border rounded-full px-2 py-0.5 ${statusStyle[idea.status]}`}>{idea.status}</span>
              </div>
              <p className="text-sm text-[#7a7680] leading-[1.78]">{idea.body}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
