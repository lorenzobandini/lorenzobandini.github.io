import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Education() {
  const education = [
    {
      school: "University of Pisa",
      degree: "Bachelor's Degree in Computer Science",
      period: "Sept. 2021 - Oct. 2024",
      location: "Pisa, Italy",
      description: "Relevant Courses: Computer Networks, Operating Systems, Algorithms and Data Structures, Object-Oriented Programming, and Low-Level Programming"
    },
    {
      school: "F. Buonarroti Scientific High School",
      degree: "Scientific High School Diploma in Applied Sciences",
      period: "Sept. 2016 - Jun. 2021",
      location: "Pisa, Italy",
      description: ""
    }
  ]

  return (
    <section id="education" className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{edu.school}</CardTitle>
                    <CardDescription>{edu.degree}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{edu.period}</div>
                    <div className="text-sm text-muted-foreground">{edu.location}</div>
                  </div>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

