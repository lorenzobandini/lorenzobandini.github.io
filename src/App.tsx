import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Experiences } from "@/components/experiences"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-main text-light">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Education />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-main-foreground text-second py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Lorenzo Bandini. All rights reserved.</p>
      </footer>
    </div>
  )
}
