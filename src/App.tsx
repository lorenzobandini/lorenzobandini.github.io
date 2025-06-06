import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
        <p>
          &copy; {new Date().getFullYear()} Lorenzo Bandini. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
