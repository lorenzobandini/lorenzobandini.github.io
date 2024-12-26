import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      <div className="container relative px-4 flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Software Developer
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          Passionate about creating innovative solutions and building exceptional digital experiences
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View projects</a>
          </Button>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  )
}

