import { FadeIn, SectionLabel } from '@/components/ui/Divider'

export function ContactSection() {
  return (
    <section id="contact" className="px-8 md:px-16 py-32 bg-[#0a0a0a] text-center">
      <FadeIn>
        <SectionLabel>Say hi</SectionLabel>
        <h2 className="font-serif font-black text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-tight mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
          I like interesting<br />conversations.
        </h2>
        <p className="text-[#7a7680] text-[0.9rem] max-w-[400px] mx-auto mb-9 leading-[1.82]">
          About finance, investing, startups, things you&apos;re building, or anything genuinely interesting. Very low bar for reaching out.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:vedant@example.com" className="px-5 py-3 bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm rounded-md hover:bg-[#e8d5b0] transition-colors duration-200">Email →</a>
          {['Twitter / X', 'LinkedIn'].map(l => (
            <a key={l} href="#" className="px-5 py-3 border border-[rgba(255,255,255,0.13)] text-[#f0ede8] text-sm rounded-md hover:border-[rgba(255,255,255,0.25)] hover:text-[#c9a84c] transition-all duration-200">{l}</a>
          ))}
          <a href="https://github.com/vedantag" target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 border border-[rgba(255,255,255,0.13)] text-[#f0ede8] text-sm rounded-md hover:border-[rgba(201,168,76,0.4)] hover:text-[#c9a84c] transition-all duration-200 inline-flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.165 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.254-.447-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
            GitHub
          </a>
          <a href="https://read.cv" target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 border border-[rgba(255,255,255,0.13)] text-[#f0ede8] text-sm rounded-md hover:border-[rgba(255,255,255,0.25)] hover:text-[#c9a84c] transition-all duration-200">Read.cv</a>
        </div>
      </FadeIn>
    </section>
  )
}
