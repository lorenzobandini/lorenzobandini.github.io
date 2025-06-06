import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Download,
} from "lucide-react"; // Added FileText and Download

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-main" />,
      label: "Email",
      value: "bandinilorenzo02@gmail.com",
      href: "mailto:bandinilorenzo02@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/lorenzobandini",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/lorenzobandinii",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      href: "https://instagram.com/lorenzobandinii",
    },
  ];
  return (
    <section id="contact" className="py-24 bg-second">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-main mb-12 text-center">
          Let's Connect!
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-light border-main/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-main text-xl md:text-2xl">
                Get in Touch
              </CardTitle>
              <CardDescription className="text-second/90">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something amazing.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email Section */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="shrink-0 w-6 h-6 mt-1 text-main group-hover:text-third transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-main group-hover:text-third transition-colors">
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-main/80 hover:text-third transition-colors"
                          target="_blank"
                          rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-main/80">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links Section */}
              <div className="border-t border-main/10 pt-6">
                <h4 className="font-semibold text-main mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-main/30 hover:border-third hover:bg-third/10 transition-all">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-main hover:text-third transition-colors">
                        {link.icon}
                        <span>{link.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-light border-main/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-main text-xl md:text-2xl">
                Download My CV
              </CardTitle>
              <CardDescription className="text-second/90">
                Want a more detailed look at my professional background?
                Get my complete CV with all my experiences and skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center space-y-6">
              <div className="bg-third/10 p-6 rounded-full">
                <Download className="h-12 w-12 text-third" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-main">Professional Resume</h4>
                <p className="text-sm text-main/70">
                  Complete overview of my education, experience, and technical skills
                </p>
              </div>
              <Button
                variant="outline"
                asChild
                className="border-main/30 hover:border-third hover:bg-third/10 transition-all w-full">
                <a
                  href="/src/assets/LorenzoBandini_CV.pdf"
                  download="LorenzoBandini_CV.pdf"
                  className="flex items-center justify-center gap-2 text-main hover:text-third transition-colors px-6 py-3 rounded-md">
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
