import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";

import { useTranslation } from "react-i18next";

const projects = [
  {
    key: "salon",
    image: "/projects/project1.png",
    tags: [
      "React",
      "Java",
      "Spring Boot",
      "Microservices",
      "Docker",
      "PostgreSQL",
    ],
    link: "#",
    github: "#",
  },
  {
    key: "ecommerce",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
    link: "#",
    github: "#",
  },
  {
    key: "khmerbiz",
    image: "/projects/project3.png",
    tags: ["React", "AI", "JavaScript", "API Integration", "Database"],
    link: "#",
    github: "#",
  },
  {
    key: "portfolio",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    link: "#",
    github: "#",
  },
];
export const Projects = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState(null);
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t("projects.label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t("projects.title1")}
            <span className="font-serif italic font-normal text-white">
              {" "}
              {t("projects.title2")}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t("projects.description")}
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 cursor-pointer"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setActiveProject(activeProject === idx ? null : idx);
                }
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    activeProject === idx ? "opacity-100" : "opacity-0"
                  } md:opacity-0 md:group-hover:opacity-100`}
                >
                  {/* Live Project */}
                  <a
                    href={project.link}
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {/* GitHub */}
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {t(`projects.items.${project.key}.title`)}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {t(`projects.items.${project.key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            {t("projects.viewAll")}
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
