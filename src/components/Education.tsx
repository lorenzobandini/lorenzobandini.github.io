import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Education() {
  const educationEntries = [
    {
      school: "University of Pisa",
      degree: "Master of Computer Science, Curriculum: ICT Solution Architect",
      period: "Sept. 2024 – Oct. 2026 (Expected)",
      location: "Pisa, Italy",
      description:
        "Focusing on designing and evaluating integrated ICT solutions that address performance, security, and privacy. Key courses include Advanced Programming, Advanced Software Engineering, Algorithm Engineering, ICT Risk Assessment, and IoT Devices.",
      notes: "Curriculum taught in English.",
    },
    {
      school: "University of Pisa",
      degree: "Bachelor's Degree in Computer Science",
      period: "Sept. 2021 – Oct. 2024",
      location: "Pisa, Italy",
      description:
        "Built a solid foundation in programming, algorithms, and software development. Key courses: Algorithms, Computer Architecture, Operating Systems, Computer Networks, C Programming, OOP, Introduction to AI.",
    },
    {
      school: "F. Buonarroti Scientific High School",
      degree: "Scientific High School Diploma in Applied Sciences",
      period: "Sept. 2016 – Jun. 2021",
      location: "Pisa, Italy",
      description:
        "This is where my journey into the world of science and technology began!",
    },
  ];

  return (
    <section id="education" className="py-24 bg-main">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-light mb-12 text-center">
          My Educational Journey
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {educationEntries.map((edu, index) => (
            <Card
              key={index}
              className="bg-light border-second/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <CardTitle className="text-main text-xl md:text-2xl">
                      {edu.school}
                    </CardTitle>
                    <CardDescription className="text-second font-semibold">
                      {edu.degree}
                    </CardDescription>
                  </div>
                  <div className="text-sm text-main/80 mt-2 sm:mt-0 sm:text-right">
                    <div>{edu.period}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p className="text-sm text-main/90">{edu.description}</p>
                  {edu.notes && (
                    <p className="text-xs text-second mt-2">
                      <em>{edu.notes}</em>
                    </p>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
