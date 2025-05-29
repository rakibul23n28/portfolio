import * as Icons from "lucide-react";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import MailForm from "@/components/client/MailForm";
const socials = portfolioData.socials;

const getLucideIcon = (
  name: string
): React.FC<{ className?: string; color?: string }> | undefined => {
  return Icons[name as keyof typeof Icons] as React.FC<{
    className?: string;
    color?: string;
  }>;
};

const Contact = () => {
  return (
    <section className="py-10" id="contact">
      <div className="flex flex-col gap-2 mb-2 md:mb-4 flex-4">
        <h2 className="text-3xl  font-serif font-semibold">
          Let&apos;s get in touch
        </h2>
        <span className="w-16 h-[4px] bg-rose-500 rounded"></span>
        <span className="w-8 h-[4px] bg-rose-500 rounded"></span>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 md:divide-x md:divide-gray-300 dark:divide-gray-700">
        <div className="flex flex-col gap-2 mb-2 md:mb-4 flex-4">
          <p className="text-lg">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="space-y-4">
            {socials.map((social, index) => {
              const Icon = getLucideIcon(social.icon);
              return (
                <p
                  key={index}
                  className="flex items-center mb-4 justify-center"
                >
                  {Icon && (
                    <Icon
                      className="w-6 h-6 mr-2 sm:mr-6"
                      color={social.color}
                    />
                  )}
                  <span className="text-xl">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </a>
                  </span>
                </p>
              );
            })}
          </div>
        </div>
        <MailForm />
      </div>
    </section>
  );
};

export default Contact;
