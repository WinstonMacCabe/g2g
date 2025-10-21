"use client"
import { useEffect, useState } from "react"

export function DTSHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/\.avif"
          className="w-full h-full object-cover opacity-20 transition-all duration-1000 ease-out"
          style={{
            transform: isVisible ? "scale(1)" : "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance mb-8 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "200ms",
            }}
          >
            Discipleship Training School
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground/90 text-balance mb-16 max-w-3xl mx-auto font-light leading-relaxed transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "400ms",
            }}
          >
            Transform your life through intensive biblical training, character development, and hands-on ministry
            experience.
          </p>

          {/* Key Details Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "600ms",
            }}
          >
            {[
              { value: "6 Months", label: "Full Program Duration" },
              { value: "September 2025", label: "Next Start Date" },
              { value: "Halifax & The Nations", label: "Outreach Location" },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-card/40 backdrop-blur-md border border-border/30 rounded-2xl p-8 hover:bg-card/60 hover:border-border/50 transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg"
              >
                <div className="text-3xl font-light text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground/80 font-medium tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Location Details */}
          <div
            className="bg-card/20 backdrop-blur-xl border border-border/20 rounded-3xl p-10 max-w-3xl mx-auto transition-all duration-1000 ease-out hover:bg-card/30 hover:border-border/30"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "800ms",
            }}
          >
            <h3 className="text-xl font-light mb-6 text-foreground/90">Program Location</h3>
            <div className="space-y-4 text-muted-foreground/80">
              <p className="flex items-center justify-center gap-3">
                <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
                <strong className="text-foreground font-medium">Lecture Phase:</strong> Halifax, Nova Scotia (3 months)
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
                <strong className="text-foreground font-medium">Outreach Phase:</strong> Various Global Locations (3
                months)
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
                <strong className="text-foreground font-medium">Housing:</strong> On-campus dormitory style
                accommodation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
