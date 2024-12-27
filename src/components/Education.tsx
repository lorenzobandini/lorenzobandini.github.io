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
    <section id="education" className="py-24 bg-main">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-light mb-8">Education</h2>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-light border-second/10">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-main">{edu.school}</CardTitle>
                    <CardDescription className="text-second">{edu.degree}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-main">{edu.period}</div>
                    <div className="text-sm text-main">{edu.location}</div>
                  </div>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p className="text-sm text-main">{edu.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

