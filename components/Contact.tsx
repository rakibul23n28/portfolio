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
    <section className="py-20 sm:py-24" id="contact">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
          Connect
        </span>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.06em] text-white">
          Let&apos;s build something memorable.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5 rounded-[2rem] border border-[var(--line)] bg-[radial-gradient(circle_at_top_left,rgba(255,45,85,0.10),transparent_28%),rgba(17,17,24,0.84)] p-6 sm:p-8">
          <p className="mb-8 text-lg leading-8 text-[var(--muted)]">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="space-y-3">
            {socials.map((social, index) => {
              const Icon = getLucideIcon(social.icon);
              const accentStyle = social.color ? { color: social.color } : {};
              return (
                <a
                  key={`${social.name}-${index}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center rounded-2xl border border-[var(--line)] bg-white/3 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,45,85,0.35)] hover:bg-[rgba(255,45,85,0.03)]"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[rgba(255,255,255,0.04)] transition-colors duration-200 group-hover:border-[rgba(255,45,85,0.4)]"
                    style={accentStyle}
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : <Icons.Link className="h-5 w-5" />}
                  </div>
                  <div className="ml-4 flex-1">
                    <span className="block text-base font-medium text-white">{social.name}</span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Connect with me</span>
                  </div>
                  <span className="text-xl text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[var(--accent)]">→</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 rounded-[2rem] border border-[var(--line)] bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.12),transparent_25%),rgba(17,17,24,0.9)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(255,45,85,0.08)] text-[var(--accent)]">
              <SendHorizonal className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">Send a direct message</h3>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">I usually reply within a few hours.</p>
            </div>
          </div>

          <MailForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
