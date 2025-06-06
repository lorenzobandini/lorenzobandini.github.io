import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  User,
  GraduationCap,
  Briefcase,
  FolderOpen,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigation = [
    { name: "About", href: "#about", icon: User, color: "text-blue-400" },
    {
      name: "Education",
      href: "#education",
      icon: GraduationCap,
      color: "text-green-400",
    },
    {
      name: "Experience",
      href: "#experience",
      icon: Briefcase,
      color: "text-purple-400",
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FolderOpen,
      color: "text-orange-400",
    },
    {
      name: "Contact",
      href: "#contact",
      icon: MessageCircle,
      color: "text-pink-400",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-main/80 backdrop-blur-xs border-b border-second/10"
          : "bg-transparent"
      )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-bold text-second">
            Lorenzo Bandini
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-light hover:text-second transition-colors">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-light hover:text-second"
              asChild>
              <a
                href="https://github.com/lorenzobandini"
                target="_blank"
                rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-light hover:text-second"
              asChild>
              <a
                href="https://linkedin.com/in/lorenzobandinii"
                target="_blank"
                rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-light hover:text-second"
              asChild>
              <a href="mailto:bandinilorenzo02@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>{" "}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-light hover:text-second transition-all duration-300 hover:scale-110">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>{" "}
            <SheetContent className="bg-gradient-to-br from-main via-main/95 to-main/90 border-second/20 backdrop-blur-xl w-80 [&>button]:text-light [&>button]:hover:text-second">
              <div className="flex flex-col h-full">
                {/* Header del menu */}
                <div className="flex items-center gap-3 mb-8 mt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-second to-second/80 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-light text-lg">
                      Lorenzo Bandini
                    </h3>
                    <p className="text-second/80 text-sm">Software Developer</p>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 flex-1">
                  {navigation.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <SheetClose key={item.name} asChild>
                        <a
                          href={item.href}
                          className="flex items-center gap-4 p-4 rounded-xl text-light hover:bg-second/10 transition-all duration-300 hover:translate-x-2 hover:shadow-lg group"
                          style={{ animationDelay: `${index * 100}ms` }}>
                          <div
                            className={cn(
                              "p-2 rounded-lg bg-opacity-20 transition-all duration-300 group-hover:scale-110",
                              item.color,
                              "bg-current"
                            )}>
                            <IconComponent
                              className={cn("h-5 w-5", item.color)}
                            />
                          </div>
                          <span className="font-medium text-base group-hover:text-second transition-colors duration-300">
                            {item.name}
                          </span>
                        </a>
                      </SheetClose>
                    );
                  })}
                </nav>

                {/* Social Links */}
                <div className="border-t border-second/20 pt-6 mt-auto">
                  <p className="text-second/60 text-sm mb-4 text-center">
                    Connect with me
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-light hover:text-second hover:bg-second/10 transition-all duration-300 hover:scale-110"
                      asChild>
                      <a
                        href="https://github.com/lorenzobandini"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-light hover:text-second hover:bg-second/10 transition-all duration-300 hover:scale-110"
                      asChild>
                      <a
                        href="https://linkedin.com/in/lorenzobandinii"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-light hover:text-second hover:bg-second/10 transition-all duration-300 hover:scale-110"
                      asChild>
                      <a href="mailto:bandinilorenzo02@gmail.com">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
