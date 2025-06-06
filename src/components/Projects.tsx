import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: "Gacha World",
      description: "Collaborative university project developing a gacha-based game featuring account management, registration, and authentication.",
      details: [
        "Developed a gacha-based game with complete user account management system",
        "Implemented secure authentication and registration processes",
        "Utilized Docker Compose for containerized deployment and development",
        "Built robust testing framework and security tools for performance optimization"
      ],
      tech: ["Docker Compose", "FastAPI", "MySQL", "Postman", "JWT"],
      repo: "https://github.com/Capture-the-Gacha/gacha-world"
    },
    {
      title: "SpeedyGuesser",
      description: "Developed a multiplayer game where two players assist a third in guessing words, with account management and matchmaking.",
      details: [
        "Created an interactive multiplayer word-guessing game with real-time collaboration",
        "Implemented user account management and intelligent matchmaking system",
        "Built using modern web technologies for seamless user experience",
        "Designed scalable architecture to handle multiple concurrent game sessions"
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "tRPC", "Prisma", "SQLite"],
      repo: "https://github.com/lorenzobandini/SpeedyGuesser"
    },
    {
      title: "Hotelier",
      description: "Hotel review system inspired by TripAdvisor capable of managing users, hotels, reviews, and city rankings.",
      details: [
        "Implemented a client-server architecture with data persistence via JSON files",
        "TCP communication for user registration and login, review submission and search",        "UDP multicast connection for ranking update notifications"
      ],
      tech: ["Java"],
      repo: "https://github.com/lorenzobandini/hotelier"
    },
    {
      title: "Dungeon Adventures",
      description: "Text-based adventure game with interactive user interface and client-server architecture.",
      details: [
        "Designed and developed a text-based adventure game in Java",
        "Used the Java Socket API to create a client-server architecture",        "Implemented advanced game mechanics, including turn-based combat and item management"
      ],
      tech: ["Java"],
      repo: "https://github.com/lorenzobandini/Dungeon_Adventures"
    }
  ]

  return (
    <section id="projects" className="py-24 bg-main">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-light mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-light border-second/10">
              <CardHeader>
                <CardTitle className="text-main">{project.title}</CardTitle>
                <CardDescription className="text-second">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm text-main">{detail}</li>
                  ))}
                </ul>                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-third text-light text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-main hover:text-second">
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

