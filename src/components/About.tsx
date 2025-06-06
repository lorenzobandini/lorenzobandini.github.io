import { Card, CardContent } from "@/components/ui/card";
import { SkillBadge } from "@/components/ui/skill-badge";

export function About() {
  const skills = {
    languages: ["Italian (Native)", "English (Professional)"],
    programming: [
      "Java",
      "C",
      "OCaml",
      "JavaScript",
      "TypeScript",
      "Python",
      "HTML",
      "CSS",
      "Angular",
      "React",
      "NextJS",
      "FastAPI",
    ],
    toolsTech: [
      "Docker",
      "Docker Compose",
      "MongoDB",
      "MySQL",
      "SQLite",
      "tRPC",
      "Prisma",
      "Tailwind CSS",
      "Git",
      "Postman",
      "Valgrind",
      "ARM Assembly",
      "Verilog",
      "Bash",
      "LaTeX",
    ],
    interests: [
      "Unix Systems",
      "PC Building & Modding",
      "Running",
      "Gym",
      "Tech Innovation",
    ],
  };

  return (
    <section id="about" className="py-24 bg-second">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-main text-center">
          A Little More About Me
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-light border-main/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-main">Who I Am</h3>
              <p className="text-main/90 leading-relaxed">
                Ciao! I'm a passionate Software Developer from Pisa, Italy. I'm
                currently diving deep into my Master's in Computer Science,
                specializing in ICT Solution Architecture. My goal is to design
                and build robust, scalable, and secure software solutions that
                make a real impact.
              </p>
              <p className="mt-4 text-main/90 leading-relaxed">
                Beyond coding, I'm a tech enthusiast at heart. I love tinkering
                with different Unix-based operating systems, and there's a
                special kind of satisfaction I get from assembling or modifying
                PCs. It's like building with digital LEGOs! To keep my mind and
                body in sync, I was a middle-distance runner and now I enjoy
                hitting the pavement for a run or challenging myself at the gym.
                Balancing intense problem-solving with physical activity keeps
                me energized and focused.
              </p>
              <p className="mt-4 text-main/90 leading-relaxed">
                I believe in continuous learning and I'm always on the lookout
                for new technologies and methodologies to expand my skillset.
                Let's build something amazing together!
              </p>
            </CardContent>
          </Card>
          <Card className="bg-light border-main/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-main">
                My Skillset & Passions
              </h3>{" "}
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <SkillBadge
                    key={category}
                    skills={items}
                    title={
                      category === "toolsTech"
                        ? "Tools & Technologies"
                        : category === "programming"
                        ? "Programming & Web"
                        : category.charAt(0).toUpperCase() + category.slice(1)
                    }
                    badgeClassName="px-3 py-1"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
