import React from "react";
import portfolio from "@/data/portfolio.json";
import { CheckCircle2, Link2Icon } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 sm:py-24" id="about">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
          About
        </span>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.06em] text-white">
          The craft behind every build.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 rounded-[2rem] border border-[var(--line)] bg-[rgba(17,17,24,0.9)] p-6 shadow-[0_28px_70px_rgba(0,0,0,0.35)] sm:p-8">
          <div className="mb-7 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">Personal Information</h3>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(61,220,151,0.4)] bg-[rgba(61,220,151,0.08)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--ok)]">
              <span className="h-2 w-2 rounded-full bg-[var(--ok)]" />
              Open to work
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { label: "Nationality", value: portfolio.personalInfo.nationality },
              { label: "Location", value: portfolio.personalInfo.location },
              { label: "Degree", value: portfolio.personalInfo.degree },
              { label: "Employment", value: portfolio.personalInfo.employment },
              { label: "Email", value: portfolio.personalInfo.email },
              { label: "Phone", value: portfolio.personalInfo.phone },
              { label: "Freelance", value: portfolio.personalInfo.freelance },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--line)] bg-white/3 p-4">
                <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                  {item.label}
                </span>
                <span className="mt-2 block text-base font-medium text-white">{item.value}</span>
              </div>
            ))}

            <div className="rounded-2xl border border-[var(--line)] bg-white/3 p-4 md:col-span-2">
              <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                Website
              </span>
              <a
                href={portfolio.personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-base font-medium text-[var(--accent)] transition-colors hover:text-[#ff8ca1]"
              >
                Visit Website <Link2Icon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[rgba(255,45,85,0.22)] bg-[rgba(255,45,85,0.05)] p-4 text-sm leading-6 text-[var(--text)]">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
            <p>
              Open to collaborating on full-stack architecture, product thinking, and real-time TypeScript projects.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-[2rem] border border-[var(--line)] bg-[rgba(17,17,24,0.75)] p-6 shadow-[0_28px_70px_rgba(0,0,0,0.3)] sm:p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">Technical Mastery</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">Proficiency weighted by project experience.</p>
          </div>

          <div className="space-y-4">
            {portfolio.skills.map((skill) => (
              <div key={skill.name} className="rounded-2xl border border-[var(--line)] bg-white/3 p-4">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                  <span className="text-sm font-semibold text-[var(--accent)]">{skill.level}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),#ff9a7a)] shadow-[0_0_18px_rgba(255,45,85,0.4)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
