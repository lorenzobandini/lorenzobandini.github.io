import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Address",
      value: "Via G.Ciardi 3 Pontasserchio (PI) 56017, Italy"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(+39) 339-140-4748",
      href: "tel:+393391404748"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "bandinilorenzo02@gmail.com",
      href: "mailto:bandinilorenzo02@gmail.com"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/lorenzobandini"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/lorenzobandinii"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-second">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-main mb-8">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-light border-main/10">
            <CardHeader>
              <CardTitle className="text-main">Contact Information</CardTitle>
              <CardDescription className="text-second">Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  {item.icon}
                  <div>
                    <div className="text-sm font-medium text-main">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-second hover:text-third transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-second">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-light border-main/10">
            <CardHeader>
              <CardTitle className="text-main">Social Links</CardTitle>
              <CardDescription className="text-second">Connect with me on social media</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" asChild>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-main hover:text-second transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

