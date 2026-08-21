import { Code2, Lightbulb, Rocket, User } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: User,
    title: "Collaboration",
    description: "Working clearly with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Columns */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate Computer Science student and aspiring
                Full-Stack Developer focused on building modern, scalable, and
                high-performance software applications. I enjoy turning ideas
                into practical digital solutions and continuously improving my
                skills through real-world projects and hands-on learning.
              </p>

              <p>
                My main technical interests include React.js and modern frontend
                development, along with Java and Spring Boot for backend
                development. I'm particularly interested in REST APIs,
                microservices, databases, and building reliable applications
                with clean and maintainable architecture.
              </p>

              <p>
                I'm also expanding my knowledge in DevOps, Docker, CI/CD, cloud
                technologies, and Artificial Intelligence. My goal is to become
                a skilled software engineer who can design, develop, deploy, and
                continuously improve complete software solutions from frontend
                to production.
              </p>

              <p>
                When I'm not coding, I enjoy exploring new technologies,
                building personal projects, contributing to open-source
                communities, and continuously learning about the rapidly
                evolving world of software engineering.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground ">
                "My mission is to build scalable, intelligent, and impactful
                digital solutions by combining modern frontend and backend
                technologies, DevOps practices, and continuous learning."
              </p>
            </div>
          </div>
          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
