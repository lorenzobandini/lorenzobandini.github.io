import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experiences() {
  const experiences = [
    {
      company: "JEVIS - Junior Enterprise of Pisa",
      role: "Head of IT",
      period: "Feb. 2024 - Present",
      location: "Pisa, Italy",
      description: [
        "Leading a team of 9 in IT internal projects, delivering a microservices-based internal application using Docker Compose, FastAPI, MongoDB, and ReactJS to support performance analysis and recruitment decisions.",
        "Managing client relationships by executing 4 custom WordPress and data analytics projects that boosted revenue by 54% in 6 months and provided 7 training sessions to 60 associates.",
        "Streamlining a 4-stage selection process for 14 candidates, with a 42% acceptance rate, culminating in successful team integration.",
      ],
      skills: [
        "Docker Compose",
        "FastAPI",
        "MongoDB",
        "ReactJS",
        "WordPress",
        "Data Analytics",
        "Team Leadership",
        "Client Management",
      ],
    },
    {
      company: "CNR - National Research Council",
      role: "Intern - Research Assistant",
      period: "Jul. 2024 - Oct. 2024",
      location: "Pisa, Italy",
      description: [
        "Completed 375 hours developing U-ProBE, a Python GUI for rapid post-hoc uncertainty quantification on deep learning image classifiers.",
        "Partially supported by EU-funded projects ProCAncer-I and FAITH, currently authoring a research paper for a European convention.",
      ],
      skills: [
        "Python",
        "GUI Development",
        "Deep Learning",
        "Uncertainty Quantification",
        "Research",
      ],
    },
    {
      company: "JEItaly - Junior Enterprises Italy",
      role: "IT Specialist",
      period: "Feb. 2024 - Oct. 2024",
      location: "Remote",
      description: [
        "Designed and implemented tailored IT solutions to streamline processes across 36 affiliated associations.",
        "Delivered technical support and conducted training sessions for IT teams within member organizations.",
      ],
      skills: [
        "IT Solutions Design",
        "Process Optimization",
        "Technical Support",
        "Training",
      ],
    },
    {
      company: "JEVIS - Junior Enterprise of Pisa",
      role: "Deputy Head of IT",
      period: "Oct. 2023 - Feb. 2024",
      location: "Pisa, Italy",
      description: [
        "Recognized with the top junior initiative award in the Italian network for 2023/2024.",
        "Managed client relations and led a consulting project for an Angular plugin, contributing 13% to the association’s annual revenue.",
      ],
      skills: ["Angular", "Client Management", "Project Leadership"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-second">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-main mb-12 text-center">
          My Professional Journey
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-light border-main/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <CardTitle className="text-main text-xl md:text-2xl">
                      {exp.company}
                    </CardTitle>
                    <CardDescription className="text-second/90 font-semibold">
                      {exp.role}
                    </CardDescription>
                  </div>
                  <div className="text-sm text-main/80 mt-2 sm:mt-0 sm:text-right">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-4 text-main/90">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                {exp.skills && exp.skills.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2 text-main">
                      Key Skills & Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-third text-light text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
