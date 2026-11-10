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
import { useState } from "react";

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
  const [showAllSkills, setShowAllSkills] = useState(false);

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
          {/* Left Column - Text Content */}
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
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Lyhour Hor"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />

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

        {/* Skills Section */}
        <div className="relative mt-24 sm:mt-28 lg:mt-32 animate-fade-in animation-delay-600">
          {/* Ambient Background */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.055] blur-[110px]" />

          {/* Section Header */}
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#4f8cff]" />
              {t("hero.skills.label")}
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("hero.technologies")}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("hero.skills.description")}
            </p>

            {/* Technology Count */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.025] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span className="text-xs font-medium text-muted-foreground">
                {t("hero.skills.count", { count: skills.length })}
              </span>
            </div>
          </div>

          {/* Technology Cards */}
          <div
            id="technology-stack"
            className={`mx-auto grid max-w-6xl grid-cols-2 gap-3 overflow-hidden pt-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-5 transition-[max-height] duration-700 ease-in-out ${
              showAllSkills
                ? "max-h-[3000px]"
                : "max-h-[620px] sm:max-h-[520px] md:max-h-[380px]"
            }`}
          >
            {skills.map((skill, idx) => {
              const accentColors = [
                "hover:border-blue-400/40",
                "hover:border-cyan-400/40",
                "hover:border-violet-400/40",
                "hover:border-indigo-400/40",
                "hover:border-sky-400/40",
              ];

              return (
                <div
                  key={skill.name}
                  className={`group relative flex min-h-[138px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1420]/75 px-3 py-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 will-change-transform hover:bg-[#111d2d] hover:shadow-[0_15px_35px_rgba(79,140,255,0.10)] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[155px] sm:rounded-3xl sm:px-4 sm:py-6 ${accentColors[idx % accentColors.length]}`}
                >
                  {/* Background Glow */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top Gradient Line */}
                  <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 group-hover:w-4/5" />

                  {/* Technology Icon */}
                  <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.035] transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-primary/20 group-hover:bg-primary/[0.08] sm:h-14 sm:w-14">
                    {skill.image ? (
                      <img
                        src={skill.image}
                        alt={`${skill.name} icon`}
                        loading="lazy"
                        className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
                      />
                    ) : (
                      <span className="text-xl font-bold text-primary">
                        {skill.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Technology Name - Keep Original */}
                  <span className="relative z-10 max-w-full break-words text-xs font-semibold leading-relaxed tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-sm">
                    {skill.name}
                  </span>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 transition-all duration-500 group-hover:w-1/2" />
                </div>
              );
            })}
          </div>

          {/* Expand / Collapse Button */}
          {skills.length > 8 && (
            <div className="relative z-10 mt-8 flex justify-center sm:mt-10">
              <button
                type="button"
                onClick={() => setShowAllSkills((prev) => !prev)}
                aria-expanded={showAllSkills}
                aria-controls="technology-stack"
                className="group inline-flex items-center gap-3 rounded-full border border-primary/25 bg-gradient-to-r from-primary/[0.12] to-cyan-400/[0.06] px-6 py-3 text-sm font-semibold text-foreground shadow-[0_0_25px_rgba(79,140,255,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(79,140,255,0.16)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>
                  {showAllSkills
                    ? t("hero.skills.showLess")
                    : t("hero.skills.showMore", {
                        count: skills.length - 8,
                      })}
                </span>

                <ChevronDown
                  className={`h-4 w-4 text-primary transition-transform duration-500 ${
                    showAllSkills ? "rotate-180" : "group-hover:translate-y-0.5"
                  }`}
                />
              </button>
            </div>
          )}

          {/* Section Footer */}
          <div className="mt-10 flex items-center justify-center gap-3 sm:mt-12">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-border" />

            <p className="text-center text-xs font-medium tracking-wide text-muted-foreground/70">
              {t("hero.skills.footer")}
            </p>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-border" />
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
