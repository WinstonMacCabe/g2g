"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

const questions = [
  { id: "name", question: "What's your full name?", placeholder: "Type your name here..." },
  { id: "email", question: "What's your email address?", placeholder: "Enter your email..." },
  { id: "number", question: "What's your phone number?", placeholder: "Your phone number..." },
]

function LandingPage() {
  const [showForm, setShowForm] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignupClick = () => {
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
          console.error("Failed to submit form")
          setError("Failed to submit form")
        }
      } catch (error) {
        console.error("Error submitting form:", error)
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
    <div className="relative min-h-screen overflow-hidden pt-16 lg:pt-20">
      {/* Video Background */}
      <video
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000 ease-out ${
          showForm ? "scale-110 blur-sm opacity-20" : ""
        }`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/fun.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dynamic Overlay */}
      <div
        className={`absolute inset-0 z-10 transition-all duration-1000 ease-out ${
          showForm ? "bg-white/95 backdrop-blur-sm" : "bg-black/20"
        }`}
      ></div>

      {/* Landing Content */}
      <div
        className={`relative z-20 min-h-screen flex items-center justify-center px-6 transition-all duration-700 ease-out ${
          showForm ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        <div className="text-center">
          <button
            onClick={handleSignupClick}
            className="group relative overflow-hidden inline-block px-16 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-light tracking-wider rounded-full transition-all duration-500 hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span className="relative z-10 transition-all duration-300">I'm Interested in DTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
          </button>
        </div>
      </div>

      {/* Step-by-step Form */}
      <div
        className={`absolute inset-0 z-30 flex items-center justify-center px-6 transition-all duration-1000 ease-out ${
          showForm ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-full max-w-2xl transform transition-all duration-1000 delay-300 ease-out ${
            showForm ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {!isComplete ? (
            <div className="text-center">
              {/* Progress indicator */}
              <div className="mb-12">
                <div className="flex justify-center space-x-2 mb-4">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        index <= currentQuestion ? "bg-gray-800" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-sm font-light">
                  {currentQuestion + 1} of {questions.length}
                </p>
              </div>

              {/* Question */}
              <div
                className={`mb-12 transition-all duration-500 ease-out ${
                  showForm ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <h2 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
                  {questions[currentQuestion]?.question}
                </h2>
              </div>

              {/* Error display */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                  <button
                    onClick={() => setError(null)}
                    className="mt-2 text-red-500 hover:text-red-700 text-xs underline"
                  >
                    Dismiss
                  </button>
                </div>
              )}

              {/* Input with blinking cursor */}
              <form onSubmit={handleSubmitAnswer} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={questions[currentQuestion]?.placeholder}
                    className="w-full text-2xl font-light text-gray-900 bg-transparent border-none outline-none placeholder-gray-400 text-center py-4 caret-gray-900"
                    autoFocus
                    disabled={isSubmitting}
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gray-300">
                    <div
                      className={`h-full bg-gray-900 transition-all duration-300 ${currentAnswer ? "w-full" : "w-0"}`}
                    ></div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={!currentAnswer.trim() || isSubmitting}
                  className={`mt-8 group flex items-center justify-center mx-auto px-8 py-3 bg-gray-900 text-white rounded-full transition-all duration-300 ${
                    currentAnswer.trim() && !isSubmitting
                      ? "opacity-100 hover:bg-gray-800 hover:scale-105"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span className="font-light">{currentQuestion < questions.length - 1 ? "Next" : "Submit"}</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {/* Back button */}
              {currentQuestion > 0 && (
                <button
                  onClick={() => {
                    setCurrentQuestion(currentQuestion - 1)
                    setCurrentAnswer(answers[questions[currentQuestion - 1].id] || "")
                  }}
                  className="mt-6 text-gray-500 hover:text-gray-700 text-sm font-light transition-colors duration-300"
                >
                  Back
                </button>
              )}
            </div>
          ) : (
            /* Success message */
            <div className="text-center animate-fade-in">
              <div className="mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-light text-gray-900 mb-2">Thank you!</h2>
                <p className="text-gray-600 font-light">We've received your information and will be in touch soon.</p>
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
                className="text-gray-500 hover:text-gray-700 text-sm font-light transition-colors duration-300"
              >
                Back to home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
