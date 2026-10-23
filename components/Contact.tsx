import * as Icons from "lucide-react";
import React from "react";
import portfolioData from "@/data/portfolio.json";
import MailForm from "@/components/client/MailForm";
import { ArrowUpRight, SendHorizontal } from "lucide-react";

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
          Contact
        </span>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.06em] text-[var(--text)]">
          Let&apos;s build something memorable.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6 sm:p-8 lg:col-span-5">
          <p className="max-w-md text-base leading-7 text-[var(--muted)]">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="mt-8">
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
              Social profiles
            </div>
            <div className="border-t border-[var(--line)]">
              {socials.map((social, index) => {
                const Icon = getLucideIcon(social.icon);
                return (
                  <a
                    key={`${social.name}-${index}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 border-b border-[var(--line)] py-3.5 transition-colors hover:text-[var(--accent)]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                      {Icon ? <Icon className="h-4 w-4" /> : <Icons.Link className="h-4 w-4" />}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-sm font-medium text-[var(--text)]">
                      {social.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_30px_80px_var(--shadow)] sm:p-8 lg:col-span-7">
          <div className="mb-6 flex items-start justify-between gap-4 border-b border-[var(--line)] pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--accent)]">
                <SendHorizontal className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--text)]">
                  Send a message
                </h3>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  I usually reply within a few hours.
                </p>
              </div>
            </div>
          </div>

          <MailForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
