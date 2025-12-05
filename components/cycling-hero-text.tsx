"use client"

import { useState, useEffect } from "react"

interface CyclingHeroTextProps {
  phrases: string[]
  interval?: number
}

export function CyclingHeroText({ phrases, interval = 4000 }: CyclingHeroTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length)
        setIsTransitioning(false)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [phrases.length, interval])

  return (
    <h1 className="text-[14vw] sm:text-[12vw] md:text-[16vw] lg:text-[12vw] font-bold tracking-tighter leading-[0.85] text-white mb-4 md:mb-6 font-futura h-auto">
      <div className="relative overflow-hidden">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {phrases[currentIndex].split("\n").map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      </div>
    </h1>
  )
}
