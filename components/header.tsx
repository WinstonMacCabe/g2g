"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDarkHero =
    pathname === "/youth-camp" ||
    pathname === "/" ||
    pathname === "/home"

  const headerBg = isDarkHero && !scrolled ? "bg-transparent" : "bg-white/80 backdrop-blur-md"
  const textColor = isDarkHero && !scrolled ? "text-white" : "text-black"

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500 ${headerBg}`}
    >
      {/* Logo / Home Link */}
      <Link href="/" className="flex items-center space-x-2 group">
        <img
          src="/smal text.png"
          alt="Gather to Go Logo"
          className={`h-8 md:h-10 w-auto transition-opacity duration-300 ${
            isDarkHero && !scrolled ? "opacity-90" : "opacity-100"
          } group-hover:opacity-80`}
        />
      </Link>

      {/* Hamburger Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`p-2 rounded-lg transition-colors duration-300 ${textColor}`}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-6 md:right-12 bg-white rounded-2xl shadow-2xl p-6 min-w-[250px] animate-scale-in">
          <nav className="space-y-4">
            <Link href="/som" className="block text-black hover:text-black/60 transition-colors text-lg">
              School of Missions
            </Link>
            <Link href="/youth-camp" className="block text-black hover:text-black/60 transition-colors text-lg">
              Youth Camp
            </Link>
            {/*
            <Link href="/livingrooms" className="block text-black hover:text-black/60 transition-colors text-lg">
              Livingrooms
            </Link>
            <Link href="/evangelism-training" className="block text-black hover:text-black/60 transition-colors text-lg">
              Evangelism Training
            </Link>
            */}
          </nav>
        </div>
      )}
    </header>
  )
}