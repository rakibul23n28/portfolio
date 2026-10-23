import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, MapPin, Circle } from "lucide-react";
import portfolio from "@/data/portfolio.json";
import DyTitle from "./client/DyTitle";

const profileImage = "/portfolio/profile.jpeg";

const Hero = () => {
  const titleText = portfolio.title[0] ?? "FullStack Developer";
  const titleWords = titleText.split(" ");
  const accentWord = titleWords[titleWords.length - 1];
  const leadingWords = titleWords.slice(0, -1).join(" ");

  return (
    <section className="relative overflow-hidden pb-10 pt-20 sm:pb-16 lg:pb-24">
      <div className="absolute inset-x-0 top-[-10rem] z-0 h-[28rem] bg-[radial-gradient(circle,_rgba(255,45,85,0.33),_rgba(124,92,255,0.08)_35%,_transparent_70%)] blur-3xl" />

      <div className="relative z-10 grid items-center gap-10 pt-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div className="max-w-[42rem]">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">
            <span className="inline-block h-px w-12 bg-[var(--accent)]" />
            I&apos;m
          </div>

          <h1 className="text-[clamp(3.5rem,9vw,7.8rem)] leading-[0.9] tracking-[-0.06em] text-white">
            {portfolio.name}
          </h1>

          <h2 className="mt-4 flex flex-wrap items-baseline gap-x-3 text-[clamp(1.6rem,4vw,3.5rem)] leading-none tracking-[-0.06em] text-white/90">
            <span className="block text-[var(--muted)]">{leadingWords}</span>
            <span className="block bg-[linear-gradient(135deg,#fff_10%,#ff8e8c_32%,#ff2d55_58%,#ffbf8a_100%)] bg-clip-text font-[var(--font-instrument)] text-[1.06em] italic text-transparent">
              {accentWord}
            </span>
          </h2>

          <div className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            <DyTitle title={portfolio.title} />
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            {portfolio.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={portfolio.buttons[0].url}
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent),#ff7a59)] px-6 py-3.5 text-sm font-semibold tracking-[0.12em] text-[#08080C] uppercase shadow-[0_20px_40px_rgba(255,45,85,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              {portfolio.buttons[0].label}
            </Link>

            <Link
              href={portfolio.buttons[1].url}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/3 px-6 py-3.5 text-sm font-semibold tracking-[0.12em] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(255,45,85,0.55)] hover:text-[var(--accent)]"
            >
              {portfolio.buttons[1].label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[32rem] items-center justify-center">
          <div className="relative flex h-[27rem] w-[22rem] items-center justify-center sm:h-[31rem] sm:w-[25rem]">
            <div className="absolute inset-0 rounded-[42%_58%_51%_49%/41%_39%_61%_59%] border border-[rgba(255,255,255,0.08)] bg-[radial-gradient(circle_at_30%_25%,rgba(255,128,128,0.24),transparent_28%),linear-gradient(180deg,rgba(21,21,29,0.96),rgba(15,15,22,0.77))] shadow-[0_40px_80px_rgba(0,0,0,0.55)]" />
            <div className="absolute inset-6 overflow-hidden rounded-[38%_62%_52%_48%/38%_35%_65%_62%] border border-white/10 bg-[rgba(255,255,255,0.03)]">
              <Image
                src={profileImage}
                alt="Rakibul Hasan portrait"
                fill
                priority
                className="object-cover object-center scale-[1.08]"
              />
            </div>
            <div className="absolute -left-2 bottom-6 flex items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(10,11,17,0.8)] px-3 py-2 backdrop-blur-xl">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--ok)] shadow-[0_0_10px_rgba(61,220,151,0.8)]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text)]">
                {portfolio.personalInfo.freelance}
              </span>
            </div>

            <div className="absolute -right-2 top-8 flex h-28 w-28 items-center justify-center rounded-full border border-[var(--line)] bg-[rgba(10,11,17,0.7)] text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] backdrop-blur-xl sm:h-32 sm:w-32">
              <div className="relative flex h-full w-full animate-[spin_18s_linear_infinite] items-center justify-center rounded-full">
                <span className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.08)]" />
                <span className="absolute inset-2 rounded-full border border-dashed border-[rgba(255,255,255,0.1)]" />
                <span className="absolute inset-0 flex items-center justify-center text-center text-[9px] leading-4 text-white/90">
                  {portfolio.personalInfo.freelance} • {portfolio.personalInfo.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-[var(--line)] pt-6 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:gap-6">
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
          {portfolio.personalInfo.location}
        </span>
        <span className="inline-flex items-center gap-2">
          <Circle className="h-2.5 w-2.5 fill-[var(--ok)] text-[var(--ok)]" />
          Available for projects
        </span>
      </div>
    </section>
  );
};

export default Hero;
