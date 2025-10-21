import { Header } from "@/components/header"
import { DTSHero } from "@/components/dts-hero"
import { WhatIsDTS } from "@/components/what-is-dts"
import { DTSTimeline } from "@/components/dts-timeline"
import { DTSFAQs } from "@/components/dts-faqs"
import { DTSApply } from "@/components/dts-apply"
import { Footer } from "@/components/footer"

export default function DTSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-40">
        <DTSHero />
        <WhatIsDTS />
        <DTSTimeline />
        <DTSFAQs />
        <DTSApply />
      </main>
      <Footer />
    </div>
  )
}
