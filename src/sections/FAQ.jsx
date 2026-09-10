import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

const faqs = [
  { key: "applications" },
  { key: "focus" },
  { key: "ai" },
  { key: "technologies" },
  { key: "learning" },
  { key: "opportunities" },
];

export const FAQ = () => {
  const { t } = useTranslation();
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
            {t("faq.label")}
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
            {t("faq.title1")}{" "}
            <span className="font-serif italic font-normal text-white">
              {t("faq.title2")}
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in animation-delay-200">
            {t("faq.description")}
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
                      {t(`faq.items.${faq.key}.question`)}
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
                        {t(`faq.items.${faq.key}.answer`)}
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
            {t("faq.bottom")}
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
