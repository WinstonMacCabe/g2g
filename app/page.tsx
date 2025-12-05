import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import LandingPage from "@/components/landing-page"

export default function HomePage() {
  return (
    <div className="relative">
      <LandingPage />
      <Footer />
    </div>
  )
}