import React from "react";
import portfolio from "@/data/portfolio.json";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const About = () => {
  const personalDetails = [
    { label: "Location", value: portfolio.personalInfo.location },
    { label: "Nationality", value: portfolio.personalInfo.nationality },
    { label: "Degree", value: portfolio.personalInfo.degree },
    { label: "Employment", value: portfolio.personalInfo.employment },
    { label: "Email", value: portfolio.personalInfo.email },
    { label: "Phone", value: portfolio.personalInfo.phone },
    { label: "Freelance", value: portfolio.personalInfo.freelance },
  ];

  return (
    <section className="py-20 sm:py-24" id="about">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
          About
        </span>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.06em] text-[var(--text)]">
          Learning by building.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_28px_70px_var(--shadow)] sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                  Education · 2023 — Present
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-3xl">
                  Computer Science &amp; Engineering student
                </h3>
                <p className="mt-2 text-base text-[var(--muted)]">
                  United International University
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--ok)_40%,transparent)] bg-[color-mix(in_srgb,var(--ok)_10%,var(--surface))] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--ok)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--ok)]" />
                Open to work
              </span>
            </div>

            <div className="mt-7 border-t border-[var(--line)] pt-5">
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                Focus areas
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Data science", "Software development"].map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <dl className="mt-7 grid gap-x-6 sm:grid-cols-2">
              {personalDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-0 items-baseline justify-between gap-3 border-t border-[var(--line)] py-3"
                >
                  <dt className="shrink-0 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                    {item.label}
                  </dt>
                  <dd className="min-w-0 break-words text-right text-sm font-medium text-[var(--text)]">
                    {item.value}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-3 border-t border-[var(--line)] py-3">
                <dt className="shrink-0 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                  Website
                </dt>
                <dd>
                  <a
                    href={portfolio.personalInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--text)]"
                  >
                    Portfolio <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-5 flex items-start gap-3 border-t border-[var(--line)] pt-5 text-sm leading-6 text-[var(--muted)]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
              <p>
                Open to collaborating on full-stack architecture, product thinking, and real-time TypeScript projects.
              </p>
            </div>
          </div>
        </div>

        <div
          id="skills"
          className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_28px_70px_var(--shadow)] lg:col-span-5 sm:p-8"
        >
          <div className="mb-6">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Skills
            </span>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">
              Technical toolkit
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Proficiency weighted by project experience.
            </p>
          </div>

          <div>
            {portfolio.skills.map((skill) => (
              <div key={skill.name} className="border-t border-[var(--line)] py-3.5">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-[var(--text)]">{skill.name}</span>
                  <span className="font-[var(--font-mono)] text-xs text-[var(--accent)]">
                    {skill.level}%
                  </span>
                </div>
                <div
                  role="meter"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Number(skill.level)}
                  className="h-1 overflow-hidden rounded-full bg-[var(--surface-hi)]"
                >
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--violet))]"
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
