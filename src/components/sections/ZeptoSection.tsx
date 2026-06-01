import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const items = [
  { label: 'milk (again)', frequent: true },
  { label: 'bread', frequent: true },
  { label: 'charger cable', frequent: false },
  { label: 'maggi', frequent: true },
  { label: 'green tea', frequent: false },
  { label: 'chips (stress studying)', frequent: false },
  { label: 'eggs', frequent: true },
  { label: "pen — for the notebook I'm definitely journaling in", frequent: false },
  { label: 'cold drink', frequent: false },
  { label: 'poha', frequent: true },
  { label: 'headphone case I keep misplacing', frequent: false },
  { label: 'coconut water at midnight', frequent: false },
  { label: 'curd', frequent: true },
  { label: 'some ingredient I realised I was out of while cooking', frequent: false },
]

export function ZeptoSection() {
  return (
    <section id="zepto" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>Evidence of poor planning</SectionLabel>
        <SectionTitle>Things I buy on Zepto<br />at 11pm.</SectionTitle>
        <p className="text-[#7a7680] text-sm max-w-md mb-8">This section exists because it&apos;s more honest than pretending I&apos;m organised.</p>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="flex flex-wrap gap-2 mb-4">
          {items.map(item => (
            <span key={item.label} className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-200 ${
              item.frequent
                ? 'border-[rgba(201,168,76,0.25)] text-[#c9a84c] bg-[rgba(201,168,76,0.04)]'
                : 'border-[rgba(255,255,255,0.07)] text-[#7a7680] hover:border-[rgba(255,255,255,0.13)] hover:text-[#f0ede8]'
            }`}>
              {item.label}
            </span>
          ))}
        </div>
        <p className="font-mono text-xs text-[#4a4850]">highlighted = repeat offenders</p>
      </FadeIn>
    </section>
  )
}
