'use client'
import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`
        ref.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <div ref={ref} aria-hidden="true" style={{
      position: 'fixed', width: '400px', height: '400px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
      pointerEvents: 'none', transform: 'translate(-50%,-50%)', zIndex: 9999,
      transition: 'opacity 0.3s ease',
    }} />
  )
}
