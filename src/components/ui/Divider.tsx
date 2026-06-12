'use client'
import { useRef, useEffect, useState, ReactNode } from 'react'

export function Divider() {
  return <div className="w-full h-px bg-[rgba(255,255,255,0.06)]" />
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-5 h-px bg-[#c9a84c]" />
      <span className="text-[#c9a84c] text-[10px] tracking-[0.18em] uppercase font-medium">
        {children}
      </span>
    </div>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.05] tracking-tight mb-4 text-[#f0ede8]"
      style={{ fontFamily: 'var(--font-playfair)' }}
    >
      {children}
    </h2>
  )
}

export function Sub({ children }: { children: ReactNode }) {
  return (
    <p className="text-zinc-400 text-base leading-relaxed">
      {children}
    </p>
  )
}

export function Chip({
  children,
  variant = 'default',
}: {
  children: ReactNode
  variant?: 'default' | 'grn' | 'amb'
}) {
  const styles = {
    default: 'border-white/10 text-zinc-300',
    grn: 'border-green-500/30 text-green-400',
    amb: 'border-amber-500/30 text-amber-400',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${styles[variant]}`}
    >
      {children}
    </span>
  )
}

export function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      {
        threshold: 0.07,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(16px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
