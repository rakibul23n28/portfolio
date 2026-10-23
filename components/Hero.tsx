import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Download, MapPin } from "lucide-react";
import portfolio from "@/data/portfolio.json";
import DyTitle from "./client/DyTitle";

const profileImage = "/portfolio/profile.jpeg";

const Hero = () => {
  const titleText = portfolio.title[0] ?? "FullStack Developer";
  const titleWords = titleText.split(" ");
  const accentWord = titleWords[titleWords.length - 1];
  const leadingWords = titleWords.slice(0, -1).join(" ");

  return (
    <section className="relative isolate overflow-hidden pb-10 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[-9rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_22%,transparent),transparent_68%)] blur-3xl"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        <div className="relative z-10 max-w-[46rem]">
          <div className="mb-8 flex items-center gap-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--accent)]">
              01
            </span>
            <span className="h-px w-8 bg-[var(--accent)]" />
            <span>Portfolio / Profile</span>
          </div>

          <h1 className="max-w-[11ch] text-[clamp(3.75rem,10vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em] text-[var(--text)]">
            {portfolio.name.split(" ").map((namePart, index) => (
              <React.Fragment key={`${namePart}-${index}`}>
                {index > 0 && <br />}
                {namePart}
              </React.Fragment>
            ))}
            <span className="ml-1 align-top font-[var(--font-mono)] text-[0.18em] font-normal tracking-normal text-[var(--accent)]">
              .
            </span>
          </h1>

          <h2 className="mt-7 flex flex-wrap items-baseline gap-x-3 text-[clamp(1.5rem,4vw,3.25rem)] leading-none tracking-[-0.06em]">
            {leadingWords && (
              <span className="text-[var(--muted)]">{leadingWords}</span>
            )}
            <span className="bg-[linear-gradient(135deg,var(--text)_10%,var(--accent-strong)_42%,var(--accent)_72%,var(--violet)_100%)] bg-clip-text font-[var(--font-instrument)] text-[1.08em] italic text-transparent">
              {accentWord}
            </span>
          </h2>

          <div className="mt-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
            <span className="text-[var(--accent)]">Focus</span>
            <span className="h-px w-7 bg-[var(--line)]" />
            <span className="text-[var(--text)]">
              <DyTitle title={portfolio.title} />
            </span>
          </div>

          <p className="mt-6 max-w-xl border-l border-[color-mix(in_srgb,var(--accent)_55%,transparent)] pl-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {portfolio.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={portfolio.buttons[0].url}
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent-strong),var(--accent))] px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-[var(--accent-ink)] uppercase shadow-[0_20px_40px_color-mix(in_srgb,var(--accent)_24%,transparent)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              {portfolio.buttons[0].label}
              <ArrowDownRight className="ml-1 h-4 w-4 opacity-60 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href={portfolio.buttons[1].url}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold tracking-[0.1em] text-[var(--text)] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {portfolio.buttons[1].label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[25rem] lg:mr-5 lg:max-w-[23rem] lg:justify-self-end">
          <div
            aria-hidden="true"
            className="absolute -inset-7 rotate-[-10deg] rounded-[40%_60%_56%_44%/43%_36%_64%_57%] border border-dashed border-[color-mix(in_srgb,var(--accent)_35%,transparent)]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-2 top-10 h-28 w-28 rounded-full bg-[color-mix(in_srgb,var(--violet)_22%,transparent)] blur-3xl sm:-right-7 sm:top-4 sm:h-36 sm:w-36"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-5 h-24 w-24 rounded-full bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] blur-3xl"
          />

          <div className="relative mx-auto w-full max-w-[22rem]">
            <div className="relative aspect-[0.88] overflow-hidden rounded-[48%_52%_42%_58%/35%_38%_62%_65%] border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] bg-[var(--surface-hi)]">
              <Image
                src={profileImage}
                alt="Rakibul Hasan portrait"
                fill
                priority
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 48vw, 352px"
                className="scale-[1.04] object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_78%_82%_at_50%_43%,transparent_45%,color-mix(in_srgb,var(--bg)_30%,transparent)_76%,var(--bg)_100%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,color-mix(in_srgb,var(--bg)_22%,transparent)_72%,var(--bg)_100%)]"
              />

              <div className="absolute left-[12%] top-[13%] flex items-center gap-2 rounded-full border border-white/20 bg-[rgba(17,13,19,0.65)] px-3 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[var(--ok)] shadow-[0_0_10px_color-mix(in_srgb,var(--ok)_70%,transparent)]" />
                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white sm:text-[10px]">
                  {portfolio.personalInfo.freelance}
                </span>
              </div>

            </div>

            <div className="absolute -bottom-8 left-1/2 z-10 w-[min(90%,19rem)] -translate-x-1/2 rounded-2xl border border-[var(--line)] bg-[var(--nav-glass)] px-4 py-3 shadow-[0_18px_45px_var(--shadow)] backdrop-blur-xl sm:-bottom-7 sm:px-5">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold tracking-[-0.04em] text-[var(--text)]">
                    {portfolio.name}
                  </p>
                  <p className="mt-1 truncate font-[var(--font-mono)] text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {portfolio.personalInfo.degree}
                  </p>
                </div>
                <MapPin className="h-4 w-4 shrink-0 text-[var(--accent)]" />
              </div>
            </div>
          </div>

          <div className="relative mt-14 flex items-center justify-between gap-4 px-1 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.14em] text-[var(--muted)] sm:mt-16 sm:px-2 sm:text-[10px]">
            <span className="inline-flex min-w-0 items-center gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
              <span className="truncate">{portfolio.personalInfo.location}</span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--ok)]" />
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
