import { useEffect, useState } from "react";
import {
  Code2,
  Lightbulb,
  Rocket,
  User,
  CloudCog,
  BrainCircuit,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const highlights = [
  {
    icon: Code2,
    key: "cleanCode",
    color: "#4f8cff",
  },
  {
    icon: Rocket,
    key: "performance",
    color: "#22d3ee",
  },
  {
    icon: User,
    key: "collaboration",
    color: "#8b7cff",
  },
  {
    icon: Lightbulb,
    key: "innovation",
    color: "#f5a623",
  },
  {
    icon: CloudCog,
    key: "devops",
    color: "#34d399",
  },
  {
    icon: BrainCircuit,
    key: "ai",
    color: "#ec4899",
  },
];

export const About = () => {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(0);

  /*
   * Detect mobile/small screens.
   * Tailwind's sm breakpoint is 640px,
   * so this matches the grid breakpoint.
   */
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

  /*
   * Automatically highlight one card at a time
   * on mobile.
   *
   * 1.8 seconds gives enough time to see
   * each card before moving to the next one.
   */
  useEffect(() => {
    if (!isMobile) {
      setActiveHighlight(0);
      return;
    }

    const interval = setInterval(() => {
      setActiveHighlight((current) => {
        return (current + 1) % highlights.length;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                {t("about.label")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              {t("about.title1")}
              <span className="font-serif italic font-normal text-white">
                {" "}
                {t("about.title2")}
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
              <p>{t("about.paragraph4")}</p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "{t("about.mission")}"
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;

              const isMobileActive = isMobile && activeHighlight === idx;

              return (
                <div
                  key={item.key}
                  className={`highlight-card group relative glass p-6 rounded-2xl animate-fade-in overflow-hidden ${
                    isMobileActive ? "is-mobile-active" : ""
                  }`}
                  style={{
                    "--highlight-color": item.color,
                    animationDelay: `${(idx + 1) * 100}ms`,
                  }}
                >
                  {/* Animated top line */}
                  <span className="highlight-line" />

                  {/* Soft color glow */}
                  <span className="highlight-glow" />

                  {/* Icon */}
                  <div className="highlight-icon relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-white">
                    {t(`about.highlights.${item.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                    {t(`about.highlights.${item.key}.description`)}
                  </p>

                  {/* Animated bottom line */}
                  <span className="highlight-bottom-line" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
