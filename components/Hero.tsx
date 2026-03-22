import React from "react";
import portfolio from "@/data/portfolio.json";
import DyTitle from "./client/DyTitle";
import { DownloadIcon, MailIcon } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Decorative Top Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col gap-6 pt-16 pb-12 dark:text-white items-center justify-center text-center max-w-4xl mx-auto">
        {/* Subtle Greeting/Accent */}
        <div className="flex flex-col gap-1.5 items-center justify-center mb-2">
          <span className="w-16 h-[3px] bg-rose-500 rounded-full"></span>
          <span className="w-8 h-[3px] bg-rose-500 rounded-full"></span>
        </div>

        {/* Main Heading */}
        <h1 className="capitalize text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
          I&apos;m{" "}
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text">
            {portfolio.name}
          </span>
        </h1>

        {/* Dynamic Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-rose-500">
          <DyTitle title={portfolio.title} />
        </h2>

        {/* Description constrained for readability */}
        <p className="mt-2 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          {portfolio.description}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6 w-full sm:w-auto">
          <Link
            href={portfolio.buttons[0].url}
            download
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-bold rounded-full shadow-lg shadow-rose-500/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <DownloadIcon className="w-5 h-5" /> Download CV
          </Link>

          <Link
            href={portfolio.buttons[1].url}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-gray-800 border-2 border-rose-600 text-rose-600 dark:text-rose-400 font-bold rounded-full hover:bg-rose-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-0.5"
          >
            <MailIcon className="w-5 h-5" /> Hire me
          </Link>
        </div>
      </div>

      {/* Modern Bottom Separator or Scroll Indicator */}
      <div className="flex flex-col gap-1.5 items-center justify-center mt-8 mb-12">
        <span className="w-8 h-[3px] bg-rose-500/50 rounded-full"></span>
        <span className="w-16 h-[3px] bg-rose-500/50 rounded-full"></span>
      </div>
    </div>
  );
};

export default Hero;
