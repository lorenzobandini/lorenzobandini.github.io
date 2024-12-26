import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: "Hotelier",
      description: "Hotel review system inspired by TripAdvisor capable of managing users, hotels, reviews, and city rankings.",
      details: [
        "Implemented a client-server architecture with data persistence via JSON files",
        "TCP communication for user registration and login, review submission and search",
        "UDP multicast connection for ranking update notifications"
      ],
      tech: ["JAVA"],
      repo: "https://github.com/lorenzobandini/hotelier"
    },
    {
      title: "Dungeon Adventures",
      description: "Text-based adventure game with interactive user interface and client-server architecture.",
      details: [
        "Designed and developed a text-based adventure game in Java",
        "Used the Java Socket API to create a client-server architecture",
        "Implemented advanced game mechanics, including turn-based combat and item management"
      ],
      tech: ["JAVA"],
      repo: "https://github.com/lorenzobandini/dungeon-adventures"
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{detail}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

