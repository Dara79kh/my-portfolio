import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  GB as EnglandFlag,
  KH as CambodiaFlag,
  CN as ChinaFlag,
} from "country-flag-icons/react/3x2";

const languages = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    Flag: EnglandFlag,
  },
  {
    code: "km",
    name: "Khmer",
    nativeName: "ខ្មែរ",
    Flag: CambodiaFlag,
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    Flag: ChinaFlag,
  },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const CurrentFlag = currentLanguage.Flag;

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem("portfolio-language", languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          group
          flex h-10 items-center gap-2
          rounded-full
          border border-white/10
          bg-white/[0.035]
          px-3
          text-foreground
          shadow-[0_3px_14px_rgba(0,0,0,0.18)]
          backdrop-blur-xl
          transition-all duration-300
          hover:border-primary/30
          hover:bg-primary/[0.06]
          hover:shadow-[0_5px_18px_rgba(32,178,166,0.12)]
        "
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span
          className="
            flex
            h-[20px]
            w-[30px]
            shrink-0
            overflow-hidden
            rounded-[3px]
            border border-white/20
            bg-white/5
            shadow-[0_1px_5px_rgba(0,0,0,0.25)]
          "
        >
          <CurrentFlag
            title={currentLanguage.name}
            width={30}
            height={20}
            style={{
              width: "30px",
              height: "20px",
              minWidth: "30px",
              maxWidth: "none",
              display: "block",
            }}
          />
        </span>

        <span className="hidden text-[13px] font-medium leading-none sm:block">
          {currentLanguage.nativeName}
        </span>

        <ChevronDown
          size={13}
          strokeWidth={1.8}
          className={`text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="
              absolute
              right-0
              top-[calc(100%+8px)]
              z-50
              w-[240px]
              overflow-hidden
              rounded-[18px]
              border border-white/[0.09]
              bg-[#11181d]/96
              p-2
              shadow-[0_16px_45px_rgba(0,0,0,0.40)]
              backdrop-blur-2xl
              animate-fade-in
            "
          >
            <div className="px-3 pb-2 pt-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {i18n.t("language.title")}
              </p>
            </div>

            <div className="space-y-1">
              {languages.map((language) => {
                const active = language.code === i18n.language;
                const Flag = language.Flag;

                return (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => changeLanguage(language.code)}
                    className={`
                      group/item
                      flex
                      min-h-[60px]
                      w-full
                      items-center
                      gap-3
                      rounded-[13px]
                      px-3
                      py-2.5
                      text-left
                      transition-all duration-200
                      ${
                        active
                          ? "bg-primary/[0.10] text-white"
                          : "text-muted-foreground hover:bg-white/[0.045] hover:text-white hover:shadow-[0_3px_12px_rgba(0,0,0,0.16)]"
                      }
                    `}
                  >
                    <span
                      className="
                        flex
                        h-[28px]
                        w-[42px]
                        shrink-0
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-[4px]
                        border border-white/[0.15]
                        bg-white/[0.04]
                        shadow-[0_2px_6px_rgba(0,0,0,0.28)]
                      "
                    >
                      <Flag
                        title={language.name}
                        width={42}
                        height={28}
                        style={{
                          width: "42px",
                          height: "28px",
                          minWidth: "42px",
                          minHeight: "28px",
                          maxWidth: "none",
                          display: "block",
                        }}
                      />
                    </span>

                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <span
                        className={`text-[14px] leading-5 ${
                          active ? "font-semibold" : "font-medium"
                        }`}
                      >
                        {language.nativeName}
                      </span>

                      <span className="text-[11px] leading-4 text-muted-foreground">
                        {language.name}
                      </span>
                    </div>

                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all duration-200
                        ${active ? "bg-primary/[0.12]" : "bg-transparent"}
                      `}
                    >
                      {active && (
                        <Check
                          size={14}
                          strokeWidth={2.2}
                          className="text-primary"
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
