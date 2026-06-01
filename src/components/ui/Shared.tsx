'use client'
import { useRef, useEffect, useState, ReactNode } from 'react'

export function Divider() {
  return <div className="h-px bg-[rgba(255,255,255,0.06)]" />
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-[#555460] mb-4">
      // {children}
    </div>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[1.65rem] font-semibold tracking-[-0.02em] leading-[1.2] mb-2 text-[#ededea]">
      {children}
    </h2>
  )
}

export function Sub({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[#9190a0] text-[0.88rem] leading-[1.75] max-w-lg mb-8 ${className}`}>
      {children}
    </p>
  )
}

export function Chip({ children, variant = 'default' }: { children: ReactNode; variant?: 'default' | 'active' | 'grn' | 'amb' | 'red' }) {
  const variants = {
    default: 'border-[rgba(255,255,255,0.11)] text-[#555460]',
    active: 'border-[rgba(99,102,241,0.4)] text-[#818cf8] bg-[rgba(99,102,241,0.08)]',
    grn: 'border-[rgba(52,211,153,0.3)] text-[#34d399] bg-[rgba(52,211,153,0.07)]',
    amb: 'border-[rgba(251,191,36,0.3)] text-[#fbbf24] bg-[rgba(251,191,36,0.07)]',
    red: 'border-[rgba(248,113,113,0.3)] text-[#f87171] bg-[rgba(248,113,113,0.07)]',
  }
  return (
    <span className={`inline-flex items-center font-mono text-[0.65rem] tracking-[0.08em] uppercase border rounded px-1.5 py-0.5 ${variants[variant]}`}>
      {children}
    </span>
  )
}

export function FadeIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={className}
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(14px)', transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms` }}>
      {children}
    </div>
  )
}
