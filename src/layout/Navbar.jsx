import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

const navLinks = [
  { href: "#about", key: "nav.about" },
  { href: "#projects", key: "nav.projects" },
  { href: "#experience", key: "nav.experience" },
  { href: "#testimonials", key: "nav.testimonials" },
  { href: "#faq", key: "nav.faq" },
];

export const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="shrink-0 text-xl font-bold tracking-tight hover:text-primary"
        >
          Lyhour<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA + Language */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />

          <Button
            size="sm"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            {t("nav.contact")}
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-white/[0.05]"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6 sm:px-6">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(link.key)}
              </a>
            ))}

            <div className="pt-2">
              <Button
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);

                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {t("nav.contact")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
