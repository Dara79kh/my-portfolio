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
  },
  {
    icon: Rocket,
    key: "performance",
  },
  {
    icon: User,
    key: "collaboration",
  },
  {
    icon: Lightbulb,
    key: "innovation",
  },
  {
    icon: CloudCog,
    key: "devops",
  },
  {
    icon: BrainCircuit,
    key: "ai",
  },
];

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Columns */}
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
              <p className="text-lg font-medium italic text-foreground ">
                "{t("about.mission")}"
              </p>
            </div>
          </div>
          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={item.key}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {t(`about.highlights.${item.key}.title`)}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {t(`about.highlights.${item.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
