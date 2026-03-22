import * as Icons from "lucide-react";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import MailForm from "@/components/client/MailForm";
import { SendHorizonal } from "lucide-react";

const socials = portfolioData.socials;

const getLucideIcon = (
  name: string,
): React.FC<{ className?: string }> | undefined => {
  return Icons[name as keyof typeof Icons] as React.FC<{ className?: string }>;
};

const Contact = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6" id="contact">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Let&apos;s Connect
        </h2>
        <div className="flex items-center gap-1">
          <span className="w-16 h-[3px] bg-rose-500 rounded-full"></span>
          <span className="w-4 h-[3px] bg-rose-500 rounded-full"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Panel: Info & Modern Profile Statistics */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full bg-gray-50/50 dark:bg-gray-800/40 p-8 rounded-3xl border border-gray-100 dark:border-gray-700/50">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            {/* Social Links List */}
            <div className="space-y-4">
              {socials.map((social, index) => {
                const Icon = getLucideIcon(social.icon);
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700/70 shadow-sm hover:shadow-md hover:border-rose-500 dark:hover:border-rose-500 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700/50 group-hover:bg-rose-50 dark:group-hover:bg-rose-500/10 transition-colors">
                      {Icon ? (
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-rose-500" />
                      ) : (
                        <Icons.Link className="w-6 h-6" />
                      )}
                    </div>
                    <div className="ml-4">
                      <span className="block text-sm font-bold text-gray-900 dark:text-white">
                        {social.name}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 group-hover:text-rose-500 transition-colors">
                        Connect with me
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          {/* Statistics Display
          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            {[
              { label: "Client Rating", value: "4.9/5" },
              { label: "Successful Hires", value: "24+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm"
              >
                <span className="text-xl font-bold font-mono text-gray-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 tracking-wider uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div> */}
        </div>

        {/* 👉 Right Panel: Interactive, Modern Direct Messaging Card */}
        <div className="lg:col-span-7 relative group h-full">
          {/* Animated Ambient Glow for the Contact Card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>

          <div className="relative h-full bg-white dark:bg-gray-800/90 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700/50 backdrop-blur-xl flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-rose-500/10 dark:bg-rose-500/20 rounded-xl text-rose-500">
                <SendHorizonal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Send a direct message
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  I usually reply within a few hours.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <MailForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
