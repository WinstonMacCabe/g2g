"use client"
import { useEffect, useState } from "react"

interface DTSHeroProps {
  backgroundType?: "photo" | "video"
  backgroundUrl?: string
  videoUrl?: string
}

export function DTSHero({
  backgroundType = "photo",
  backgroundUrl = "/som.png",
  videoUrl,
}: DTSHeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32 lg:pt-0">
      <div className="absolute inset-0 z-0">
        {backgroundType === "video" && videoUrl ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{
                transform: `translateY(${scrollY * -0.1}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-white/80" />
          </>
        ) : (
          <>
            <div
              className="w-full h-full absolute"
              style={{
                backgroundImage: `url('${backgroundUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `translateY(${scrollY * -0.12}px) scale(${1 + scrollY * 0.0001})`,
                transition: "transform 0.3s ease-out",
                filter: "brightness(0.88) contrast(1.08) saturate(0.95)",
              }}
            />
            <div className="absolute inset-0 bg-white/82" />
          </>
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="mb-10 md:mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "all 800ms cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >

        </div>

        {/* Main Heading with creative reveal */}
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none mb-8 md:mb-10 text-black"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) rotateX(0)" : "translateY(40px) rotateX(-10deg)",
            transition: "all 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            transitionDelay: "150ms",
            letterSpacing: "-0.025em",
          }}
        >
          <span className="block">School of</span>
          <span className="block italic font-extralight mt-2">Missions</span>
        </h1>

        {/* Subtitle with staggered fade */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 900ms ease-out",
            transitionDelay: "350ms",
          }}
        >
          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16 text-balance">
            Transform your life through intensive biblical training, character development, and hands-on ministry
            experience across six transformative months.
          </p>
        </div>

        {/* Key Details Grid with hover animations */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 1000ms ease-out",
            transitionDelay: "500ms",
          }}
        >
          {[
            { value: "6 Months", label: "Full Program" },
            { value: "September 2026", label: "Start Date" },
            { value: "Halifax & Nations", label: "Location" },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/40 backdrop-blur-xl border border-black/8 rounded-sm p-8 md:p-10 cursor-pointer overflow-hidden relative"
              style={{
                transitionDelay: `${600 + index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-light text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-light tracking-wide uppercase">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Details Box with staggered animation */}
        <div
          className="bg-white/30 backdrop-blur-2xl border border-black/6 rounded-sm p-10 md:p-14 max-w-3xl mx-auto mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 1100ms ease-out",
            transitionDelay: "700ms",
          }}
        >
          <h3 className="text-xl md:text-2xl font-light mb-8 text-black tracking-tight">Program Location</h3>
          <div className="space-y-5 text-gray-700">
            {[
              { label: "Lecture Phase", value: "Halifax, Nova Scotia (3 months)" },
              { label: "Outreach Phase", value: "Various Global Locations (3 months)" },
              { label: "Housing", value: "On-campus dormitory accommodation" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                <div className="w-2 h-2 bg-black/40 rounded-full mt-2 group-hover:bg-black group-hover:scale-125 transition-all duration-300" />
                <div>
                  <span className="font-light text-black">{item.label}:</span>
                  <span className="font-light text-gray-600 ml-2">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        style={{
          opacity: Math.max(0, 1 - scrollY / 400),
          transform: `translateX(-50%) translateY(${Math.min(scrollY * 0.5, 20)}px)`,
          transition: "opacity 0.3s ease-out",
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="text-xs font-light text-gray-600 tracking-widest uppercase">Scroll</div>
          <div className="w-6 h-10 border border-black/30 rounded-full flex items-center justify-center">
            <div
              className="w-1 h-2 bg-black/40 rounded-full"
              style={{
                animation: "bounce 2s infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
