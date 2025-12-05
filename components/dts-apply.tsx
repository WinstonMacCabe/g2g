"use client"
import { useEffect, useState } from "react"

export function DTSApply() {
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

    const element = document.getElementById("apply-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="apply-section" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Header */}
          <div
            className="mb-20 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-balance mb-8">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground/80 text-balance max-w-3xl mx-auto font-light leading-relaxed">
              Take the first step toward transformation. Join thousands who have discovered their calling through School of Missions.
            </p>
          </div>

          {/* Application Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {[
              {
                step: "1",
                title: "Submit Interest Form",
                description: "Complete our online interest form with your personal information.",
              },
              {
                step: "2",
                title: "Interview Process",
                description: "Participate in a personal interview to discuss your goals and readiness for School of Missions.",
              },
              {
                step: "3",
                title: "Secure Your Spot",
                description: "Complete enrollment requirements and begin preparing for your School of Missions experience.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center transition-all duration-1000 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transitionDelay: `${400 + index * 200}ms`,
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary-foreground font-light text-2xl group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 ease-out">
                  {item.step}
                </div>
                <h3 className="text-xl font-light tracking-wide mb-6">{item.title}</h3>
                <p className="text-muted-foreground/80 font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Application Deadlines 
          <div className="bg-card/50 border border-border rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6">Application Deadlines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Dec 1, 2024</div>
                <div className="text-muted-foreground">Early Application Deadline</div>
                <div className="text-sm text-muted-foreground mt-1">$200 discount applied</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Dec 15, 2024</div>
                <div className="text-muted-foreground">Final Application Deadline</div>
                <div className="text-sm text-muted-foreground mt-1">Standard pricing</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons *
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Start Your Application
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-transparent">
              Schedule Info Session
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-center text-muted-foreground"></div>
        </div>
      </div>
    </section>
  )
}
