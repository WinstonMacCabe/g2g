import { YouthCampPage } from "@/components/youth-camp"
import { Header} from "@/components/header"
import { Footer } from "@/components/footer"

export default function LivingroomsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <YouthCampPage />
      </main>
      <Footer />
    </div>
  )
}
