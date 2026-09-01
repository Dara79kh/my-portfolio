import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What kind of applications do you build?",
    answer:
      "I build modern full-stack web applications that solve real-world problems. My projects combine responsive React interfaces, backend APIs, databases, authentication, and scalable architectures. I'm especially interested in applications that integrate AI to create smarter and more useful user experiences.",
  },
  {
    question:
      "Are you focused on frontend, backend, or full-stack development?",
    answer:
      "My primary focus is Full-Stack Development. I enjoy working across the entire application, from building modern interfaces with React and Tailwind CSS to developing backend services, REST APIs, databases, authentication, and deployment. My goal is to understand how every part of a software system works together.",
  },
  {
    question: "How are you exploring AI in your development journey?",
    answer:
      "AI is an important part of my development journey. I'm exploring how Artificial Intelligence can be integrated into full-stack applications through intelligent search, recommendations, automation, conversational interfaces, and data-driven features. My goal is to understand how AI can be used to solve real-world problems rather than simply using AI tools.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "I work with modern technologies across the full development stack, including React.js, JavaScript, Java, Spring Boot, REST APIs, Microservices, Spring Cloud, PostgreSQL, MongoDB, Docker, Git, GitHub Actions, CI/CD, AWS, RabbitMQ, Tailwind CSS, and Artificial Intelligence. I'm continuously learning and expanding my technology stack.",
  },
  {
    question: "What are you currently learning and exploring?",
    answer:
      "As a Computer Science student, I'm continuously improving my knowledge through projects and hands-on development. I'm currently focusing on Full-Stack Development, Spring Boot, Microservices, DevOps, Cloud technologies, AI integration, system design, and problem-solving. I believe modern developers need to keep learning as technology continues to evolve.",
  },
  {
    question: "What kind of opportunities are you looking for?",
    answer:
      "I'm looking for opportunities where I can apply my Computer Science knowledge to real-world software development, contribute to meaningful projects, and continue growing as a Full-Stack Developer. I'm particularly interested in internships, entry-level software engineering roles, and opportunities involving Full-Stack Development, AI, Cloud, and modern software technologies.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
            Let's talk about{" "}
            <span className="font-serif italic font-normal text-white">
              my work.
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in animation-delay-200">
            A few answers about my development journey, technologies, AI
            interests, and the kind of software I'm building.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
                  isOpen ? "glow-border" : "hover:border-primary/30"
                }`}
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-5">
                    {/* Number */}
                    <span
                      className={`hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-sm font-semibold shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-primary/15 text-primary"
                          : "bg-surface text-muted-foreground group-hover:text-primary"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                        isOpen
                          ? "text-primary"
                          : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus / Minus */}
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-primary-foreground rotate-0"
                        : "bg-surface text-muted-foreground group-hover:text-primary"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-7 md:pb-8 sm:pl-[5.25rem] pr-16">
                      <div className="h-px bg-border mb-6" />

                      <p className="text-muted-foreground leading-7 text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-14 animate-fade-in animation-delay-800">
          <p className="text-sm text-muted-foreground">
            Interested in building something{" "}
            <span className="text-primary font-medium">
              meaningful and innovative
            </span>
            ?
          </p>
        </div>
      </div>
    </section>
  );
};
