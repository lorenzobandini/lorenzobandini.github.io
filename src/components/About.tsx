import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const skills = {
    languages: ["Italian", "English"],
    programming: ["JAVA", "C", "OCaml", "JavaScript", "TypeScript", "HTML", "CSS", "Angular", "React", "NextJS"],
    other: ["ARM assembly", "Verilog", "Bash", "Git", "Valgrind", "LaTeX"]
  }

  return (
    <section id="about" className="py-24 bg-second">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8 text-main">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-light border-main/10">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-main">Background</h3>
              <p className="text-main">
                I am a Software Developer based in Pisa, Italy, currently pursuing my Bachelor's Degree in Computer Science. 
                I specialize in full-stack development and have a strong foundation in computer science fundamentals.
              </p>
              <p className="mt-4 text-main">
                In my free time, I enjoy experimenting with different Unix operating systems and have a passion for 
                assembling and modifying PCs. As a former middle-distance runner, I maintain an active lifestyle by 
                alternating between running and going to the gym.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-light border-main/10">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-main">Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium mb-2 capitalize text-main">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-third text-light">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
