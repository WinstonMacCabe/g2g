import { Header } from "@/components/header"
import { AboutStoryline } from "@/components/about-storyline"
import { StatementOfFaith } from "@/components/statement-of-faith"
import { BoardDirectors } from "@/components/board-directors"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        <AboutStoryline />
        <StatementOfFaith />
        <BoardDirectors />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
