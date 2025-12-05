"use client"

import { useState, useEffect } from "react"

export function YouthCampPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({
    hero: false,
    details: false,
    cta: false,
  })

  useEffect(() => {
    setIsVisible((prev) => ({ ...prev, hero: true }))

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Trigger animations on scroll
      const detailsSection = document.getElementById("details")
      if (detailsSection) {
        const rect = detailsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, details: true }))
        }
      }

      const ctaSection = document.getElementById("cta")
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible((prev) => ({ ...prev, cta: true }))
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-white text-black font-serif">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Subtle background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/youth.jpg"
            alt="Youth Camp"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${scrollY * -0.15}px)`,
              transition: "transform 0.3s ease-out",
              filter: "brightness(0.92) contrast(1.05)",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/15" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Subtitle */}
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-sm font-light tracking-widest uppercase text-white">Summer 2025 Experience</span>
            <div className="w-12 h-px bg-black mx-auto mt-4" />
          </div>

          {/* Main Title */}
          <h1
            className={`text-7xl md:text-8xl font-light tracking-tighter leading-tight mb-12 text-white transition-all duration-1000 ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{
              transitionDelay: "200ms",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            Catalyst
            <br />
            <span className="font-extralight">Youth Camp</span>
          </h1>

          {/* Description */}
          <div
            className={`transition-all duration-1000 ${
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-lg md:text-xl text-white font-light leading-relaxed max-w-2xl mx-auto mb-8">
A missional camp for high school students who are ready to go all in for Jesus.
            </p>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 text-sm">
                <div className="text-center">
                  <div className="text-white font-light text-lg mb-2">Grades 9–12</div>
                  <div className="w-8 h-px bg-gray-400" />
                </div>
                <div className="text-center">
                  <div className="text-white font-light text-lg mb-2">Date TBA</div>
                  <div className="w-8 h-px bg-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in-up"
          style={{
            opacity: Math.max(0, 1 - scrollY / 300),
            transition: "opacity 0.3s ease-out",
          }}
        >
          <div className="w-6 h-10 border border-white rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px w-24 bg-gray-300 mx-auto" />

      {/* DETAILS SECTION */}
      <section id="details" className="relative py-32 px-6 max-w-5xl mx-auto">
        <div className="space-y-20">
          {/* What is Gathering */}
          <div
            className={`transition-all duration-1000 ${
              isVisible.details ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-black">What is Catalyst Youth Camp?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
              Catalyst Youth camp is a multiple day experience designed to train and equip youth with practical tools to lead out their faith in their contexts. 
            </p>
          </div>

          {/* What to Expect */}
          <div
            className={`transition-all duration-1000 ${
              isVisible.details ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-black">What to Expect</h2>

            <div className="space-y-12">
              <div className="border-l-2 border-black pl-8">
                <h3 className="text-2xl font-light mb-3 text-black">Worship & Teaching</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Gather to seek God through worship, prayer and teaching.
                </p>
              </div>

              <div className="border-l-2 border-black pl-8">
                <h3 className="text-2xl font-light mb-3 text-black">Get Equipped</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Get equipped with practical training in spiritual gifts, leadership, and missions skills.
                </p>
              </div>

              <div className="border-l-2 border-black pl-8">
                <h3 className="text-2xl font-light mb-3 text-black">Find Community</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Have fun in community with other youth who are on fire for God.
                </p>
              </div>

              <div className="border-l-2 border-black pl-8">
                <h3 className="text-2xl font-light mb-3 text-black">Outreach/Evangelism </h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Step out in local outreach opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px w-24 bg-gray-300 mx-auto" />

      {/* CTA SECTION */}
      <section id="cta" className="relative py-32 px-6 flex items-center justify-center">
        <div
          className={`text-center max-w-3xl transition-all duration-1000 ${
            isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-6xl md:text-7xl font-light mb-8 text-black leading-tight">Be the Catalyst</h2>
          <p className="text-xl text-gray-700 font-light leading-relaxed mb-12">
Come ready to encounter God, be transformed, and ignite change in your world.
Your generation is called to make a difference and it starts here.
          </p>

          {/* Coming Soon Button */}
          <button className="px-12 py-4 border-2 border-black text-black font-light text-lg hover:bg-black hover:text-white transition-all duration-500 ease-out transform hover:scale-105">
            Registration Coming Soon
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-12 px-6 text-center text-sm text-gray-600 font-light">
        <p>© 2025 Gather to Go.</p>
      </footer>
    </div>
  )
}
