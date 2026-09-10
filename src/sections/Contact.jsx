import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const contactInfo = [
  {
    icon: Mail,
    labelKey: "email",
    value: "lyhour.science.kh29@gmail.com",
    href: "mailto:lyhour.science.kh29@gmail.com",
  },
  {
    icon: Phone,
    labelKey: "phone",
    value: "+91 7208183895",
    href: "tel:+917208183895",
  },
  {
    icon: MapPin,
    labelKey: "location",
    value: "Mumbai, India",
    href: "#",
  },
];

export const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null, // "success" or "error"
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setSubmitStatus({
        type: "error",
        message:
          error?.text ||
          error?.message ||
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl min-w-0 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t("contact.label")}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t("contact.title1")}{" "}
            <span className="font-serif italic font-normal text-white">
              {t("contact.title2")}
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t("contact.description")}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.name")}
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t("contact.namePlaceholder")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.email")}
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t("contact.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.message")}
                </label>

                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>{t("contact.sending")}</>
                ) : (
                  <>
                    {t("contact.send")}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}

                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass w-full min-w-0 rounded-3xl p-5 sm:p-8">
              <h3 className="mb-6 text-xl font-semibold">
                {t("contact.information")}
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="
                      group
                      flex
                      w-full
                      min-w-0
                      items-center
                      gap-4
                      rounded-xl
                      p-3
                      transition-colors
                      hover:bg-surface
                      sm:p-4
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        min-w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-primary/10
                        transition-colors
                        group-hover:bg-primary/20
                      "
                    >
                      <item.icon className="h-5 w-5 shrink-0 text-primary" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <div className="text-sm text-muted-foreground">
                        {t(`contact.${item.labelKey}`)}
                      </div>

                      <div
                        className="
                          break-all
                          text-sm
                          font-medium
                          leading-6
                          sm:text-base
                        "
                      >
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                <span className="font-medium">
                  {t("contact.availableTitle")}
                </span>
              </div>

              <p className="text-muted-foreground text-sm">
                {t("contact.availableDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
