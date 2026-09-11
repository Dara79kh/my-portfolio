import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useTranslation } from "react-i18next";

import reactIcon from "../assets/technologies/react.svg";
import vueIcon from "../assets/technologies/vue.svg";
import javascriptIcon from "../assets/technologies/javascript.svg";
import javaIcon from "../assets/technologies/java.svg";
import springIcon from "../assets/technologies/spring.svg";
import dockerIcon from "../assets/technologies/docker.svg";
import gitIcon from "../assets/technologies/git.svg";
import githubIcon from "../assets/technologies/github.svg";
import githubActionsIcon from "../assets/technologies/github-actions.svg";
import postgresqlIcon from "../assets/technologies/postgresql.svg";
import mongodbIcon from "../assets/technologies/mongodb.svg";
import rabbitmqIcon from "../assets/technologies/rabbitmq.svg";
import tailwindIcon from "../assets/technologies/tailwind.svg";
import awsIcon from "../assets/technologies/aws.svg";

const skills = [
  { name: "React.js", image: reactIcon },
  { name: "Vue.js", image: vueIcon },
  { name: "JavaScript", image: javascriptIcon },
  { name: "Java", image: javaIcon },
  { name: "Spring Boot", image: springIcon },
  { name: "REST APIs" },
  { name: "Microservices" },
  { name: "Spring Cloud" },
  { name: "AWS", image: awsIcon },
  { name: "Docker", image: dockerIcon },
  { name: "Git", image: gitIcon },
  { name: "GitHub", image: githubIcon },
  { name: "GitHub Actions", image: githubActionsIcon },
  { name: "CI/CD" },
  { name: "DevOps" },
  { name: "PostgreSQL", image: postgresqlIcon },
  { name: "MongoDB", image: mongodbIcon },
  { name: "RabbitMQ", image: rabbitmqIcon },
  { name: "Tailwind CSS", image: tailwindIcon },
  { name: "Artificial Intelligence" },
];

export const Hero = () => {
  const { t } = useTranslation();

  const [activeSkill, setActiveSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setActiveSkill(null);
      return;
    }

    const interval = setInterval(() => {
      setActiveSkill((current) => {
        if (current === null) {
          return 0;
        }

        return (current + 1) % skills.length;
      });
    }, 1400);

    return () => clearInterval(interval);
  }, [isMobile]);

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Lihuohor79-developer",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/lihuo-hor-b415a9412",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/share/19LPfRnc7W/?mibextid=wwXIfr",
    },
    {
      icon: FaTelegram,
      href: "https://t.me/Lyhour79QTY",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Blue Tech Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--color-primary)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t("hero.badge")}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {t("hero.title1")}{" "}
                <span className="text-primary glow-text">
                  {t("hero.title2")}
                </span>
                <br />
                {t("hero.title3")}
                <br />
                to{" "}
                <span className="font-serif italic font-normal text-white">
                  {t("hero.title4")}
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                {t("hero.description")}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                {t("hero.contact")}
                <ArrowRight className="w-5 h-5" />
              </Button>

              <a
                href="/my-resume-2026_zfq.pdf"
                download="my-resume-2026_zfq.pdf"
                className="inline-block"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  {t("hero.downloadCV")}
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                {t("hero.followMe")}
              </span>

              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Lyhour Hor"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Available Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                    <span className="text-sm font-medium">
                      {t("hero.available")}
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>

                  <div className="text-xs text-muted-foreground">
                    {t("hero.yearsExp")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TECHNOLOGY MARQUEE
        ====================================================== */}

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            {t("hero.technologies")}
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => {
                const skillIndex = idx % skills.length;
                const isMobileActive = isMobile && activeSkill === skillIndex;

                return (
                  <div
                    key={`${skill.name}-${idx}`}
                    className="flex-shrink-0 px-3 py-4 sm:px-4"
                  >
                    <div
                      className={`
                        group relative flex h-20 w-28
                        flex-col items-center justify-center
                        gap-2 rounded-2xl border
                        bg-[#0d1420]/80 px-3
                        backdrop-blur-xl
                        transition-all duration-500 ease-out
                        sm:h-24 sm:w-32

                        ${
                          isMobileActive
                            ? "-translate-y-2 scale-[1.03] border-primary/40 bg-[#111a28] shadow-[0_18px_45px_rgba(79,140,255,0.22)]"
                            : "border-white/[0.07]"
                        }

                        hover:-translate-y-2
                        hover:scale-[1.03]
                        hover:border-primary/40
                        hover:bg-[#111a28]
                        hover:shadow-[0_18px_45px_rgba(79,140,255,0.22)]
                      `}
                    >
                      {/* Bottom Glow */}
                      <div
                        className={`
                          pointer-events-none
                          absolute inset-x-4 -bottom-3
                          h-5 rounded-full
                          bg-primary/25 blur-xl
                          transition-all duration-500

                          ${
                            isMobileActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }
                        `}
                      />

                      {/* Top Light */}
                      <div
                        className={`
                          pointer-events-none
                          absolute inset-x-6 top-0
                          h-px
                          bg-gradient-to-r
                          from-transparent
                          via-primary/70
                          to-transparent
                          transition-all duration-500

                          ${
                            isMobileActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }
                        `}
                      />

                      {/* Technology Icon */}
                      {skill.image && (
                        <div
                          className={`
                            relative z-10
                            transition-all duration-500 ease-out

                            ${
                              isMobileActive
                                ? "-translate-y-1"
                                : "group-hover:-translate-y-1"
                            }
                          `}
                        >
                          <img
                            src={skill.image}
                            alt={`${skill.name} icon`}
                            className={`
                              h-8 w-8
                              object-contain
                              transition-all duration-500 ease-out

                              ${
                                isMobileActive
                                  ? "scale-110 opacity-100 grayscale-0"
                                  : "opacity-55 grayscale group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                              }
                            `}
                          />
                        </div>
                      )}

                      {/* Technology Name */}
                      <span
                        className={`
                          relative z-10
                          text-center
                          text-[10px]
                          font-semibold
                          transition-all duration-500
                          sm:text-xs

                          ${
                            isMobileActive
                              ? "text-foreground"
                              : "text-muted-foreground/70 group-hover:text-foreground"
                          }
                        `}
                      >
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">
            {t("hero.scroll")}
          </span>

          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
