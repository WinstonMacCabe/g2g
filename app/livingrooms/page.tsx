import { Header } from "@/components/header"
import { LivingroomsHero } from "@/components/livingrooms-hero"
import { MapLocator } from "@/components/map-locator"
import { Footer } from "@/components/footer"

export default function LivingroomsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LivingroomsHero />
        <MapLocator />
      </main>
      <Footer />
    </div>
  )
}
