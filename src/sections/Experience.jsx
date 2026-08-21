const experiences = [
  {
    period: "2024 — Present",
    role: "Computer Science Student & Full-Stack Developer",
    company: "University of Mumbai",
    description:
      "Currently pursuing a degree in Computer Science while building full-stack applications and strengthening my knowledge of modern software development, system design, and scalable application architecture.",
    technologies: ["React", "Java", "Spring Boot", "PostgreSQL"],
    current: true,
  },
  {
    period: "2025 — Present",
    role: "Microservices Project Developer",
    company: "Personal Project",
    description:
      "Developing a scalable Salon Booking Platform using a microservices architecture with services for users, salons, bookings, payments, and notifications.",
    technologies: ["Java", "Spring Boot", "Microservices", "Docker"],
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "Full-Stack Project Developer",
    company: "Personal Projects",
    description:
      "Built modern web applications including e-commerce systems and portfolio projects, focusing on responsive user interfaces, backend APIs, authentication, database integration, and application management.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    current: false,
  },
  {
    period: "2025 — Present",
    role: "DevOps & Cloud Learner",
    company: "Independent Learning",
    description:
      "Expanding practical knowledge in containerization, CI/CD pipelines, deployment, and cloud technologies while learning how modern applications are built, tested, and deployed efficiently.",
    technologies: ["Docker", "GitHub Actions", "CI/CD", "AWS"],
    current: true,
  },
];
export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            My Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Growing through{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              code, projects, and innovation.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my growth as a Computer Science student and aspiring
            Full-Stack Developer, exploring modern technologies, building
            practical projects, and continuously expanding my skills in software
            engineering.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
