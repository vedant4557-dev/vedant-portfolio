export function Footer() {
  return (
    <footer className="px-8 md:px-10 py-7 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[#4a4850]">
      <span>Vedant Agrawal — Titlagarh to wherever this goes</span>
      <span>last updated: whenever I remembered to</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  )
}
