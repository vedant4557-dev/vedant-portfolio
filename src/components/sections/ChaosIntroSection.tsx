import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const cells = [
  { tag: 'Academically', title: 'Studying three things simultaneously', body: "B.Com at Hansraj. CA. CFA. I did not fully think through the time implications of this. The exams are ongoing. The results are mixed. Specifically, CA Inter has been a recurring character in my life." },
  { tag: 'Organisationally', title: 'Categorically not a planner', body: "I have started and abandoned more productivity systems than I care to admit. Notion. Physical journals. Color-coded calendars. The most consistent thing in my routine is ordering from Zepto when I realise I've run out of something." },
  { tag: 'Intellectually', title: 'Goes down rabbit holes for hours', body: "I started reading about why some Indian cities work and ended up reading about 19th century Dutch East India Company bond issuances. This is a normal Tuesday for me. I find this more fun than embarrassing." },
  { tag: 'Generally', title: 'Ambitious in a chaotic way', body: "I want to understand how the world works, build something eventually, and have as many interesting conversations as possible. I do not have a master plan. I have a very long list of questions and a shorter list of answers." },
]

export function ChaosIntroSection() {
  return (
    <section id="chaos" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>What kind of person are you dealing with</SectionLabel>
        <SectionTitle>An honest introduction.</SectionTitle>
        <p className="text-[#7a7680] text-sm mb-8">Not the LinkedIn version.</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="grid md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.07)]">
          {cells.map(c => (
            <div key={c.tag} className="bg-[#111114] hover:bg-[#1a1a1f] transition-colors duration-200 p-7">
              <div className="text-[10px] tracking-[0.1em] uppercase border border-[rgba(255,255,255,0.13)] rounded-full px-2 py-0.5 text-[#4a4850] inline-block mb-3">{c.tag}</div>
              <div className="font-semibold text-[#f0ede8] mb-2 text-[0.9rem]">{c.title}</div>
              <div className="text-[0.82rem] text-[#7a7680] leading-[1.78]">{c.body}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
