"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, Calendar, Users, Home, Heart, Menu, X } from "lucide-react"
import { CyclingHeroText } from "@/components/cycling-hero-text"

const questions = [
  { id: "name", question: "What's your full name?", placeholder: "Type your name here..." },
  { id: "email", question: "What's your email address?", placeholder: "Enter your email..." },
  { id: "number", question: "What's your phone number?", placeholder: "Your phone number..." },
]

const testimonials = [
  {
    text: "This ministry transformed my understanding of faith and community.",
    author: "Sarah M.",
    delay: 0,
  },
  {
    text: "The DTS program gave me tools to serve with confidence and purpose.",
    author: "Michael R.",
    delay: 2,
  },
  {
    text: "I found a family and a calling through these programs.",
    author: "Jessica L.",
    delay: 4,
  },
  {
    text: "Life-changing experience that continues to impact my daily walk.",
    author: "David K.",
    delay: 1,
  },
  {
    text: "The community here is genuine, supportive, and inspiring.",
    author: "Emily T.",
    delay: 3,
  },
]

// Define hero phrases for CyclingHeroText
const heroPhrases = [
  "Awakening a Nation",
  "Equipping a Movement",
  "Reaching the World",
]

function LandingPage() {
  const [showForm, setShowForm] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSignupClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setShowForm(true)
  }

  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentAnswer.trim()) return

    const questionId = questions[currentQuestion].id
    const newAnswers = { ...answers, [questionId]: currentAnswer }
    setAnswers(newAnswers)
    setCurrentAnswer("")

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsSubmitting(true)
      setError(null)
      try {
        const response = await fetch("/api/submit-signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAnswers),
        })
        if (response.ok) {
          setIsComplete(true)
        } else {
          setError("Failed to submit form")
        }
      } catch (error) {
        setError("Network error - please check your connection")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmitAnswer(e as any)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
          style={{
            transform: `translateY(${scrollY * -0.3}px)`,
          }}
        >
          <source src="/output.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div
        className={`relative z-20 min-h-screen flex flex-col transition-all duration-700 ease-out ${showForm ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
      >
        <nav
          className={`w-full px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="flex items-center">
            <img
              src="/small text cream.png"
              alt="Gather to Go Logo"
              className="h-8 md:h-12 w-auto"
            />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute top-20 right-6 md:right-12 z-50 bg-white rounded-2xl shadow-2xl p-6 min-w-[250px] animate-scale-in">
            <nav className="space-y-4">
              <a
                href="/som"
                className="block text-black hover:text-black/60 transition-colors duration-300 font-futura text-lg"
              >
                School of Missions
              </a>
              <a
                href="/youth-camp"
                className="block text-black hover:text-black/60 transition-colors duration-300 font-futura text-lg"
              >
                Youth Camp
              </a>
              {/*}
              <a
                href="/livingrooms"
                className="block text-black hover:text-black/60 transition-colors duration-300 font-futura text-lg"
              >
                Livingrooms
              </a>
              <a
                href="/evangelism-training"
                className="block text-black hover:text-black/60 transition-colors duration-300 font-futura text-lg"
              >
                Evangelism Training
              </a>
              */}
            </nav>
          </div>
        )}

        <div className="flex-1 flex items-end px-6 md:px-12 pb-20">
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
            <div
              className={`transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{
                transitionDelay: "200ms",
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
            >
              {/* CyclingHeroText replaces the static h1 */}
              <CyclingHeroText phrases={heroPhrases} interval={4000} />
<p
  className="text-base md:text-lg lg:text-xl font-light tracking-wide max-w-xl leading-relaxed font-garamond"
  style={{ color: "#f2f3ee" }}
>
  A missions movement on the east coast of Canada.
</p>

</div>

            <div className="flex flex-col gap-4">
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=S4D25njYk02NWKf9oIkUZCnOrvf4WwtKoFpjLKDNPd5UREo2R0JCWkU0Sk5TVFoyWTQwTjlVR1pOUy4u"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#a88444] text-white text-base md:text-lg lg:text-xl font-medium tracking-wide rounded-full hover:bg-yellow transition-all duration-300 hover:scale-105 hover:shadow-2xl font-futura whitespace-nowrap ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: "600ms",
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <span>APPLY FOR SCHOOL OF MISSIONS</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </a>
{/*
              <a
                href="/som"
                className={`inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-base md:text-lg lg:text-xl font-medium tracking-wide rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-futura whitespace-nowrap ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: "700ms",
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <span>DISCOVER SCHOOL OF MISSIONS</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </a>

*/}

            </div>
          </div>
        </div>

        <div
          className={`pb-12 flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: "800ms",
            transform: `translateY(${scrollY * 0.4}px)`,
            opacity: Math.max(0, 1 - scrollY / 300),
          }}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
{/*
      <div className="relative z-20 bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-light text-center text-black mb-20 font-garamond">
            Voices of Transformation
          </h2>
          <div className="md:hidden grid grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-black/10 rounded-2xl p-6 shadow-lg">
                <p className="text-base text-black/80 font-light mb-4 font-garamond leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-sm text-black/60 font-light font-futura">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:block relative h-[500px]">
            {testimonials.map((testimonial, index) => {
              const positions = [
                { left: "5%", top: "10%" },
                { left: "55%", top: "5%" },
                { left: "15%", top: "55%" },
                { left: "65%", top: "60%" },
                { left: "35%", top: "30%" },
              ]

              return (
                <div
                  key={index}
                  className="absolute bg-white border border-black/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  style={{
                    left: positions[index].left,
                    top: positions[index].top,
                    maxWidth: "280px",
                    animation: `float ${5 + testimonial.delay}s ease-in-out infinite`,
                    animationDelay: `${testimonial.delay}s`,
                  }}
                >
                  <p className="text-base text-black/80 font-light mb-4 font-garamond leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-sm text-black/60 font-light font-futura">— {testimonial.author}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
*/}
<div className="relative z-20" style={{ backgroundColor: "#608394" }}>
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
    <h2
      className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-24 max-w-5xl font-garamond"
      style={{ color: "#f2f3ee" }}
    >
      Join us as we train and equip individuals in evangelism and in what it means
      to live a life on mission, so that we may see Canada awakened and every
      nation reached with the Gospel.
    </h2>

{/*

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-black mb-24 max-w-5xl font-garamond">
            45% of Gen Z would give their lives to missions - they only need someone to tell them how to dive in.
          </h2>

*/}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a
              href="/som"
              className="group relative aspect-square overflow-hidden rounded-3xl bg-black hover:scale-[1.02] transition-all duration-500"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              >
                <source src="/SOM.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col items-start">
  <img
    src="/School of Missions.png"
    alt="School of Missions Logo"
    className="w-72 md:w-96 lg:w-[32rem] object-contain mb-4"
  />
  <ArrowRight className="w-8 h-8 text-white mt-6 group-hover:translate-x-2 transition-transform duration-300" />
</div>

            </a>

            <a
              href="/youth-camp"
              className="group relative aspect-square overflow-hidden rounded-3xl bg-black hover:scale-[1.02] transition-all duration-500"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              >
                <source src="/fun.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col items-start">
  <img
    src="/Youth Camp.png"
    alt="School of Missions Logo"
    className="w-72 md:w-96 lg:w-[32rem] object-contain mb-4"
  />
  <ArrowRight className="w-8 h-8 text-white mt-6 group-hover:translate-x-2 transition-transform duration-300" />
</div>
            </a>
          </div>
{/*
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              href="https://facebook.com/events"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/5 to-black/10 p-10 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-black/10"
            >
              <Home className="w-12 h-12 text-black/60 mb-6" />
              <h3 className="text-3xl md:text-4xl font-light text-black mb-3 font-futura">Local Gatherings</h3>
              <p className="text-lg text-black/70 font-light font-garamond mb-2">Moncton / Halifax</p>
              <ArrowRight className="w-6 h-6 text-black/40 group-hover:text-black group-hover:translate-x-2 transition-all duration-300 mt-4" />
            </a>

            <a
              href="/livingrooms"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/5 to-black/10 p-10 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-black/10"
            >
              <Heart className="w-12 h-12 text-black/60 mb-6" />
              <h3 className="text-3xl md:text-4xl font-light text-black mb-3 font-futura">Livingrooms</h3>
              <p className="text-lg text-black/70 font-light font-garamond mb-2">Community spaces</p>
              <ArrowRight className="w-6 h-6 text-black/40 group-hover:text-black group-hover:translate-x-2 transition-all duration-300 mt-4" />
            </a>

            <a
              href="/evangelism-training"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/5 to-black/10 p-10 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-black/10"
            >
              <Users className="w-12 h-12 text-black/60 mb-6" />
              <h3 className="text-3xl md:text-4xl font-light text-black mb-3 font-futura">Evangelism Training</h3>
              <p className="text-lg text-black/70 font-light font-garamond mb-2">Host a training event</p>
              <ArrowRight className="w-6 h-6 text-black/40 group-hover:text-black group-hover:translate-x-2 transition-all duration-300 mt-4" />
            </a>

            <a
              href="/prayer-popup"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/5 to-black/10 p-10 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-black/10"
            >
              <Calendar className="w-12 h-12 text-black/60 mb-6" />
              <h3 className="text-3xl md:text-4xl font-light text-black mb-3 font-futura">Prayer Pop-up</h3>
              <p className="text-lg text-black/70 font-light font-garamond mb-2">Schedule a session</p>
              <ArrowRight className="w-6 h-6 text-black/40 group-hover:text-black group-hover:translate-x-2 transition-all duration-300 mt-4" />
            </a>
          </div>

          <div className="mt-20 text-center">
            <button
              onClick={handleSignupClick}
              className="group inline-flex items-center gap-3 px-12 py-6 bg-black text-white text-lg md:text-xl font-light tracking-wide rounded-full transition-all duration-300 hover:bg-black/90 hover:scale-105 hover:shadow-2xl font-futura"
            >
              <span>Apply for School of Missions</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          */}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-30 flex items-center justify-center px-6 bg-background/95 backdrop-blur-xl transition-all duration-1000 ease-out ${
          showForm ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-full max-w-2xl transform transition-all duration-1000 delay-300 ease-out ${
            showForm ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
          }`}
        >
          {!isComplete ? (
            <div className="text-center">
              <div className="mb-12">
                <div className="flex justify-center space-x-2 mb-4">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index <= currentQuestion ? "w-12 bg-foreground" : "w-8 bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm font-light tracking-wide">
                  STEP {currentQuestion + 1} OF {questions.length}
                </p>
              </div>

              <div
                className={`mb-12 transition-all duration-500 ease-out ${
                  showForm ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-light text-foreground mb-2 tracking-tight text-balance">
                  {questions[currentQuestion]?.question}
                </h2>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl animate-scale-in">
                  <p className="text-destructive text-sm font-light">{error}</p>
                  <button
                    onClick={() => setError(null)}
                    className="mt-2 text-destructive hover:text-destructive/80 text-xs underline transition-colors duration-200"
                  >
                    Dismiss
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmitAnswer} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={questions[currentQuestion]?.placeholder}
                    className="w-full text-2xl md:text-3xl font-light text-foreground bg-transparent border-none outline-none placeholder-muted-foreground text-center py-6 caret-foreground"
                    autoFocus
                    disabled={isSubmitting}
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md h-px bg-border">
                    <div
                      className={`h-full bg-foreground transition-all duration-300 ${currentAnswer ? "w-full" : "w-0"}`}
                    ></div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!currentAnswer.trim() || isSubmitting}
                  className={`mt-12 group flex items-center justify-center mx-auto px-10 py-4 bg-foreground text-background rounded-full transition-all duration-300 ${
                    currentAnswer.trim() && !isSubmitting
                      ? "opacity-100 hover:bg-foreground/90 hover:scale-105 hover:shadow-xl"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span className="font-light tracking-wide">
                        {currentQuestion < questions.length - 1 ? "Continue" : "Submit"}
                      </span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {currentQuestion > 0 && (
                <button
                  onClick={() => {
                    setCurrentQuestion(currentQuestion - 1)
                    setCurrentAnswer(answers[questions[currentQuestion - 1].id] || "")
                  }}
                  className="mt-8 text-muted-foreground hover:text-foreground text-sm font-light tracking-wide transition-colors duration-300"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            <div className="text-center animate-scale-in">
              <div className="mb-8">
                <div className="w-20 h-20 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4 tracking-tight">Thank you!</h2>
                <p className="text-muted-foreground font-light text-lg">
                  We've received your information and will be in touch soon.
                </p>
              </div>
              <button
                onClick={() => {
                  setShowForm(false)
                  setCurrentQuestion(0)
                  setAnswers({})
                  setCurrentAnswer("")
                  setIsComplete(false)
                  setError(null)
                }}
                className="text-muted-foreground hover:text-foreground text-sm font-light tracking-wide transition-colors duration-300 underline"
              >
                Return to home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
