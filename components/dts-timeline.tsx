"use client"
import { useEffect, useState } from "react"

export function DTSTimeline() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("timeline-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline-section" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className="text-center mb-24 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-balance mb-8">
              Program Timeline & Investment
            </h2>
            <p className="text-lg text-muted-foreground/80 text-balance max-w-2xl mx-auto font-light leading-relaxed">
              A comprehensive 6-month journey divided into two transformative phases
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-primary/20 via-primary/60 to-primary/20 hidden lg:block transition-all duration-1500 ease-out"
              style={{
                height: isVisible ? "100%" : "0%",
                transitionDelay: "400ms",
              }}
            />

            {/* Phase 1 */}
            <div className="relative mb-16 lg:mb-32">
              <div className="lg:flex lg:items-center lg:gap-16">
                <div
                  className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0 transition-all duration-1000 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                    transitionDelay: "600ms",
                  }}
                >
                  <div className="group bg-card/40 backdrop-blur-sm border border-border/30 rounded-3xl p-10 hover:bg-card/60 hover:border-border/50 hover:shadow-xl transition-all duration-500 ease-out">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-primary-foreground font-light text-2xl group-hover:scale-110 transition-transform duration-300">
                        1
                      </div>
                      <div>
                        <h3 className="text-2xl font-light tracking-wide">Lecture Phase</h3>
                        <p className="text-muted-foreground/70 font-medium">Months 1-3</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <p className="text-muted-foreground/80 leading-relaxed font-light">
                        Intensive classroom learning in Kona, Hawaii covering biblical foundations, character
                        development, and ministry preparation.
                      </p>
                      <ul className="space-y-4 text-sm text-muted-foreground/70">
                        {[
                          "Biblical Studies & Theology",
                          "Character Development",
                          "Evangelism Training",
                          "Worship & Intercession",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-4 transition-all duration-300 hover:text-muted-foreground"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                              transitionDelay: `${800 + index * 100}ms`,
                            }}
                          >
                            <div className="w-2 h-2 bg-primary/60 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="lg:w-1/2 lg:pl-16 transition-all duration-1000 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(50px)",
                    transitionDelay: "800ms",
                  }}
                >
                  <div className="group overflow-hidden rounded-3xl">
                    <img
                      src="/lecture.avif"
                      alt="DTS Lecture Phase"
                      className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative">
              <div className="lg:flex lg:items-center lg:gap-16 lg:flex-row-reverse">
                <div
                  className="lg:w-1/2 lg:pl-16 mb-12 lg:mb-0 transition-all duration-1000 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(50px)",
                    transitionDelay: "1000ms",
                  }}
                >
                  <div className="group bg-card/40 backdrop-blur-sm border border-border/30 rounded-3xl p-10 hover:bg-card/60 hover:border-border/50 hover:shadow-xl transition-all duration-500 ease-out">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-primary-foreground font-light text-2xl group-hover:scale-110 transition-transform duration-300">
                        2
                      </div>
                      <div>
                        <h3 className="text-2xl font-light tracking-wide">Outreach Phase</h3>
                        <p className="text-muted-foreground/70 font-medium">Months 4-6</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <p className="text-muted-foreground/80 leading-relaxed font-light">
                        Hands-on ministry experience in various global locations, applying what you've learned in
                        real-world cross-cultural settings.
                      </p>
                      <ul className="space-y-4 text-sm text-muted-foreground/70">
                        {[
                          "Cross-Cultural Ministry",
                          "Evangelism & Discipleship",
                          "Community Service",
                          "Leadership Development",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-4 transition-all duration-300 hover:text-muted-foreground"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                              transitionDelay: `${1200 + index * 100}ms`,
                            }}
                          >
                            <div className="w-2 h-2 bg-primary/60 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="lg:w-1/2 lg:pr-16 transition-all duration-1000 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-50px)",
                    transitionDelay: "1200ms",
                  }}
                >
                  <div className="group overflow-hidden rounded-3xl">
                    <img
                      src="/ev.avif"
                      alt="DTS Outreach Phase"
                      className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
