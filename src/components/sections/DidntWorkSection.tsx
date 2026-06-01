import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const failures = [
  { title: 'CA Inter', tag: 'Exam', body: 'More than one attempt. The paper is hard. My preparation has been inconsistent. I have made peace with this, mostly. Still going.' },
  { title: 'The habit of waking up at 6am', tag: 'Habit', body: 'Tried this multiple times across multiple years. Average streak: 4 days. Current status: aspirational.' },
  { title: 'A daily journaling practice', tag: 'Habit', body: 'Have started this approximately six times. The longest streak was eleven days. Bought a very nice notebook for the most recent attempt. It has twelve pages filled.' },
  { title: 'A cricket analytics side project', tag: 'Project', body: "Got about 30% in before realising I didn't have the data pipeline set up properly and also CA deadlines were happening. Still interested in the idea. Still not worked on it since." },
  { title: 'Reading fewer Substacks', tag: 'Habit', body: 'I subscribe to too many newsletters. I have tried to cut down. I keep finding new ones that seem relevant. Current inbox: a situation.' },
  { title: 'Not ordering from Zepto', tag: 'Habit', body: "I always think I'll be more organised. I never am. Zepto is there. The cycle continues." },
  { title: 'Finishing things I start', tag: 'General', body: 'I am a much better starter than finisher. I am aware of this. I am working on it. The irony is not lost on me.' },
]

export function DidntWorkSection() {
  return (
    <section id="didntwork" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>Things that didn&apos;t work</SectionLabel>
        <SectionTitle>Failed experiments.</SectionTitle>
        <p className="text-[#7a7680] text-sm max-w-md mb-8">All of these seemed like good ideas at the time. Some of them still do, honestly.</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="flex flex-col">
          {failures.map(f => (
            <div key={f.title} className="flex flex-col gap-1.5 py-5 border-b border-[rgba(255,255,255,0.07)]">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-[#f0ede8] text-[0.92rem] font-medium">{f.title}</span>
                <span className="text-[10px] tracking-[0.1em] uppercase border border-[rgba(255,255,255,0.13)] rounded-full px-2 py-0.5 text-[#4a4850]">{f.tag}</span>
              </div>
              <p className="text-[0.82rem] text-[#7a7680] leading-[1.75]">{f.body}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
