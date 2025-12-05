"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What are the age requirements for School of Missions?",
    answer:
      "School of Missions is open to anyone 18 years and older. There is no upper age limit - we welcome students of all ages who are ready to grow in their faith and serve God.",
  },
  {
    question: "What if I can't afford the full program fee?",
    answer:
      "We offer fundraising support. Many students successfully raise support through their home churches, family, and friends. Our staff will help you develop a fundraising strategy.",
  },
  {
    question: "Can I choose my outreach location?",
    answer:
      "While we consider your preferences and calling, outreach locations are assigned based on ministry needs, team dynamics, and available opportunities. We have outreaches in over 100 countries worldwide.",
  },
  {
    question: "What should I bring to School of Missions?",
    answer:
      "You'll receive a detailed packing list upon acceptance. Generally, bring weather-appropriate clothing, personal items, Bible, notebook, and any required medications. Bedding and meals are provided.",
  },
  {
    question: "Is there internet and phone access?",
    answer:
      "Yes, we have WiFi available in common areas and dormitories. However, we encourage students to limit screen time to focus on community, study, and personal growth during the program.",
  },
  {
    question: "What happens after School of Missions graduation?",
    answer:
      "Many graduates continue with advanced schools, join long-term missions, return to their home countries as missionaries, or pursue further education. School of Missions opens doors to a lifetime of ministry opportunities.",
  },
  {
    question: "Are there any health or fitness requirements?",
    answer:
      "Students should be in reasonable physical and mental health to participate fully. Some outreach locations may require specific vaccinations or physical capabilities. We'll discuss any concerns during the application process.",
  },
]

export function DTSFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

    const element = document.getElementById("faqs-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="faqs-section" className="py-32 bg-card/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            className="text-center mb-20 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
            }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-balance mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground/80 text-balance font-light">
              Get answers to common questions about the School of Missions program
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden hover:bg-card/60 hover:border-border/50 hover:shadow-lg transition-all duration-500 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-accent/20 transition-all duration-300 ease-out"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-light text-lg tracking-wide pr-4">{faq.question}</span>
                  <svg
                    className={cn(
                      "w-6 h-6 transition-all duration-300 ease-out flex-shrink-0",
                      openIndex === index ? "rotate-180 text-primary" : "text-muted-foreground/60",
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-out",
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="px-8 pb-6">
                    <p className="text-muted-foreground/80 leading-relaxed font-light">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div
            className="text-center mt-16 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "1000ms",
            }}
          >
            <p className="text-muted-foreground/80 mb-6 font-light">Still have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:info@gathertogo.org"
                className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-all duration-300 ease-out"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-light tracking-wide">info@gathertogo.org</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
