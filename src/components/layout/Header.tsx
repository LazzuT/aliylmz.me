"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/oyunculuk-seslendirme", label: "Portfolyo" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
]

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-medium text-xl tracking-wider text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Ali Yılmaz
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm px-1 py-0.5",
                pathname === link.href ? "text-violet-400" : "text-zinc-400"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menüyü aç/kapat"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block text-2xl font-medium transition-colors",
                  pathname === link.href 
                    ? "text-violet-400" 
                    : "text-zinc-400 hover:text-zinc-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
