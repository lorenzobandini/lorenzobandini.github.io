import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Experiences() {
  const experiences = [
    {
      company: "JEVIS - Junior Enterprise of Pisa",
      role: "Deputy Head of IT",
      period: "Feb. 2024 - Present",
      location: "Pisa, Italy",
      description: [
        "Managed an IT team of 6 members, ensuring operational efficiency and clear division of responsibilities.",
        "Served as Project Manager for numerous IT consulting projects, coordinating resources, timelines, and budgets.",
        "Continuously monitored work quality, ensuring compliance with company standards and providing technical training."
      ]
    },
    {
      company: "JE Italy - Junior Enterprises Italy",
      role: "IT Specialist",
      period: "Feb. 2024 - Present",
      location: "Italy",
      description: [
        "Designed and developed customized IT solutions to optimize processes for the 36 affiliated associations.",
        "Provided technical support and training activities for the IT teams of various association members."
      ]
    },
    {
      company: "JEVIS - Junior Enterprise of Pisa",
      role: "Junior IT Associate",
      period: "Oct. 2023 - Feb. 2024",
      location: "Pisa, Italy",
      description: [
        "Successfully passed a group interview and an individual interview, which allowed me to join the association.",
        "Secured a position within the consulting team for the development of PWA and SEO optimization."
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-second">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-main mb-8">Experience</h2>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-light border-main/10">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-main">{exp.role}</CardTitle>
                    <CardDescription className="text-second">{exp.company}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-main">{exp.period}</div>
                    <div className="text-sm text-main">{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-main">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

