import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { CursorGlow } from '@/components/ui/CursorGlow'

export const metadata: Metadata = {
  title: 'Vedant Agrawal',
  description: "21. CA student at Hansraj, Delhi. Pursuing CA and CFA. Building things around finance and investing. This is not a portfolio.",
  authors: [{ name: 'Vedant Agrawal' }],
  openGraph: {
    title: 'Vedant Agrawal',
    description: 'This is not a portfolio.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CursorGlow />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
